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
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var date_fns_1 = require("date-fns");
var h5st_1 = require("./utils/h5st");
var res = '', data = '', shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var Fruit_Help = /** @class */ (function (_super) {
    __extends(Fruit_Help, _super);
    function Fruit_Help() {
        return _super.call(this) || this;
    }
    Fruit_Help.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Fruit_Help())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Fruit_Help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        h5st = this.h5stTool.__genH5st({
                            'appid': 'wh5',
                            'body': JSON.stringify(body),
                            'client': 'apple',
                            'clientVersion': '10.2.4',
                            'functionId': fn
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=10.2.4&h5st=").concat(h5st), {
                                "Host": "api.m.jd.com",
                                "Origin": "https://carry.m.jd.com",
                                "User-Agent": this.user.UserAgent,
                                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                                "Referer": "https://carry.m.jd.com/",
                                "Cookie": this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Fruit_Help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var i, today, e_1, e_2, shareCodeSelf_1, shareCodeSelf_1_1, code, e_3_1, farmAssistInit_waterEnergy, _a, _b, t, e_4_1;
            var e_3, _c, e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.user = user;
                        this.h5stTool = new h5st_1.H5ST("0c010", user.UserAgent, "8389547038003203");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _e.sent();
                        if (Object.keys(shareCodeFile)[user.i]) {
                            shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[user.i]].split('@');
                        }
                        this.o2s(shareCodeSelf, "\u7B2C".concat(user.i + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"));
                        return [4 /*yield*/, this.api('initForFarm', { "version": 11, "channel": 3 })];
                    case 2:
                        // message += `【账号${user.i + 1}】  ${UserName}\n`
                        // log.help += `【账号${user.i + 1}】  ${UserName}\n`
                        // log.runTimes += `【账号${user.i + 1}】  ${UserName}\n`
                        res = _e.sent();
                        if (res.code !== '0') {
                            console.log('初始化失败');
                            return [2 /*return*/];
                        }
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 11, , 12]);
                        console.log('助力码', res.farmUserPro.shareCode);
                        i = 0;
                        _e.label = 4;
                    case 4:
                        if (!(i < 5)) return [3 /*break*/, 10];
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 7, , 9]);
                        today = (0, date_fns_1.getDate)(new Date());
                        return [4 /*yield*/, this.get("https://api.jdsharecode.xyz/api/runTimes0509?activityId=farm&sharecode=".concat(res.farmUserPro.shareCode, "&today=").concat(today))];
                    case 6:
                        res = _e.sent();
                        console.log(res);
                        // log.runTimes += `第${i + 1}次${res}\n`
                        return [3 /*break*/, 10];
                    case 7:
                        e_1 = _e.sent();
                        console.log("\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25"), e_1);
                        // log.runTimes += `第${i + 1}次上报失败 ${typeof e === 'object' ? JSON.stringify(e) : e}\n`
                        return [4 /*yield*/, this.wait(this.getRandomNumberByRange(10000, 30000))];
                    case 8:
                        // log.runTimes += `第${i + 1}次上报失败 ${typeof e === 'object' ? JSON.stringify(e) : e}\n`
                        _e.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        i++;
                        return [3 /*break*/, 4];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_2 = _e.sent();
                        console.log('获取助力码失败, 黑号?');
                        return [2 /*return*/];
                    case 12: return [4 /*yield*/, this.wait(1000)
                        // 助力
                    ];
                    case 13:
                        _e.sent();
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 14:
                        // 助力
                        shareCodePool = _e.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                        _e.label = 15;
                    case 15:
                        _e.trys.push([15, 21, 22, 23]);
                        shareCodeSelf_1 = __values(shareCodeSelf), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                        _e.label = 16;
                    case 16:
                        if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 20];
                        code = shareCodeSelf_1_1.value;
                        console.log("\u8D26\u53F7 ".concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
                    case 17:
                        res = _e.sent();
                        return [4 /*yield*/, this.wait(5000)];
                    case 18:
                        _e.sent();
                        if (res.helpResult.code === '7') {
                            console.log('不给自己助力');
                        }
                        else if (res.helpResult.code === '0') {
                            console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                            // log.help += `助力成功 ${code} ${shareCodeSelf.includes(code) ? '*内部*' : ''}\n`
                        }
                        else if (res.helpResult.code === '8') {
                            console.log('上限');
                            return [3 /*break*/, 20];
                        }
                        else if (res.helpResult.code === '9') {
                            console.log('已助力');
                            // log.help += `已助力 ${code} ${shareCodeSelf.includes(code) ? '*内部*' : ''}\n`
                        }
                        else if (res.helpResult.code === '10') {
                            console.log('已满');
                        }
                        else if (res.helpResult.remainTimes === 0) {
                            console.log('上限');
                            return [3 /*break*/, 20];
                        }
                        _e.label = 19;
                    case 19:
                        shareCodeSelf_1_1 = shareCodeSelf_1.next();
                        return [3 /*break*/, 16];
                    case 20: return [3 /*break*/, 23];
                    case 21:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 23];
                    case 22:
                        try {
                            if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_c = shareCodeSelf_1["return"])) _c.call(shareCodeSelf_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 23: return [4 /*yield*/, this.wait(10000)
                        // 助力奖励
                    ];
                    case 24:
                        _e.sent();
                        return [4 /*yield*/, this.api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
                    case 25:
                        // 助力奖励
                        res = _e.sent();
                        if (res.code !== '0') {
                            console.log('farmAssistInit Error');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.wait(3000)
                            // this.o2s(res, 'farmAssistInit')
                        ];
                    case 26:
                        _e.sent();
                        farmAssistInit_waterEnergy = 0;
                        _e.label = 27;
                    case 27:
                        _e.trys.push([27, 34, 35, 36]);
                        _a = __values(res.assistStageList), _b = _a.next();
                        _e.label = 28;
                    case 28:
                        if (!!_b.done) return [3 /*break*/, 33];
                        t = _b.value;
                        if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 31];
                        return [4 /*yield*/, this.api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
                    case 29:
                        data = _e.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 30:
                        _e.sent();
                        farmAssistInit_waterEnergy += t.waterEnergy;
                        return [3 /*break*/, 32];
                    case 31:
                        if (t.stageStaus === 3) {
                            farmAssistInit_waterEnergy += t.waterEnergy;
                        }
                        _e.label = 32;
                    case 32:
                        _b = _a.next();
                        return [3 /*break*/, 28];
                    case 33: return [3 /*break*/, 36];
                    case 34:
                        e_4_1 = _e.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 36];
                    case 35:
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 36:
                        console.log('收到助力', res.assistFriendList.length);
                        console.log('助力已领取', farmAssistInit_waterEnergy);
                        // message += `【助力已领取】  ${farmAssistInit_waterEnergy}\n`
                        // message += '\n\n'
                        return [4 /*yield*/, this.wait(60000)];
                    case 37:
                        // message += `【助力已领取】  ${farmAssistInit_waterEnergy}\n`
                        // message += '\n\n'
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Fruit_Help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Fruit_Help().init().then();
