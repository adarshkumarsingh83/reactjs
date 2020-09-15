# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]  