# ============================================
# Stage 1: Build Astro application
# ============================================

ARG NODE_VERSION=26.9.0-slim
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

RUN npm install -g corepack

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# ============================================
# Stage 2: Serve application menggunakan Nginx
# ============================================

FROM nginx:alpine AS runner

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]