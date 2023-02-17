#!/usr/bin/python
# coding=utf-8
 
__author__ = 'testerzhang'
 
import os
import traceback
from http.client import HTTPConnection
 
import arrow
import requests
from loguru import logger
 
import config
 
HTTPConnection.debuglevel = 0
 
logger.add(config.REFRESH_LOG)
 
ACCESS_TOKEN_FILE = config.ACCESS_TOKEN_FILE
REFRESH_TOKEN_FILE = config.REFRESH_TOKEN_FILE
EXPIRE_TIME_FILE = config.EXPIRE_TIME_FILE
 
 
def read_file(file_name):
    with open(file_name) as f:
        content = f.read()
 
    content = content.strip()
    # logger.debug(f"content={content!r}")
 
    return content
 
 
def write_file(file_name, content):
    with open(file_name, 'w') as f:
        f.write(content)
 
 
def change_to_unix(ys_str):
    try:
        arrow_obj = arrow.get(ys_str)
        # if interval != -1:
        #     arrow_obj = arrow.get(ys_str).shift(hours=-interval)
    except:
        raise Exception("转换时间异常")
 
    # logger.debug(f"arrow_obj={arrow_obj}")
    try:
        result = int(arrow_obj.timestamp())
    except:
        result = int(arrow_obj.timestamp)
    return result
 
 
def get_unix_time():
    t = arrow.now()
    try:
        result = int(t.timestamp())
    except:
        result = int(t.timestamp)
 
    return result
 
 
class ALiYunPanRefresh(object):
    def __init__(self):
        refresh_token_file = REFRESH_TOKEN_FILE
        expire_time_file = EXPIRE_TIME_FILE
        expire_time = read_file(expire_time_file)
        logger.debug(f"获取到的expire_time={expire_time!r}")
        self.expire_time_unix = change_to_unix(expire_time)
        # logger.debug(f"获取到的expire_time_unix={self.expire_time_unix!r}")
 
        refresh_token = read_file(refresh_token_file)
        logger.debug(f"获取到的refresh_token={refresh_token!r}")
        self.refresh_token = refresh_token
 
    def check_time(self):
        is_continue = True
        expire_time_unix = self.expire_time_unix
        now_time_unix = get_unix_time()
        # logger.debug(f"当前unix_time={now_time_unix},expire_time_unix={expire_time_unix}")
        if expire_time_unix - now_time_unix > 15 * 60:
            logger.debug(f"不需要更新，退出:当前unix_time={now_time_unix},expire_time_unix={expire_time_unix}")
            is_continue = False
 
        return is_continue
 
    def get_refresh_token(self):
        try:
            url = "https://auth.aliyundrive.com/v2/account/token"
 
            refresh_token = self.refresh_token
            data_dict = {
                "refresh_token": refresh_token,
                "grant_type": "refresh_token"
            }
            headers = {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json;charset=UTF-8",
                "origin": "https://www.aliyundrive.com",
                "pragma": "no-cache",
                "referer": "https://www.aliyundrive.com/",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            }
 
            resp = requests.post(url, json=data_dict, headers=headers)
            resp_text = resp.text
            # logger.debug(f"resp_text={resp_text}")
            resp_json = resp.json()
            logger.debug(f"resp_json={resp_json}")
 
            new_access_token = resp_json.get('access_token', "")
            new_refresh_token = resp_json.get('refresh_token', "")
            expire_time = resp_json.get('expire_time', "")
            logger.debug(
                f"获取得到新的access_token={new_access_token},新的refresh_token={new_refresh_token},过期时间={expire_time}")
            if len(new_refresh_token) > 0:
                file_name = REFRESH_TOKEN_FILE
                content = new_refresh_token
                write_file(file_name, content)
 
            if len(expire_time) > 0:
                file_name = EXPIRE_TIME_FILE
                content = expire_time
                write_file(file_name, content)
 
            if len(new_access_token) > 0:
                file_name = ACCESS_TOKEN_FILE
                content = new_access_token
                write_file(file_name, content)
 
        except:
            logger.error(f"获取异常:{traceback.format_exc()}")
 
 
def main():
    a_li_yun_pan = ALiYunPanRefresh()
    flag = a_li_yun_pan.check_time()
    if flag:
        a_li_yun_pan.get_refresh_token()
 
 
if __name__ == '__main__':
    main()
