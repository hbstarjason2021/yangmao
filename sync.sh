

cd /scripts || exit 1
npm install || npm install --registry=https://registry.npm.taobao.org || exit 1


##########################################
crontab -r

crontab /crontab.list || {
  cp /crontab.list.old /crontab.list
  crontab /crontab.list
}
crontab -l
