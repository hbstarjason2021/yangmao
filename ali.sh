#!/bin/bash

set -euxv

### wget -qO- https://gitee.com/starjason/yangmao/raw/main/ali.sh | bash

###### https://developer.aliyun.com/adc/scenario/383702ab66f04463965dc9813177ab40?spm=a2c6h.13858375.0.0.7c3a79a9kgfMHg

apt -y install git  && curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker

docker info 

sudo curl -L "http://rancher-mirror.cnrancher.com/docker-compose/v1.27.4/docker-compose-$(uname -s)-$(uname -m)"  \
   -o /usr/local/bin/docker-compose  && \
   sudo chmod +x /usr/local/bin/docker-compose &&  docker-compose version && \
    git clone https://gitee.com/starjason/jd-scripts-docker/ && \
   cd jd-scripts-docker && ls -l  && \
 docker pull registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts && \
 docker tag registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts  hbstarjason/jd-scripts
 
docker images
 
 
