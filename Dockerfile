FROM node:16.16.0-alpine as builder

WORKDIR /app

COPY . .

RUN npm set-script preinstall ""
RUN npm set-script prepare ""
RUN npm ci

RUN npm run build

RUN npm ci --omit=dev

FROM node:16.16.0-alpine as runner

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/dist /app/dist

CMD ["npm", "start"]
