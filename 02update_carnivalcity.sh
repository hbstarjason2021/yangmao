#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

## https://gitee.com/starjason/yangmao/raw/main/02update_carnivalcity.sh && bash 02update_carnivalcity.sh

## cd -P "$( dirname "$0"  )" && pwd 

git clone https://gitee.com/starjason/sharecode && cd sharecode
##git pull -r

################################

echo "****** carnivalcity get code ******"
cat <<  EOF > carnivalcity
{"code": 200, "message": "", "data": ["JD1_CITY","JD4_CITY","JD2_CITY","JD3_CITY"], "powered by": "Task"}
EOF

cat <<  EOF > carnivalcity2
{"data":["JD1_CITY","JD4_CITY","JD2_CITY","JD3_CITY"],"code":200}
EOF


jd3_city=$(docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node getCarnivalcityCode.js' |grep gua-submit_codes |awk '{print $3}')
echo ${jd3_city}

jd4_city=$(docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node getCarnivalcityCode.js' |grep gua-submit_codes |awk '{print $3}')
echo ${jd4_city}

jd1_city=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node getCarnivalcityCode.js' |grep gua-submit_codes |awk '{print $3}')
echo ${jd1_city}

jd2_city=$(docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node getCarnivalcityCode.js' |grep gua-submit_codes |awk '{print $3}')
echo ${jd2_city}

sed -i "s/JD3_CITY/${jd3_city}/g" carnivalcity
sed -i "s/JD4_CITY/${jd4_city}/g" carnivalcity
sed -i "s/JD1_CITY/${jd1_city}/g" carnivalcity
sed -i "s/JD2_CITY/${jd2_city}/g" carnivalcity

sed -i "s/JD3_CITY/${jd3_city}/g" carnivalcity2
sed -i "s/JD4_CITY/${jd4_city}/g" carnivalcity2
sed -i "s/JD1_CITY/${jd1_city}/g" carnivalcity2
sed -i "s/JD2_CITY/${jd2_city}/g" carnivalcity2

echo "****** carnivalcity get success ******"

/carnivalcity ${jd1_city}
/carnivalcity ${jd2_city}
/carnivalcity ${jd3_city}
/carnivalcity ${jd4_city}

git status
