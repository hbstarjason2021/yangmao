"use strict";
/**
 * 京东-东东农场-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * 和jd_fruit.js同方法自己设置内部码
 * 如果没有添加内部码，直接助力助力池
 * cron: 35 0,3,5 * * *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_fruit_help = /** @class */ (function (_super) {
    __extends(Jd_fruit_help, _super);
    function Jd_fruit_help() {
        var _this = _super.call(this, "农场助力") || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_fruit_help.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.randPhoneId = function () {
        return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
    };
    Jd_fruit_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat(this.randPhoneId(), ";network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ").concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify({ version: 4 })), "&appid=wh5&clientVersion=9.1.0"), {
                                "accept": "*/*",
                                "accept-encoding": "gzip, deflate, br",
                                "accept-language": "zh-CN,zh;q=0.9",
                                "cache-control": "no-cache",
                                "cookie": this.user.cookie,
                                "origin": "https://home.m.jd.com",
                                "pragma": "no-cache",
                                "referer": "https://home.m.jd.com/myJd/newhome.action",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-site",
                                "User-Agent": this.user.UserAgent,
                                "Content-Type": "application/x-www-form-urlencoded"
                            })];
                    case 2:
                        res = _a.sent();
                        if (res.code === '0') {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                        }
                        else {
                            this.o2s(res, 'initForFarm error');
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u521D\u59CB\u5316\u5931\u8D25\n").concat(JSON.stringify(res)) }];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u8FD0\u884C\u51FA\u9519\n").concat(e_1.message) }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.help = function (users) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, full, users_1, users_1_1, user, shareCodePool, shareCode, shareCode_1, shareCode_1_1, code, i, e_2, e_3_1, e_4, e_5_1;
            var e_5, _b, e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        full = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 29, 30, 31]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 28];
                        user = users_1_1.value;
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 26, , 27]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat(this.randPhoneId(), ";network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ").concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1");
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 4:
                        shareCodePool = _d.sent();
                        shareCode = __spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodePool), false);
                        this.o2s(shareCode, '助力顺序');
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 23, 24, 25]);
                        shareCode_1 = (e_3 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _d.label = 6;
                    case 6:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 22];
                        code = shareCode_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        if (full.includes(code)) {
                            console.log('full contains');
                            return [3 /*break*/, 21];
                        }
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify({ imageUrl: "", nickName: "", "shareCode": code, babelChannel: "3", version: 2, channel: 1 })), "&appid=wh5"), {
                                "Host": "api.m.jd.com",
                                "Accept": "*/*",
                                "Origin": "https://carry.m.jd.com",
                                "Accept-Encoding": "gzip, deflate, br",
                                "User-Agent": this.user.UserAgent,
                                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                                "Referer": "https://carry.m.jd.com/",
                                "Cookie": this.user.cookie
                            })];
                    case 7:
                        res = _d.sent();
                        if (!!(res.helpResult && res.helpResult.code)) return [3 /*break*/, 8];
                        this.o2s(res, '助力出错');
                        return [3 /*break*/, 17];
                    case 8:
                        if (!(res.helpResult.code === '0')) return [3 /*break*/, 16];
                        console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                        i = 0;
                        _d.label = 9;
                    case 9:
                        if (!(i < 5)) return [3 /*break*/, 15];
                        _d.label = 10;
                    case 10:
                        _d.trys.push([10, 12, , 14]);
                        return [4 /*yield*/, this.get("https://sharecodepool.cnmb.win/api/runTimes0917?activityId=farm&sharecode=".concat((_a = this.user['code']) !== null && _a !== void 0 ? _a : "", "&today=").concat(Date.now().toString()))];
                    case 11:
                        res = _d.sent();
                        console.log(res);
                        return [3 /*break*/, 15];
                    case 12:
                        e_2 = _d.sent();
                        console.log(e_2.message);
                        return [4 /*yield*/, this.wait(this.getRandomNumberByRange(10000, 20000))];
                    case 13:
                        _d.sent();
                        return [3 /*break*/, 14];
                    case 14:
                        i++;
                        return [3 /*break*/, 9];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (res.helpResult.code === '7') {
                            console.log('不给自己助力');
                            this.user['code'] = code;
                        }
                        else if (res.helpResult.code === '9') {
                            console.log('已助力');
                        }
                        else if (res.helpResult.code === '10') {
                            console.log('已满');
                            full.push(code);
                        }
                        _d.label = 17;
                    case 17:
                        if (!(res.helpResult.remainTimes === 0)) return [3 /*break*/, 19];
                        console.log('上限');
                        return [4 /*yield*/, this.wait(10000)];
                    case 18:
                        _d.sent();
                        return [3 /*break*/, 22];
                    case 19: return [4 /*yield*/, this.wait(10000)];
                    case 20:
                        _d.sent();
                        _d.label = 21;
                    case 21:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 6];
                    case 22: return [3 /*break*/, 25];
                    case 23:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 25];
                    case 24:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_c = shareCode_1["return"])) _c.call(shareCode_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 25: return [3 /*break*/, 27];
                    case 26:
                        e_4 = _d.sent();
                        console.log(e_4.message);
                        return [3 /*break*/, 27];
                    case 27:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 28: return [3 /*break*/, 31];
                    case 29:
                        e_5_1 = _d.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 31];
                    case 30:
                        try {
                            if (users_1_1 && !users_1_1.done && (_b = users_1["return"])) _b.call(users_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 31: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit_help().init().then();
