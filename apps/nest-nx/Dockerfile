ARG api_app_name=nest-nx

FROM my-base-image:nx-base AS builder

ARG NODE_ENV
WORKDIR /app
RUN npx nx build nest-nx --with-deps

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/dist /dist
ENV NODE_ENV=$NODE_ENV

RUN ls -a
