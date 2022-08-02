# End 2 End Testing

Using the following commands from the root of the project, you can use docker compose to test the stack using Playwright.
``` sh
docker compose up -d
docker compose build playwright
docker compose -c docker-compose.yml run playwright
```

