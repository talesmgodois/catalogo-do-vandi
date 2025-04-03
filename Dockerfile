# Stage 1: Build the React application
FROM node:alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built files using BusyBox httpd
FROM busybox:latest

# Copy built assets from builder
WORKDIR /www
COPY --from=builder /app/build .

# Serve files using BusyBox httpd
EXPOSE 80
CMD ["httpd", "-f", "-v", "-h", "/www"]