#!/bin/sh

#set -x
#set -u

Source="$0"
while [ -h "$Source"  ]; do
    dir_file="$( cd -P "$( dirname "$Source"  )" && pwd  )"
    Source="$(readlink "$Source")"
    [[ $Source != /*  ]] && Source="$dir_file/$Source"
done
dir_file="$( cd -P "$( dirname "$Source"  )" && pwd  )"

ListJs_add="ListJs_add.txt"
ListJs_drop="ListJs_drop.txt"

red="\033[31m"
green="\033[32m"
yellow="\033[33m"
white="\033[0m"


yyds_Script() {
	cd $dir_file
	Script_name="yyds_Script"
	File_path="$dir_file/$Script_name"
	Newfile="new_${Script_name}.txt"
	Oldfile="old_${Script_name}.txt"
	branch="master"
	for_diff="0"
	url_test="https://raw.githubusercontent.com/okyyds/yyds/master/jdCookie.js"
	if [ -d "$Script_name" ]; then
		tongyong_config
	else
		git clone -b $branch https://github.com/okyyds/yyds.git yyds_Script
		tongyong_config
	fi
}

tongyong_config() {
	echo ""
	wget --spider -nv  $url_test -o /tmp/wget_test.log
	wget_test=$( cat /tmp/wget_test.log | grep -o "200 OK")
	if [ "$wget_test" == "200 OK" ];then
		cd $File_path
		git_pull
		init_data
		if [ $for_diff == "1" ];then
			for_diff_cron
		else
			diff_cron
		fi
		sendMessage
		That_day
	else
		echo "#### 《$Script_name+$current_time》" >>$dir_file/git_log/${current_time}.log
		wget_error="$green[$Script_name]$red无法下载仓库文件，暂时不更新,可能是网络问题或者上游仓库被封，建议查看上游仓库是否正常，测试仓库是否正常：$url_test$white"
		echo -e "$wget_error"
		echo "$wget_error" | sed -e "s/\\\//g" -e "s/\[//g" -e "s/033//g" -e "s/0m//g" -e "s/31m//g" -e "s/32m//g" -e "s/可能/$wrap$wrap_tab可能/g" -e "s/建议/$wrap$wrap_tab建议/g"  >>$dir_file/git_log/${current_time}.log
		echo "**********************************************"
	fi
}


git_pull() {
	git fetch --all
	git reset --hard origin/$branch
}

init_data() {
	echo > $ListJs_add
	echo > $ListJs_drop
}

diff_cron() {
	#首次运行需要创建oldfile
	if [ -f "$File_path/$Oldfile" ]; then
		echo ""
	else 
		ls ./ | grep -E 'js$|py$' | sort > $Oldfile
	fi
	#.*表示多个任意字符
	#新文件与旧文件对比
	ls ./ | grep -E 'js$|py$' | sort > $Newfile
	grep -vwf $Oldfile $Newfile > $ListJs_add
	
	if [ $(cat $ListJs_add | wc -l) = "0" ]; then
		Add_if="0"
	else
		Add=$(sed "s/$/$wrap$wrap_tab/" $ListJs_add | sed ':t;N;s/\n//;b t' )
		Add_if="1"
	fi 
	

	#用旧文件与新文件对比
	grep -vwf $Newfile $Oldfile > $ListJs_drop
	ls ./ | grep -E 'js$|py$' | sort > $Oldfile
	if [ $(cat $ListJs_drop | wc -l) = "0" ]; then
		Delete_if="0"
	else
		Delete=$(sed "s/$/$wrap$wrap_tab/" $ListJs_drop | sed ':t;N;s/\n//;b t' )
		Delete_if="1"
	fi 
}

for_diff_cron() {
	#首次运行需要创建oldfile
	if [ -f "$File_path/$Oldfile" ]; then
		echo ""
	else
		ls ./ | grep -E 'js$|py$' | sort > $File_path/$Oldfile
		for i in `ls | grep -v "backup"`
		do
			if [ -d $i ];then
				ls $i | grep -E 'js$|py$' | sort >> $File_path/$Oldfile
			else
				echo "" >/dev/null 2>&1
			fi
		done
	fi

	#.*表示多个任意字符
	#新文件与旧文件对比
	ls ./ | grep -E 'js$|py$' | sort > $File_path/$Newfile
	for i in `ls | grep -v "backup"`
	do
		if [ -d $i ];then
			ls $i | grep -E 'js$|py$' | sort >> $File_path/$Newfile
		else
			echo "" >/dev/null 2>&1
		fi
	done

	grep -vwf $Oldfile $Newfile > $ListJs_add

	if [ $(cat $ListJs_add | wc -l) = "0" ]; then
		Add_if="0"
	else
		Add=$(sed "s/$/$wrap$wrap_tab/" $ListJs_add | sed ':t;N;s/\n//;b t' )
		Add_if="1"
	fi

	#用旧文件与新文件对比
	grep -vwf $Newfile $Oldfile > $ListJs_drop
	ls ./ | grep -E 'js$|py$' | sort > $File_path/$Oldfile
	for i in `ls | grep -v "backup"`
	do
		if [ -d $i ];then
			ls $i | grep -E 'js$|py$' | sort >> $File_path/$Oldfile
		else
			echo "" >/dev/null 2>&1
		fi
	done

	if [ $(cat $ListJs_drop | wc -l) = "0" ]; then
		Delete_if="0"
	else
		Delete=$(sed "s/$/$wrap$wrap_tab/" $ListJs_drop | sed ':t;N;s/\n//;b t' )
		Delete_if="1"
	fi
}

main(){
yyds_Script
}

