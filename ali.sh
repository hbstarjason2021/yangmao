#!/bin/bash

set -eux

### wget -qO- https://gitee.com/starjason/yangmao/raw/main/ali.sh | bash
### wget -qO- https://gitee.com/starjason/yangmao/raw/main/ali.sh --no-check-certificate | bash
### wget -qO- https://raw.githubusercontent.com/hbstarjason2021/yangmao/main/ali.sh | bash

function install_git () {
  if [[ $(command -v yum >/dev/null; echo $?) -eq 0 ]]; then
    sudo yum install git -y
  else
    if [[ $(command -v apt-get >/dev/null; echo $?) -eq 0 ]]; then
       sudo apt-get install git -y
    fi
  fi  
}

## lsb_release -i --short

## apt -y install git
## yum -y install git
## curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl restart docker

## curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh --mirror Aliyun && systemctl enable docker && systemctl start docker

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
            #curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
            apt install docker.io -y
            echo "安装docker环境...安装完成!"
            systemctl enable docker
            systemctl start docker
        fi
    fi
}

install_git

docker_install

# curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo curl -L "http://rancher-mirror.cnrancher.com/docker-compose/v1.27.4/docker-compose-$(uname -s)-$(uname -m)"  \
   -o /usr/local/bin/docker-compose  && \
   sudo chmod +x /usr/local/bin/docker-compose &&  docker-compose version && \
    git clone https://gitee.com/starjason/jd-scripts-docker/ && \
   cd jd-scripts-docker && ls -l  && \
 docker pull registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts && \
 docker tag registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts  hbstarjason/jd-scripts
 
docker images

## docker rmi hbstarjason/jd-scripts && docker rmi registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts
 
