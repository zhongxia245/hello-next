FROM docker.lcgc.work/node-cnpm:10.15.0

ENV APP_PATH /app

WORKDIR ${APP_PATH}

COPY . ${APP_PATH}
RUN cnpm install --production

ENTRYPOINT next start -p ${APP_PORT}
