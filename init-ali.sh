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


install_kubectl() {
    ## curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/$_platform/amd64/kubectl
    chmod +x ./kubectl
    mv ./kubectl /usr/local/bin/kubectl
    /usr/local/bin/kubectl version --client
    ## kubectl completion bash | sudo tee /etc/bash_completion.d/kubectl > /dev/null
}

install_helm() {
    if [ $? -ne 0 ]
    then
        echo "Installing Helm"
 	curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
        helm version --client
    else
        echo "Helm is already installed"
    fi	
}

install_kubectl
install_helm


