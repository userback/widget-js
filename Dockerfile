FROM mcr.microsoft.com/playwright:v1.50.0-noble as e2e

# Upgrade Yarn to 3.2.2
RUN corepack enable && corepack prepare yarn@3.2.2 --activate

USER pwuser
WORKDIR /home/pwuser

COPY --chown=pwuser e2e/ /home/pwuser
RUN yarn install

CMD ["yarn", "test"]
