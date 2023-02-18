name: jd_task

on:  
  #push: # push触发
  #  branches: [ main ]
  workflow_dispatch: # 手动触发
  schedule: # 计划任务触发
    - cron: '3 0-23/2 * * *' # cron表达式，Actions时区是UTC时间，所以要往前推8个小时(4-23)
    
jobs:
  jd_task:
    ##if: github.event.repository.owner.id == github.event.sender.id

    runs-on: ubuntu-latest    
    steps:   
    # 检出
    #- name: Checkout
    #  uses: actions/checkout@v2
      
    # 设置服务器时区为东八区 
    - name: Set time zone
      run: |
         sudo timedatectl set-timezone 'Asia/Shanghai'
         current_time=$(date +"%Y-%m-%d-%k")
         echo ${current_time}
    - name: Run jd_task
      run: |
      
         timedatectl set-timezone 'Asia/Shanghai'
        
         docker info
         docker-compose version
         git clone https://github.com/hbstarjason2021/jd-scripts-docker && cd jd-scripts-docker
         docker pull hbstarjason/jd-scripts
         
         #docker pull registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts@sha256:acf281ad4374d6cac315fa76f78c1d5bddc23980627b5c7ebf7e62745491c191
         #docker tag registry.cn-beijing.aliyuncs.com/hbstarjason/jd-scripts@sha256:acf281ad4374d6cac315fa76f78c1d5bddc23980627b5c7ebf7e62745491c191 hbstarjason/jd-scripts

         
         sed -i '2s/pt_key=/pt_key="${{secrets.KEY1}}"/' env/env1 
         #sed -i '3s/pt_pin=/pt_pin="${{secrets.PIN1}}"/' env/env1
         sed -i '3s/pt_pin=/pt_pin=jd_709c349f13b51/' env/env1
 
         sed -i '2s/pt_key=/pt_key="${{secrets.KEY4}}"/' env/env4 
         sed -i '3s/pt_pin=/pt_pin=starjason/' env/env4
         
         sed -i '2s/pt_key=/pt_key="${{secrets.KEY2}}"/' env/env2 
         sed -i '3s/pt_pin=/pt_pin=yuxiachenqi/' env/env2
         
         sed -i '2s/pt_key=/pt_key="${{secrets.KEY3}}"/' env/env3 
         sed -i '3s/pt_pin=/pt_pin=fu5520jing/' env/env3
         
         sed -i '2s/pt_key=/pt_key="${{secrets.KEY5}}"/' env/env5 
         sed -i '3s/pt_pin=/pt_pin=feng_qin07/' env/env5

         sed -i '2s/pt_key=/pt_key="${{secrets.KEY6}}"/' env/env6 
         sed -i '3s/pt_pin=/pt_pin=15046099446_p/' env/env6
         
         docker-compose up --no-build --force-recreate --detach jd1
         docker-compose up --no-build --force-recreate --detach jd4
         docker-compose up --no-build --force-recreate --detach jd2
         docker-compose up --no-build --force-recreate --detach jd3
         
         #docker-compose up --no-build --force-recreate --detach jd5
         #docker-compose up --no-build --force-recreate --detach jd6
         
         docker images 
         docker ps 
         
         ## docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; yxyPhone="${{secrets.YXYPHONE}}";  node yxyapp.js'
         
         #docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_bean_change_ccwav.js'

         #docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts;  JD_JOY_PARK_RUN_ASSETS=0.01 ; node /scripts/jd_joy_park_run.js'
         #docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts;  JD_JOY_PARK_RUN_ASSETS=0.01 ; node /scripts/jd_joy_park_run.js'
         #docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts;  JD_JOY_PARK_RUN_ASSETS=0.01 ; node /scripts/jd_joy_park_run.js'
         #docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts;  JD_JOY_PARK_RUN_ASSETS=0.01 ; node /scripts/jd_joy_park_run.js'

         # sh 01run.sh
         # sh 00run.sh
         
         ## JOY_RUN_ASSETS=0.04
         JOY_RUN_ASSETS=0.01
         docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         #docker exec jd5 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         #docker exec jd6 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; JOY_RUN_ASSETS=0.01; node jd_joy_run_6dy.js'
         
         ##
         docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_wsdlb.js'
         docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_wsdlb.js'
         docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_wsdlb.js'
         docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_wsdlb.js'
         
         ## 健康社区
         docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_health.js'
         docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_health.js'
         docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_health.js'
         docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_health.js'

         ###### 种豆得豆
         docker exec jd4 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js'
         docker exec jd2 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js'
         docker exec jd1 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js'
         docker exec jd3 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js'
         docker exec jd5 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js'
         docker exec jd6 bash -c 'set -o allexport; source /all; source /env; source /jd-scripts-docker/resolve.sh; cd /scripts; node jd_plantBean_help.js' 

         ###### 上车
         sh 00run.sh
