import datetime
import os
import time
import pandas as pd
from config import RECORDS_PATH
from machine_lib import login

pd.set_option('expand_frame_repr', False)
pd.set_option('display.max_rows', 1000)
pd.set_option('display.max_colwidth', 100)

def submit_alpha(session, alpha_id):
    """执行单个Alpha提交（30分钟超时版）"""
    submit_url = f"https://api.worldquantbrain.com/alphas/{alpha_id}/submit"
    
    # 第一阶段：发起提交
    for attempt in range(1, 6):
        response = session.post(submit_url)
        if response.status_code == 201:
            break
        elif response.status_code == 403:
            return 403, "提交被永久拒绝"
        time.sleep(3)
    else:
        return 408, "服务器连接超时"

    # 第二阶段：延长轮询时间
    start_time = datetime.datetime.now()
    timeout = start_time + datetime.timedelta(minutes=30)
    last_status_time = start_time
    
    while datetime.datetime.now() < timeout:
        response = session.get(submit_url)
        elapsed = datetime.datetime.now() - start_time
        
        # 显示等待状态（每5分钟）
        if (datetime.datetime.now() - last_status_time).seconds >= 300:
            print(f"  ⏳ 持续提交中 | 已等待 {elapsed.seconds//60} 分钟")
            last_status_time = datetime.datetime.now()
        
        if response.status_code == 200:
            if 'Retry-After' in response.headers:
                time.sleep(float(response.headers['Retry-After']))
            else:
                return 200, "提交成功"
        elif response.status_code == 403:
            return 403, "合规检查未通过"
        else:
            time.sleep(10)  # 非200状态码时增加保护间隔

    return 408, "超时终止（30分钟未完成）"

def main():
    session = login()
    csv_path = os.path.join(RECORDS_PATH, 'submitable_alpha.csv')
    
    while True:
        if not os.path.exists(csv_path):
            print("❌ 错误：未找到 submitable_alpha.csv")
            time.sleep(60)  # 等待60秒后再次检查
            continue

        df = pd.read_csv(csv_path).sort_values('self_corr', ascending=True)
        success_count = 0

        print(f"📁 待提交数量：{len(df)}")
        print("="*55)

        for idx, row in df.iterrows():
            alpha_id = row['id']
            print(f"🚀 开始提交 | ID: {alpha_id}")
            print(f"   📊 自相关性：{row['self_corr']:.4f}")
            
            # 执行提交
            start_time = datetime.datetime.now()
            status, msg = submit_alpha(session, alpha_id)
            elapsed = datetime.datetime.now() - start_time
            
            # 更新CSV
            df = df[df['id'] != alpha_id]
            df.to_csv(csv_path, index=False)
            
            # 处理结果
            if status == 200:
                success_count += 1
                print(f"✅ 成功！累计 {success_count} | 耗时 {elapsed.seconds//60}m{elapsed.seconds%60}s")
            else:
                print(f"⚠️  失败：{msg} | 耗时 {elapsed.seconds//60}m{elapsed.seconds%60}s")
            
            print("-"*55)
            time.sleep(5)  # 提交间隔保护

        # 如果没有可提交的因子，等待一段时间后再次检查
        if len(df) == 0:
            print("没有可提交的因子，等待60秒后再次检查...")
            time.sleep(60)

if __name__ == '__main__':
    main()
