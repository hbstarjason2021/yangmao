#!/bin/sh

#set -x
#set -u

#git clone https://github.com/ITdesk01/Checkjs.git /usr/share/Checkjs
#cd /usr/share/Checkjs && chmod 755 checkjs.sh
#bash checkjs.sh

rm -f  checkjs-mod.sh
wget https://raw.githubusercontent.com/hbstarjason2021/yangmao/main/checkjs-mod.sh
chmod +x checkjs-mod.sh
bash checkjs-mod.sh
