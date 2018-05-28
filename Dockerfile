FROM nginx:1.12-alpine

WORKDIR /usr/share/nginx/html

COPY ./build /usr/share/nginx/html

RUN sed -i '10ctry_files $uri /index.html;' /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]