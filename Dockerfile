# Build stage
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

# Nginx 
FROM nginx:mainline

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY config/nginx.conf /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage
COPY --from=build /app/build/ .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]