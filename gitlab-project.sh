#!/bin/bash

###### https://ranying666.github.io/2017/06/20/gitlab-api/
## || groupname || projectname || https_url || default_branch

function gitlabRepositry(){

	loginfo $BASH_SOURCE "开始获取仓库信息-----"

	[[ -e .gitlab_result ]] && rm -f .gitlab_result

	total_pages=`curl --head --header "PRIVATE-TOKEN:$TOKEN" "$GITSERVER?per_page=50" | grep '^X-Total-Pages' | sed 's/X-Total-Pages: //g' | sed 's/\r//g'`

	for (( p=1;p<$total_pages;p++ )) {

		curl --header "PRIVATE-TOKEN: $TOKEN" "$GITSERVER?per_page=50&page=$p" > .gitlab_projects

		cat .gitlab_projects | ./libs/JSON.sh -b | awk '$1 ~ /http_url_to_repo/ {print $2}' > .temp_http_url_to_repo

		cat .gitlab_projects | ./libs/JSON.sh -b | awk '$1 ~ /name_with_namespace/ {print $2"\t"$4}' > .temp_path_with_namespace


		cat .gitlab_projects | ./libs/JSON.sh -b | awk '$1 ~ /default_branch/ {print $2}' | awk -F "/" '{print $1"\t"$2}'> .temp_default_branch

		paste .temp_path_with_namespace .temp_http_url_to_repo .temp_default_branch >> .gitlab_result
	}

	#替换所有的引号
	replacefile .gitlab_result

	#git地址添加用户名
	addUser .gitlab_result

	#rm -f .temp_*

	loginfo $BASH_SOURCE "获取仓库信息完成"
}

function replacefile(){
	if ([ -n "$1" ] && [ -e "$1" ])
        then
		sed -i 's/\"//g' $1
 	fi
}

function addUser(){

	if ([ -n "$1" ] && [ -e "$1" ])
        then
		sed -i 's/https:\/\//https:\/\/'"$USER_NAME"'@/g' $1
 	fi
}
