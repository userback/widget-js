FROM mcr.microsoft.com/playwright:v1.29.1-focal as e2e

USER pwuser
WORKDIR /home/pwuser

COPY --chown=pwuser e2e/ /home/pwuser
RUN yarn

CMD ["yarn", "test"]
