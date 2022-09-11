"use strict";
/**
 * 京东-东东农场-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * 和jd_fruit.js同方法自己设置内部码
 * 如果没有添加内部码，直接助力助力池
 * cron: 35 0,3,5 * * *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var date_fns_1 = require("date-fns");
var sendNotify_1 = require("./sendNotify");
var cookie = '', res = '', UserName, h5stTool;
var shareCodeSelf = [], log = { help: '', runTimes: '' }, message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, i, today, e_1, e_2, e_3_1, full, _d, _e, _f, index, value, shareCodePool, shareCode, shareCode_1, shareCode_1_1, code, e_4_1, e_5, e_6_1, _g, _h, _j, index, value, assistFriendList, farmAssistInit_waterEnergy, _k, _l, t, e_7_1, e_8, e_9_1, _m;
    var e_3, _o, e_6, _p, e_4, _q, e_9, _r, e_7, _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _t.sent();
                _t.label = 2;
            case 2:
                _t.trys.push([2, 19, 20, 21]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _t.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 18];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                _t.label = 4;
            case 4:
                _t.trys.push([4, 14, , 15]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], process.env.FP_0C010 || "");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 5:
                _t.sent();
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 6:
                res = _t.sent();
                if (res.code !== '0') {
                    console.log('初始化失败');
                    return [3 /*break*/, 17];
                }
                console.log('助力码', res.farmUserPro.shareCode);
                shareCodeSelf.push(res.farmUserPro.shareCode);
                i = 0;
                _t.label = 7;
            case 7:
                if (!(i < 5)) return [3 /*break*/, 13];
                _t.label = 8;
            case 8:
                _t.trys.push([8, 10, , 12]);
                today = (0, date_fns_1.getDate)(new Date());
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://sharecodepool.cnmb.win/api/runTimes0701?activityId=farm&sharecode=".concat(res.farmUserPro.shareCode, "&today=").concat(today))];
            case 9:
                res = _t.sent();
                console.log(res);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21").concat(res, "\n");
                return [3 /*break*/, 13];
            case 10:
                e_1 = _t.sent();
                console.log("\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25"), e_1);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25 ").concat(typeof e_1 === 'object' ? JSON.stringify(e_1) : e_1, "\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((0, TS_USER_AGENTS_1.getRandomNumberByRange)(10000, 30000))];
            case 11:
                _t.sent();
                return [3 /*break*/, 12];
            case 12:
                i++;
                return [3 /*break*/, 7];
            case 13: return [3 /*break*/, 15];
            case 14:
                e_2 = _t.sent();
                console.log('error', e_2);
                return [3 /*break*/, 18];
            case 15: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 16:
                _t.sent();
                _t.label = 17;
            case 17:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 18: return [3 /*break*/, 21];
            case 19:
                e_3_1 = _t.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 21];
            case 20:
                try {
                    if (_b && !_b.done && (_o = _a["return"])) _o.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 21:
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf, '内部互助');
                full = [];
                _t.label = 22;
            case 22:
                _t.trys.push([22, 50, 51, 52]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _t.label = 23;
            case 23:
                if (!!_e.done) return [3 /*break*/, 49];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                _t.label = 24;
            case 24:
                _t.trys.push([24, 45, , 46]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], process.env.FP_0C010 || "");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 25:
                _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 50)];
            case 26:
                shareCodePool = _t.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _t.label = 27;
            case 27:
                _t.trys.push([27, 42, 43, 44]);
                shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _t.label = 28;
            case 28:
                if (!!shareCode_1_1.done) return [3 /*break*/, 41];
                code = shareCode_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodeSelf.includes(code) ? "*内部*" : ""));
                if (full.includes(code)) {
                    console.log('full contains');
                    return [3 /*break*/, 40];
                }
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 29:
                res = _t.sent();
                if (!(res.helpResult.code === '7')) return [3 /*break*/, 30];
                console.log('不给自己助力');
                return [3 /*break*/, 37];
            case 30:
                if (!(res.helpResult.code === '0')) return [3 /*break*/, 31];
                console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                log.help += "\u52A9\u529B\u6210\u529F ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                return [3 /*break*/, 37];
            case 31:
                if (!(res.helpResult.code === '8')) return [3 /*break*/, 33];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(50000)];
            case 32:
                _t.sent();
                return [3 /*break*/, 41];
            case 33:
                if (!(res.helpResult.code === '9')) return [3 /*break*/, 34];
                console.log('已助力');
                log.help += "\u5DF2\u52A9\u529B ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                return [3 /*break*/, 37];
            case 34:
                if (!(res.helpResult.code === '10')) return [3 /*break*/, 35];
                console.log('已满');
                full.push(code);
                return [3 /*break*/, 37];
            case 35:
                if (!(res.helpResult.remainTimes === 0)) return [3 /*break*/, 37];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 36:
                _t.sent();
                return [3 /*break*/, 41];
            case 37: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 38:
                _t.sent();
                if (!(res.helpResult.remainTimes === 0)) return [3 /*break*/, 40];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 39:
                _t.sent();
                return [3 /*break*/, 41];
            case 40:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 28];
            case 41: return [3 /*break*/, 44];
            case 42:
                e_4_1 = _t.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 44];
            case 43:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_q = shareCode_1["return"])) _q.call(shareCode_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 44: return [3 /*break*/, 46];
            case 45:
                e_5 = _t.sent();
                console.log('error', e_5);
                return [3 /*break*/, 46];
            case 46: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 47:
                _t.sent();
                _t.label = 48;
            case 48:
                _e = _d.next();
                return [3 /*break*/, 23];
            case 49: return [3 /*break*/, 52];
            case 50:
                e_6_1 = _t.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 52];
            case 51:
                try {
                    if (_e && !_e.done && (_p = _d["return"])) _p.call(_d);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 52:
                _t.trys.push([52, 72, 73, 74]);
                _g = __values(cookiesArr.entries()), _h = _g.next();
                _t.label = 53;
            case 53:
                if (!!_h.done) return [3 /*break*/, 71];
                _j = __read(_h.value, 2), index = _j[0], value = _j[1];
                _t.label = 54;
            case 54:
                _t.trys.push([54, 67, , 68]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], process.env.FP_0C010 || "");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 55:
                _t.sent();
                return [4 /*yield*/, api('farmAssistInit', { "version": 16, "channel": 1, "babelChannel": "121" })];
            case 56:
                res = _t.sent();
                assistFriendList = res.assistFriendList.length;
                if (res.code !== '0') {
                    console.log('farmAssistInit Error');
                    return [3 /*break*/, 70];
                }
                farmAssistInit_waterEnergy = 0;
                _t.label = 57;
            case 57:
                _t.trys.push([57, 64, 65, 66]);
                _k = (e_7 = void 0, __values(res.assistStageList)), _l = _k.next();
                _t.label = 58;
            case 58:
                if (!!_l.done) return [3 /*break*/, 63];
                t = _l.value;
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 61];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 59:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 60:
                _t.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 62];
            case 61:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _t.label = 62;
            case 62:
                _l = _k.next();
                return [3 /*break*/, 58];
            case 63: return [3 /*break*/, 66];
            case 64:
                e_7_1 = _t.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 66];
            case 65:
                try {
                    if (_l && !_l.done && (_s = _k["return"])) _s.call(_k);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 66:
                console.log('收到助力', assistFriendList);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n\n");
                message += '\n\n';
                return [3 /*break*/, 68];
            case 67:
                e_8 = _t.sent();
                console.log('error', e_8);
                return [3 /*break*/, 68];
            case 68: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 69:
                _t.sent();
                _t.label = 70;
            case 70:
                _h = _g.next();
                return [3 /*break*/, 53];
            case 71: return [3 /*break*/, 74];
            case 72:
                e_9_1 = _t.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 74];
            case 73:
                try {
                    if (_h && !_h.done && (_r = _g["return"])) _r.call(_g);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 74:
                _m = message;
                if (!_m) return [3 /*break*/, 76];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("农场助力", message)];
            case 75:
                _m = (_t.sent());
                _t.label = 76;
            case 76:
                _m;
                return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    h5st = h5stTool.__genH5st({
                        'appid': 'wh5',
                        'body': JSON.stringify(body),
                        'client': 'apple',
                        'clientVersion': '10.2.4',
                        'functionId': fn
                    });
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=11.0.4&h5st=").concat(h5st), {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
