FROM mcr.microsoft.com/playwright:v1.40.0-jammy as e2e

USER pwuser
WORKDIR /home/pwuser

# Upgrade to Yarn 3.2.2
RUN corepack enable && corepack prepare yarn@3.2.2 --activate

COPY --chown=pwuser e2e/ /home/pwuser
RUN yarn --frozen-lockfile

CMD ["yarn", "test"]
