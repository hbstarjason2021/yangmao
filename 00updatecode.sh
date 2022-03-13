#!/bin/bash

## cd -P "$( dirname "$0"  )" && pwd 

## git clone https://gitee.com/starjason/sharecode && cd sharecode
git pull -r

################################

echo "****** nnfls get code ******"
cat <<  EOF > nnfls.json
["JD1_NNFLS","JD4_NNFLS","JD2_NNFLS","JD3_NNFLS"]
EOF

jd1_nnfls=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jx_nnfls-new.js' |grep "助力码" | awk  '{print $2}')
echo ${jd1_nnfls}

jd2_nnfls=$(docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jx_nnfls-new.js' |grep "助力码" | awk  '{print $2}')
echo ${jd2_nnfls}

jd3_nnfls=$(docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jx_nnfls-new.js' |grep "助力码" | awk  '{print $2}')
echo ${jd3_nnfls}

jd4_nnfls=$(docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jx_nnfls-new.js' |grep "助力码" | awk  '{print $2}')
echo ${jd4_nnfls}

sed -i "s/JD1_NNFLS/${jd1_nnfls}/g" nnfls.json
sed -i "s/JD2_NNFLS/${jd2_nnfls}/g" nnfls.json
sed -i "s/JD3_NNFLS/${jd3_nnfls}/g" nnfls.json
sed -i "s/JD4_NNFLS/${jd4_nnfls}/g" nnfls.json

echo "****** nnfls get success ******"

###################################

echo "****** cfd get code ******"
cat << EOF > cfd.json
["JD1_CFD","JD4_CFD","JD2_CFD","JD3_CFD"]
EOF

jd1_cfd=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node gua_wealth_island_help.js' |grep "助力码:" | awk -F ":" '{print $5}')
echo ${jd1_cfd}

jd2_cfd=$(docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node gua_wealth_island_help.js' |grep "助力码:" | awk -F ":" '{print $5}')
echo ${jd2_cfd}

jd3_cfd=$(docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node gua_wealth_island_help.js' |grep "助力码:" | awk -F ":" '{print $5}')
echo ${jd3_cfd}

jd4_cfd=$(docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node gua_wealth_island_help.js' |grep "助力码:" | awk -F ":" '{print $5}')
echo ${jd4_cfd}

sed -i "s/JD1_CFD/${jd1_cfd}/g" cfd.json
sed -i "s/JD2_CFD/${jd2_cfd}/g" cfd.json
sed -i "s/JD3_CFD/${jd3_cfd}/g" cfd.json
sed -i "s/JD4_CFD/${jd4_cfd}/g" cfd.json

echo "****** cfd get success ******"

######################################

git status
