FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY ./package.json /usr/src/app

RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

EXPOSE 2020
CMD npm run start