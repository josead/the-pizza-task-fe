FROM node:12 as web-build

#Setting the working directory as /app
WORKDIR /app

#Copying All files to Docker Image
COPY ./ .

#Installing all dependencies.
RUN npm install --only=prod

# RUN npm build
RUN npm run build
