FROM node:21.5 AS base

WORKDIR /var/project

RUN echo 'base'

############################################################################################

FROM base AS local

EXPOSE 8090

RUN echo 'local'

############################################################################################

FROM base AS build-stage

COPY ./ /var/project

RUN apt-get update \
    && npm install --no-progress -g npm@10.2 \
    && npm install --no-progress

RUN echo 'build-stage'

############################################################################################

FROM build-stage AS develop

EXPOSE 8090

RUN echo 'develop'

CMD ["npm", "run", "dev"]

############################################################################################

FROM build-stage AS build

RUN echo 'build'

RUN npm run build

##############################################

FROM nginx:1.25.1-alpine as production

ADD ./docker/node/project-nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /var/project/dist /usr/share/nginx/html

EXPOSE 80

RUN echo 'production'

CMD ["nginx", "-g", "daemon off;"]
