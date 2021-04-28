FROM alpine:3.12
#RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache tzdata moreutils git nodejs-current npm curl bash python3 python3-dev python3-pip \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

RUN date

WORKDIR /
COPY sync.sh /sync.sh
RUN bash /sync.sh
CMD crontab -l && crond -f
