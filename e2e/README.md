# End 2 End Testing

Using the following commands from the root of the project, you can use docker compose to test the stack using Playwright.
``` sh
docker compose up -d
docker compose build playwright
docker compose run playwright
```

## How it works

The e2e tests first use docker compose to setup all of the example repos within their own node containers. Using `docker compose logs` you can inspect the ip addresses each container is hosted on and visit them from the local machine.

Once running, we use playwright to run the test suite using chrome/firefox/webkit which visits each of the examples (using docker service name dns resolution) and tests to see if the userback widget is available and usable.

Each example repo expects at least a `VITE_UB_TOKEN` to be defined in a `.env` file in the root of the repo.
