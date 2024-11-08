# Docker Compose Setup for Next.js Application

This guide covers setting up and deploying your Next.js app using Docker Compose in both development and production environments.

---

## Development Setup

Run your development environment using:
docker-compose up --build

To start the app in development mode, you can use the following command. This will use `NODE_ENV=development`, allowing hot reloading and access to local files.

```
sudo docker compose up --build

```

# Production Setup

In production, you need to explicitly set NODE_ENV=production when starting Docker Compose. This can be done in multiple ways, depending on your environment. Run Directly in Terminal

## To start the application in production mode directly in the terminal:

docker-compose -f docker-compose.prod.yml up --build

# Using a Deployment Script

For a more streamlined deployment process, create a deployment script. Here’s an example of a deploy.sh script:
#!/bin/bash

# Deploy in production mode

```
NODE_ENV=production docker compose up --build -d
```

Make sure to make the script executable:

```
chmod +x deploy.sh
```

Then run the script with:

```
./deploy.sh
```

# 3. Using a CI/CD Pipeline (Example with GitHub Actions)

name: Deploy

on:
push:
branches: - main

jobs:
deploy:
runs-on: ubuntu-latest
steps: - name: Checkout code
uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Deploy with Docker Compose
        env:
          NODE_ENV: production
        run: docker compose up --build -d

# 4. Using a .env.production File

If you prefer not to set NODE_ENV every time, create a .env.production file with the following content:
NODE_ENV=production

When you’re ready to deploy, Docker Compose will pick up this environment automatically.
Run the following command to deploy with the .env.production file:

```
docker compose --env-file .env.production up --build -d
```

# Health Check

To ensure your application is running correctly, you can configure a health check in your docker-compose.yml file. Example:
healthcheck:
test: ["CMD", "curl", "-f", "http://localhost:3000"]
interval: 30s
timeout: 10s
retries: 5
This health check will periodically verify that the server is responsive on port 3000.
