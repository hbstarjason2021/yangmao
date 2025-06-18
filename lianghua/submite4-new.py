# submit_alpha.py
def submit_alpha(s, alpha_id):
    submit_url = f"https://api.worldquantbrain.com/alphas/{alpha_id}/submit"

    attempts = 0
    while attempts < 5:
        attempts += 1
        print(f"Attempt {attempts} to submit {alpha_id}.")
        # 第一轮提交
        while True:
            res = s.post(submit_url)
            if res.status_code == 201:
                print(f"Alpha {alpha_id} POST Status 201. Start submitting...")
                break
            elif res.status_code == 400:
                print(f"Alpha {alpha_id} POST Status {res.status_code}.")
                print(f"Alpha {alpha_id} Already POST.")
                print(res.content)
                break
            elif res.status_code == 403:
                print(f"Alpha {alpha_id} POST Status {res.status_code}.")
                print(pd.DataFrame(res.json()["is"]["checks"])[['name', 'value', 'result']])
                return res.status_code
            else:
                print(f"Alpha {alpha_id} POST Status {res.status_code}.")
                print(res.content)
                time.sleep(3)

        # 第二轮提交
        count = 0
        s_t = datetime.datetime.now()
        while True:
            res = s.get(submit_url)
            if res.status_code == 200:
                retry = res.headers.get('Retry-After', 0)
                if retry:
                    count += 1
                    time.sleep(float(retry))
                    if count % 75 == 0:
                        print(f"Alpha {alpha_id} GET Status 200. Waiting... {datetime.datetime.now()-s_t}.")
                else:
                    print(f"Alpha {alpha_id} was submitted successfully.")
                    return res.status_code
            elif res.status_code == 403:
                print(f"Alpha {alpha_id} GET Status {res.status_code}.")
                print(f"Alpha {alpha_id} submit failed. Need Improvement.")
                print(pd.DataFrame(res.json()["is"]["checks"])[['name', 'value', 'result']])
                return res.status_code
            elif res.status_code == 404:
                print(f"Alpha {alpha_id} GET Status {res.status_code}.")
                print(f"Alpha {alpha_id} submit failed. Time Out.")
                break
            else:
                print(f"Alpha {alpha_id} GET Status {res.status_code}.")
                print(f"Alpha {alpha_id} submit failed. Time Out.")
                print(res.headers)
                print(res.content)
                break

    return 404

if __name__ == '__main__':
    s = login()

    print("禁止直接运行此代码，一定要看完视频后，自己修改submittable_alphas = ['xxx']，自动提交一时爽，value爆炸火葬场")

    submitable_alpha_file = os.path.join(RECORDS_PATH, 'submitable_alpha.csv')

    # 这里面替换你的alpha_id
    submittable_alphas = []
    for alpha_id in submittable_alphas:
        status_code = submit_alpha(s, alpha_id)
        if status_code == 200 or status_code == 403:
            df = pd.read_csv(submitable_alpha_file)
            df = df[df['id'] != alpha_id]
            df.to_csv(submitable_alpha_file, index=False)
