FROM my-base-image:nx-base AS builder

ARG NODE_ENV
WORKDIR /app/builder
COPY . .
RUN npx nx build nest-app-second

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV

CMD ["node", "./dist/apps/nest-app-second/main.js"]
