---
'example-backend': patch
'@backstage/catalog-model': patch
'@backstage/create-app': patch
---

Replace `yup` with `ajv`, for validation of catalog entities.

For proper resolution of `ajv` utility functions, a direct dependency on `ajv` is added to the backend. This also affects the create-app template.

To reflect the same in your own backend, add the following dependency to `packages/backend/package.json`:

```
    "ajv": "^7.0.3",
```
