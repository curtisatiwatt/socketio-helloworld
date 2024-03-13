# Docker GitHub Build Guide

This guide provides step-by-step instructions on how to publish your own Docker image to GitHub Container Registry (GHCR).

## Prerequisites

- Docker installed on your local machine.
- A GitHub account.
- A GitHub repository for your project.

## Step 1: Create a Personal Access Token (PAT)

1. Go to your GitHub account settings.
2. Navigate to **Developer settings** > **Personal access tokens**.
3. Click on **Generate new token**.
4. Give your token a descriptive name, such as "Docker GitHub Actions".
5. Select the following scopes for your token:
   - `write:packages` - To publish and delete packages.
   - `read:packages` - To download and use packages.
   - `delete:packages` - To delete old versions of packages.
6. Click **Generate token**.
7. Copy the generated token and store it securely. You won't be able to see it again!

## Step 2: Login to GitHub Container Registry

1. Open a command prompt or terminal.
2. Set an environment variable for your PAT:

   ```bash
   set GH_TOKEN=your_personal_access_token
   ```

   Replace `your_personal_access_token` with the token you generated in Step 1.

3. Log in to GHCR using the following command:

   ```bash
   echo %GH_TOKEN% | docker login ghcr.io -u your_github_username --password-stdin
   ```

   Replace `your_github_username` with your GitHub username.

## Step 3: Clone Your Repository and Build the Docker Image

1. Clone your GitHub repository:

   ```bash
   git clone https://github.com/your_github_username/your_repository.git
   ```

   Replace `your_github_username` and `your_repository` with your GitHub username and repository name, respectively.

2. Change to the repository directory:

   ```bash
   cd your_repository
   ```

3. Build your Docker image:

   ```bash
   docker build -t ghcr.io/your_github_username/your_repository:latest .
   ```

## Step 4: Publish the Image for Multiple Platforms

1. Create and use a new Buildx instance:

   ```bash
   docker buildx create --name multiarch-builder --use
   ```

2. Build and push the image for multiple platforms:

   ```bash
   docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/your_github_username/your_repository:latest --push .
   ```

   This command will build the image for the specified platforms and push it to GHCR.

## Conclusion

You have now successfully published a multi-platform Docker image to GitHub Container Registry. This image can be pulled and used on various architectures.

---

Please replace `your_personal_access_token`, `your_github_username`, and `your_repository` with your actual GitHub personal access token, username, and repository name where applicable. Make sure to follow the instructions carefully and ensure that your Dockerfile is configured correctly for multi-platform builds.