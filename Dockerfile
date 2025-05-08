FROM mcr.microsoft.com/playwright:v1.52.0-jammy as e2e

# Upgrade Yarn to 3.2.2
RUN corepack enable && corepack prepare yarn@3.2.2 --activate

USER pwuser
WORKDIR /home/pwuser
# Copy root-level package files
COPY --chown=pwuser package.json yarn.lock .yarnrc.yml .yarn/ /home/pwuser/

# Copy the whole workspace (including e2e project and others)
COPY --chown=pwuser . /home/pwuser

# Install dependencies from workspace root
RUN yarn install --immutable

# Set working directory to e2e package if needed
WORKDIR /home/pwuser/e2e

CMD ["yarn", "test"]
