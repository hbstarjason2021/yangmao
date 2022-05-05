#!/bin/bash

###### wget https://gitee.com/starjason/yangmao/raw/main/00update_cfd.sh  && bash 00update_cfd.sh

## cd -P "$( dirname "$0"  )" && pwd 

git clone https://gitee.com/starjason/sharecode && cd sharecode
##git pull -r

###################################

echo "****** cfd get code ******"
cat << EOF > cfd.json
["JD1_CFD","JD4_CFD","JD2_CFD","JD3_CFD"]
EOF

cat << EOF > cfd_new3.json
{"shareId":["JD1_CFD","JD4_CFD","JD2_CFD","JD3_CFD"]}
EOF

cat << EOF > cfd_new3_2.json
{"data":["JD1_CFD","JD4_CFD","JD2_CFD","JD3_CFD"],"code":200}
EOF

### docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_cfd_new.js' |grep "cfd_share_code" | awk -F ":" '{print $2}'

#jd1_cfd=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node gua_wealth_island_help.js' |grep "助力码:" | awk -F ":" '{print $5}')
jd1_cfd=$(docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_cfd_new.js' |grep "cfd_share_code" | awk -F ":" '{print $2}')
echo ${jd1_cfd}

jd2_cfd=$(docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_cfd_new.js' |grep "cfd_share_code" | awk -F ":" '{print $2}')
echo ${jd2_cfd}

jd3_cfd=$(docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_cfd_new.js' |grep "cfd_share_code" | awk -F ":" '{print $2}')
echo ${jd3_cfd}

jd4_cfd=$(docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_cfd_new.js' |grep "cfd_share_code" | awk -F ":" '{print $2}')
echo ${jd4_cfd}

sed -i "s/JD1_CFD/${jd1_cfd}/g" cfd.json
sed -i "s/JD2_CFD/${jd2_cfd}/g" cfd.json
sed -i "s/JD3_CFD/${jd3_cfd}/g" cfd.json
sed -i "s/JD4_CFD/${jd4_cfd}/g" cfd.json

sed -i "s/JD1_CFD/${jd1_cfd}/g" cfd_new3.json
sed -i "s/JD2_CFD/${jd2_cfd}/g" cfd_new3.json
sed -i "s/JD3_CFD/${jd3_cfd}/g" cfd_new3.json
sed -i "s/JD4_CFD/${jd4_cfd}/g" cfd_new3.json

sed -i "s/JD1_CFD/${jd1_cfd}/g" cfd_new3_2.json
sed -i "s/JD2_CFD/${jd2_cfd}/g" cfd_new3_2.json
sed -i "s/JD3_CFD/${jd3_cfd}/g" cfd_new3_2.json
sed -i "s/JD4_CFD/${jd4_cfd}/g" cfd_new3_2.json

echo "****** cfd get success ******"

######################################

git status
