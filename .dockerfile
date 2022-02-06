FROM node:lts-buster as builder-base
RUN npm install -g bower grunt-cli
RUN apt install -y git

# pull official base image
FROM builder-base as builder

# set working directory
WORKDIR /app

# copy everything over to Docker environment
COPY ./src ./

# Installs all node packages
RUN npm install
RUN bower install --allow-root
RUN grunt build

# production
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
