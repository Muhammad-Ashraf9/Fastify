FROM node:20 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev




FROM base as production

ENV NODE_ENV=production

RUN npm run build

CMD ["node", "dist/app.js"]



