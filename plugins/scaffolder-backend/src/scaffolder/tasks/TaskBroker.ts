/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CompletedTaskState, Task, TaskSpec, TaskBroker } from './types';
import { InMemoryDatabase } from './database';

export class TaskAgent implements Task {
  private heartbeartInterval?: ReturnType<typeof setInterval>;

  static create(state: TaskState, db: InMemoryDatabase) {
    const agent = new TaskAgent(state, db);
    agent.start();
    return agent;
  }

  // Runs heartbeat internally
  private constructor(
    private readonly state: TaskState,
    private readonly db: InMemoryDatabase,
  ) {}

  get spec() {
    return this.state.spec;
  }

  async emitLog(message: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async complete(result: CompletedTaskState): Promise<void> {
    this.db.setStatus(
      this.state.taskId,
      result === 'FAILED' ? 'COMPLETED' : 'FAILED',
    );
  }

  private start() {
    this.heartbeartInterval = setInterval(() => {
      if (!this.state.runId) {
        throw new Error('no run id provided');
      }
      this.db.heartBeat(this.state.runId);
    }, 1000);
  }
}

interface TaskState {
  spec: TaskSpec;
  taskId: string;
  runId: string | undefined;
}

function defer() {
  let resolve = () => {};
  const promise = new Promise<void>(_resolve => {
    resolve = _resolve;
  });
  return { promise, resolve };
}

export class MemoryTaskBroker implements TaskBroker {
  private readonly db = new InMemoryDatabase();
  private deferredDispatch = defer();

  async claim(): Promise<Task> {
    for (;;) {
      const pendingTask = await this.db.claimTask();
      if (pendingTask) {
        return TaskAgent.create(
          {
            runId: pendingTask.runId,
            taskId: pendingTask.taskId,
            spec: pendingTask.spec,
          },
          this.db,
        );
      }

      await this.waitForDispatch();
    }
  }

  async dispatch(spec: TaskSpec): Promise<void> {
    await this.db.createTask(spec);
    this.signalDispatch();
  }

  private waitForDispatch() {
    return this.deferredDispatch.promise;
  }

  private signalDispatch() {
    this.deferredDispatch.resolve();
    this.deferredDispatch = defer();
  }
}