#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys
import json
import requests

# 禁用请求警告
requests.packages.urllib3.disable_warnings()

# 基础配置
BASE_URL = os.getenv("URL_DABAI", "https://a.dabai.in")
SESSION = requests.Session()  # 会话对象，自动保存登录后的Cookie

def dabai_login(email, password):
    """
    大白账号登录函数（适配真实接口）
    :param email: 登录邮箱
    :param password: 登录密码
    :return: 登录成功返回True，失败返回False
    """
    # ========== 重点：替换为你抓包得到的真实登录接口 ==========
    login_url = f"{BASE_URL}/auth/login"  # 示例：/auth/login，替换成你的真实路径
    print(f"🔑 正在尝试登录账号：{email}")
    
    # ========== 重点：替换为你抓包得到的真实参数名 ==========
    login_data = {
        "email": email,        # 若抓包是username，就改成"username": email
        "passwd": password,    # 若抓包是password，就改成"password": password
        "remember_me": "1"     # 若没有该参数，可删除这一行
    }
    
    # 登录请求头（适配真实请求）
    login_headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "origin": BASE_URL,
        # ========== 重点：替换为登录页面的真实地址 ==========
        "referer": f"{BASE_URL}/login",  # 若登录页是/auth/login，就改成这个
        "x-requested-with": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        # 发送登录请求
        response = SESSION.post(
            url=login_url,
            data=login_data,
            headers=login_headers,
            verify=False,
            timeout=30
        )
        
        # 打印响应状态码和原始内容（方便排查）
        print(f"📌 登录请求状态码：{response.status_code}")
        print(f"📌 登录响应原始内容：{response.text[:500]}")  # 只打印前500字符
        
        # 优先尝试解析JSON（多数接口返回JSON）
        try:
            result = response.json()
            print(f"📝 登录响应（JSON）：{json.dumps(result, ensure_ascii=False, indent=2)}")
            
            # 判断登录成功（根据抓包的响应调整）
            if result.get("code") == 0 or result.get("success") or "成功" in str(result.get("msg", "")):
                print("✅ 登录成功！")
                return True
            else:
                print(f"❌ 登录失败：{result.get('msg', '账号或密码错误')}")
                return False
        except json.JSONDecodeError:
            # 若响应不是JSON，检查Cookie是否存在（登录成功的间接判断）
            print("⚠️ 登录响应非JSON格式，检查Cookie是否有效...")
            # 检查关键Cookie（比如uid、email、key等）
            cookie_keys = [cookie.name for cookie in SESSION.cookies]
            if "uid" in cookie_keys or "key" in cookie_keys:
                print("✅ 检测到登录Cookie，判定为登录成功！")
                return True
            else:
                print("❌ 未检测到有效登录Cookie，登录失败！")
                return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ 登录请求失败（网络/超时）：{str(e)}")
        return False
    except Exception as e:
        print(f"❌ 登录过程异常：{str(e)}")
        return False

def dabai_checkin():
    """大白签到主函数（依赖登录后的会话Cookie）"""
    checkin_url = f"{BASE_URL}/user/checkin"
    
    # 签到请求头（无需修改，已对齐你的curl指令）
    checkin_headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-length": "0",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "origin": BASE_URL,
        "referer": f"{BASE_URL}/user",
        "x-requested-with": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        # 发送签到请求（使用登录后的会话，自动携带Cookie）
        response = SESSION.post(
            url=checkin_url,
            headers=checkin_headers,
            data="",  # content-length: 0 对应空body
            verify=False,
            timeout=30
        )
        
        # 解析签到响应
        result = response.json()
        print(f"📝 签到响应结果：{json.dumps(result, ensure_ascii=False, indent=2)}")
        
        # 友好提示签到状态
        if result.get("code") == 0 or result.get("success"):
            print("🎉 签到成功！")
        elif "已签到" in str(result.get("msg", "")):
            print("ℹ️ 今日已签到，无需重复操作！")
        else:
            print(f"❌ 签到失败：{result.get('msg', '未知错误')}")
            
    except requests.exceptions.RequestException as e:
        print(f"❌ 签到请求失败（网络/超时）：{str(e)}")
    except json.JSONDecodeError:
        print(f"❌ 签到响应解析失败，原始内容：{response.text}")
    except Exception as e:
        print(f"❌ 签到过程异常：{str(e)}")

if __name__ == "__main__":
    print("===== 大白(dabai.in)自动签到（邮箱密码版）开始 =====")
    
    # 从环境变量读取账号密码
    EMAIL_DABAI = os.getenv("EMAIL_DABAI")
    PASSWORD_DABAI = os.getenv("PASSWORD_DABAI")
    
    # 检查账号密码配置
    if not EMAIL_DABAI or not PASSWORD_DABAI:
        print("❌ 未配置 EMAIL_DABAI 或 PASSWORD_DABAI 环境变量，请检查！")
        sys.exit(1)
    
    # 先登录，登录成功后再签到
    if dabai_login(EMAIL_DABAI, PASSWORD_DABAI):
        print("--- 开始执行签到 ---")
        dabai_checkin()
    else:
        print("❌ 登录失败，终止签到流程")
        sys.exit(1)
    
    print("===== 大白(dabai.in)自动签到（邮箱密码版）结束 =====")
