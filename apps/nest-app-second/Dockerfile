ARG api_app_name=nest-app-second

FROM my-base-image:nx-base AS builder

ARG NODE_ENV
WORKDIR /app
RUN npx nx build nest-app-second --with-deps

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/dist /dist
ENV NODE_ENV=$NODE_ENV

RUN ls -a
