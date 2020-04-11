FROM node:12-buster-slim

COPY . /warband-manager-ui

WORKDIR /warband-manager-ui

ENV REACT_APP_ENVIRONMENT PRODUCTION
ENV REACT_APP_FIREBASE_API_KEY AIzaSyBIGQQivobHe-1DP-LsEyE6jGBZq7nWc0U

RUN set -e; \
    npm ci; \
    npm run build

EXPOSE 3000

CMD node_modules/.bin/serve -s build -p 3000