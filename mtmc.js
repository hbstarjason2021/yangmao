const axios = require("axios");
const {
    MTMC_userId,
    MTMC_fingerprint,
    MTMC_token,
    MTMC_uuid
} = config.MeiTuan;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function get(task, method = "get", data = null) {
    try {
        let url = `https://mall.meituan.com/api/c/mallcoin/${task}&app_tag=union&bizId=2&ci=2&page_type=h5&poi=10000380&poiId=66&tenantId=1&t=${MTMC_token}&uci=-1&userid=${MTMC_userId}&utm_medium=android&utm_term=5.38.0&uuid=${MTMC_uuid}&xuuid=`;
        
        const headers = {
            t: MTMC_token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/20.27.2 KNB/1.0 iOS/16.6.1 imaicai/com.baobaoaichi.imaicai/6.64.0 imaicai/6.64.0 App/11g10/6.64.0 iPhone/iPhone13 WKWebView",
            Host: "mall.meituan.com",
            "X-Requested-With": "com.meituan.retail.v.android",
            "Content-Type": "application/json; charset=utf-8"
        };

        if (data && data.riskMap) {
            const xxstr = {
                "platform": 4,
                "app": 95,
                "utm_term": "5.38.0",
                "uuid": MTMC_uuid,
                "fingerprint": MTMC_fingerprint,
                "utm_medium": 95
            };
            data.riskMap = Object.assign(data.riskMap, xxstr);
        }

        let res;
        if (method === "get") {
            res = await axios.get(url, { headers });
        } else if (method === "post") {
            res = await axios.post(url, data, { headers });
        }

        if (res.data.code === 0) console.log("    操作成功");
        return res.data;
    } catch (err) {
        console.log(err);
        return {
            code: 500,
            error: { msg: "接口请求出错" }
        };
    }
}

async function getaskList() {
    console.log("查询任务列表");
    let res = await get("checkIn/queryTaskListInfoV3?&channel=1", "post", {
        "riskMap": {
            "partner": 109,
            "campaignId": 1002,
            "campaignName": "买菜币"
        }
    });
    
    if (res.code === 0 && res.data) {
        return res.data.checkInTaskInfos.filter(x => 
            x.id === 52 && x.taskFinishCount !== x.taskChance || x.status === 100
        );
    }
    return [];
}

async function sign() {
    let signmsg = "";
    console.log("去签到：");
    let signRes = await get("checkIn/userCheckInNew?", "post", {
        "userId": MTMC_userId,
        "riskMap": {}
    });

    if (signRes.code === 0) {
        signmsg = signRes.data.result ? 
            `签到成功！获得 ${signRes.data.rewardValue}买菜币` : 
            "签到失败！可能签到过啦";
        console.log("    " + signmsg);
    } else {
        signmsg = signRes.error.msg;
    }

    for (const rewardDate of [3, 7]) {
        await get("checkIn/getWeekContinuousRewardNew?", "post", {
            userId: MTMC_userId,
            rewardDate: rewardDate,
            "riskMap": {}
        });
    }
    return signmsg;
}

async function view() {
    let taskList = await getaskList();
    if (taskList.length === 0) return;

    let task = taskList[0];
    console.log("浏览任务开始：\n  去领取浏览任务：");
    console.log("    " + task.buttonDesc);

    if (task.buttonDesc === "领任务" || task.status === 10) {
        let lqRes = await get("checkIn/takeTask?activityId=33&taskId=52&channel=1");
        if (lqRes?.code === 0) {
            console.log("    领取成功\n等待17s");
            await sleep(17000);
            await get("checkIn/taskEventComplete?eventType=6&channel=1");
        } else {
            console.log("    " + (lqRes?.error?.msg || "领取失败"));
        }
        taskList = await getaskList();
        task = taskList[0];
    }

    if (task.buttonDesc === "领奖励") {
        await sleep(3000);
        console.log("  去领取奖励：");
        let lqReward = await get(
            `checkIn/takeTaskReward?activityId=33&taskId=52&rewardId=774&taskType=6&userTaskId=${task.userTaskId}&channel=1`
        );
        if (lqReward?.code === 0) {
            console.log(`    领取成功！获得 ${lqReward.data.rewardType} ${lqReward.data.rewardValue}`);
        }
    }
}

async function getmyb() {
    let res = await get("checkIn/getCheckInMainView?");
    if (res?.code === 0) {
        return `\n我的菜币：${res.data.userInfo.balance}\n签到天数：${res.data.checkInCount}\n提示信息：${res.data.noticeDetail}\n`;
    }
    return "";
}

async function share() {
    console.log("去分享：");
    let res = await get("checkIn/getShareReward?shareBusinessType=2&");
    if (res.code === 0) {
        console.log(res.data.result ? 
            `    分享成功！获得 ${res.data.rewardValue}菜币` : 
            "    分享过啦"
        );
    }
}

async function meituanmc() {
    let signMsg = await sign();
    await view();
    await share();
    let myInfo = await getmyb();
    let content = `【美团买菜】签到：${signMsg} ${myInfo}`;
    console.log(content);
    return content;
}

module.exports = meituanmc;
