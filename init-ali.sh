#!/bin/bash

set -eu

red="\033[31m"
green="\033[32m"
yellow="\033[33m"
white="\033[0m"

if [[ "$(whoami)" != "root" ]]; then
	echo "please run this script as root ." >&2
	exit 1
fi

set _platform=""
if [ "$(uname)" == "Darwin" ]; then
    # Do something under Mac OS X platform        
    _platform="darwin"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    # Do something under GNU/Linux platform
    _platform="linux"
fi

install_git () {
  set +e
  if [[ $(command -v snap >/dev/null; echo $?) -eq 0 ]];
  then
    sudo snap install git-ubuntu --classic
  elif [[ $(command -v apt-get >/dev/null; echo $?) -eq 0 ]];
  then
    sudo apt-get install git -y
  else
    sudo yum install git -y
  fi
  set -e
}

install_kubectl() {
    ## curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/$_platform/amd64/kubectl
    chmod +x ./kubectl
    mv ./kubectl /usr/local/bin/kubectl
    /usr/local/bin/kubectl version --client
    ## kubectl completion bash | sudo tee /etc/bash_completion.d/kubectl > /dev/null
    echo -e "${green}kubectl is already installed${white}"
}

install_kubecolor() {
    KUBECOLOR_VERSION=0.0.20
    curl -sSL https://github.com/hidetatz/kubecolor/releases/download/v${KUBECOLOR_VERSION}/kubecolor_${KUBECOLOR_VERSION}_Linux_x86_64.tar.gz | sudo tar xz -C /usr/local/bin kubecolor
    kubecolor version --client
    echo -e "${green}kubecolor is already installed${white}"
}

install_helm() {
    echo "Installing Helm"
    #curl -s https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
    HELMVERSION=helm-v3.8.1
    curl -sSL https://get.helm.sh/${HELMVERSION}-linux-amd64.tar.gz | sudo tar xz -C /usr/local/bin --strip-components=1 linux-amd64/helm
    helm version --client
    echo -e "${green}Helm is already installed${white}"
}

install_git
install_kubectl
install_kubecolor
install_helm


