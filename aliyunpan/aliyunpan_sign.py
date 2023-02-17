#!/usr/bin/python
# coding=utf-8
 
__author__ = 'testerzhang'
 
import os
import traceback
 
import requests
from loguru import logger
 
import config
logger.add(config.SIGN_LOG)
 
ACCESS_TOKEN_FILE = config.ACCESS_TOKEN_FILE
 
 
def read_file(file_name):
    with open(file_name) as f:
        content = f.read()
 
    content = content.strip()
    # logger.debug(f"content={content!r}")
 
    return content
 
 
class ALiYunPan(object):
    def __init__(self):
        # 获取JSON.parse(localStorage.getItem("token")).access_token
        # 请自行更新填写access_token
 
        self.access_token = read_file(ACCESS_TOKEN_FILE)
 
    def sign_in(self):
        sign_in_days_lists = []
        not_sign_in_days_lists = []
 
        try:
            token = self.access_token
            url = 'https://member.aliyundrive.com/v1/activity/sign_in_list'
            headers = {
                "Content-Type": "application/json",
                "Authorization": token,
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 D/C501C6D2-FAF6-4DA8-B65B-7B8B392901EB"
            }
            body = {}
 
            resp = requests.post(url, json=body, headers=headers)
            resp_text = resp.text
            resp_json = resp.json()
 
            # 未登录
            # {"code":"AccessTokenInvalid","message":"not login","requestId":"0a0080e216757311048316214ed958"}
            code = resp_json.get('code', '')
            if code == "AccessTokenInvalid":
                logger.warning(f"请检查token是否正确")
            elif code is None:
                # success = resp_json.get('success', '')
                # logger.debug(f"success={success}")
 
                result = resp_json.get('result', {})
                sign_in_logs_list = result.get("signInLogs", [])
 
                if len(sign_in_logs_list) > 0:
                    for i, sign_in_logs_dict in enumerate(sign_in_logs_list, 1):
 
                        status = sign_in_logs_dict.get('status', '')
                        day = sign_in_logs_dict.get('day', '')
                        notice = sign_in_logs_dict.get('notice', '')
                        if status == "":
                            logger.debug(f"sign_in_logs_dict={sign_in_logs_dict}")
                            logger.error(f"签到信息获取异常:{resp_text}")
                        elif status == "miss":
                            # logger.warning(f"第{day}天未打卡")
                            not_sign_in_days_lists.append(day)
                        else:
                            logger.debug(f"打卡第{day}天,获得奖励:[{notice}]")
                            sign_in_days_lists.append(day)
 
                else:
                    logger.warning(f"resp_json={resp_json}")
            else:
                logger.warning(f"resp_json={resp_json}")
                # logger.debug(f"code={code}")
 
        except:
            logger.error(f"签到异常={traceback.format_exc()}")
 
        logger.debug(f"阿里云盘打卡天数:{sign_in_days_lists},未打开天数:{not_sign_in_days_lists}")
 
 
def main():
    a_li_yun_pan = ALiYunPan()
    a_li_yun_pan.sign_in()
 
 
if __name__ == '__main__':
    main()
