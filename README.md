## CSP issue

Currently, playwright completely ignores CSP tag in all major browsers

## Steps to reproduce

1. clone repository
2. run `npm install`
3. run `npm run serve` and wait till it starts
4. run `playwright test`

## Observations

Test is going to fail. If run via `playwright test --debug` you can notice that image is visible. But the same page in
regular Chrome or Safari is going to show that image is blocked

Passing `bypassCSP: false` to configuration or custom context does not solve the issue.