#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

###### wget https://gitee.com/starjason/yangmao/raw/main/01update_jxmc.sh  && bash 01update_jxmc.sh

## cd -P "$( dirname "$0"  )" && pwd 

git clone https://gitee.com/starjason/sharecode && cd sharecode
##git pull -r

################################

echo "****** jxmc get code ******"
cat <<  EOF > jxmc.json
{"code":200,"data":["JD1_JXMC","JD4_JXMC","JD2_JXMC","JD3_JXMC"]}
EOF

cat <<  EOF > jxmc2.json
["JD1_JXMC","JD4_JXMC","JD2_JXMC","JD3_JXMC"]
EOF

cat <<  EOF > jxmc
["JD1_JXMC","JD4_JXMC","JD2_JXMC","JD3_JXMC"]
EOF

jd3_jxmc=$(docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_jxmc-new.js' |grep "jxmc_share_code" | awk -F ":" '{print $2}')
echo ${jd3_jxmc}

jd4_jxmc=$(docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_jxmc-new.js' |grep "jxmc_share_code" | awk -F ":" '{print $2}')
echo ${jd4_jxmc}

jd1_jxmc=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_jxmc-new.js' |grep "jxmc_share_code" | awk -F ":" '{print $2}')
echo ${jd1_jxmc}

jd2_jxmc=$(docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_jxmc-new.js' |grep "jxmc_share_code" | awk -F ":" '{print $2}')
echo ${jd2_jxmc}

sed -i "s/JD3_JXMC/${jd3_jxmc}/g" jxmc.json
sed -i "s/JD4_JXMC/${jd4_jxmc}/g" jxmc.json
sed -i "s/JD1_JXMC/${jd1_jxmc}/g" jxmc.json
sed -i "s/JD2_JXMC/${jd2_jxmc}/g" jxmc.json

sed -i "s/JD3_JXMC/${jd3_jxmc}/g" jxmc2.json
sed -i "s/JD4_JXMC/${jd4_jxmc}/g" jxmc2.json
sed -i "s/JD1_JXMC/${jd1_jxmc}/g" jxmc2.json
sed -i "s/JD2_JXMC/${jd2_jxmc}/g" jxmc2.json

sed -i "s/JD3_JXMC/${jd3_jxmc}/g" jxmc
sed -i "s/JD4_JXMC/${jd4_jxmc}/g" jxmc
sed -i "s/JD1_JXMC/${jd1_jxmc}/g" jxmc
sed -i "s/JD2_JXMC/${jd2_jxmc}/g" jxmc

echo "****** jxmc get success ******"

git status


<< CONTENT

	if [ ! -d $dir_file/git_clone/curtinlv_script ];then
		echo ""
		git clone https://github.com/curtinlv/JD-Script.git $dir_file/git_clone/curtinlv_script
		curtinlv_script_setup
	else
		cd $dir_file/git_clone/curtinlv_script
		git fetch --all
		git reset --hard origin/main
		curtinlv_script_setup
	fi

CONTENT
