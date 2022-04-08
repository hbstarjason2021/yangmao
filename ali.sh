#!/bin/bash

set -eux

### wget -qO- https://gitee.com/starjason/yangmao/raw/main/ali.sh | bash

function install_git () {
  set +e
  if [[ $(command -v yum >/dev/null; echo $?) -eq 0 ]];
  then
    sudo yum install git -y
  elif [[ $(command -v apt-get >/dev/null; echo $?) -eq 0 ]];
  then
    sudo apt-get install git -y
  set -e
}

## apt -y install git
## curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker

function install_docker () {
  set +e
  if [[ $(command -v docker >/dev/null; echo $?) -eq 0 ]];
  then
    curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker
  else
    docker info
  set -e
}

install_git
install_docker

sudo curl -L "http://rancher-mirror.cnrancher.com/docker-compose/v1.27.4/docker-compose-$(uname -s)-$(uname -m)"  \
   -o /usr/local/bin/docker-compose  && \
   sudo chmod +x /usr/local/bin/docker-compose &&  docker-compose version && \
    git clone https://gitee.com/starjason/jd-scripts-docker/ && \
   cd jd-scripts-docker && ls -l  && \
 docker pull registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts && \
 docker tag registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts  hbstarjason/jd-scripts
 
docker images
 
 
