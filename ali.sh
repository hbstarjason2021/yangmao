#!/bin/bash

set -eux

### wget -qO- https://gitee.com/starjason/yangmao/raw/main/ali.sh | bash
### wget -qO- https://raw.githubusercontent.com/hbstarjason2021/yangmao/main/ali.sh | bash

function install_git () {
  if [[ $(command -v yum >/dev/null; echo $?) -eq 0 ]];
  then
    sudo yum install git -y
  elif [[ $(command -v apt-get >/dev/null; echo $?) -eq 0 ]];
  then
    sudo apt-get install git -y
}

## apt -y install git
## curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker

#function install_docker () {
#  set +e
#  if [[ $(command -v docker >/dev/null; echo $?) -eq 0 ]];
#  then
#    curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker
#  else
#    docker info
#  set -e
#}

docker_install() {
    echo "检查Docker......"
    if [ -x "$(command -v docker)" ]; then
       echo "检查到Docker已安装!"
    else
       if [ -r /etc/os-release ]; then
            lsb_dist="$(. /etc/os-release && echo "$ID")"
        fi
        if [ $lsb_dist == "openwrt" ]; then
            echo "openwrt 环境请自行安装docker"
            #exit 1
        else
            echo "安装docker环境..."
            curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
            echo "安装docker环境...安装完成!"
            systemctl enable docker
            systemctl start docker
        fi
    fi
}


install_git

docker_install

sudo curl -L "http://rancher-mirror.cnrancher.com/docker-compose/v1.27.4/docker-compose-$(uname -s)-$(uname -m)"  \
   -o /usr/local/bin/docker-compose  && \
   sudo chmod +x /usr/local/bin/docker-compose &&  docker-compose version && \
    git clone https://gitee.com/starjason/jd-scripts-docker/ && \
   cd jd-scripts-docker && ls -l  && \
 docker pull registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts && \
 docker tag registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts  hbstarjason/jd-scripts
 
docker images
 
 
