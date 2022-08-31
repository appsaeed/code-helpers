"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class App {
    constructor() {
        this.tokenKey =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    firstUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    token(length = 30) {
        let a = this.tokenKey.split("");
        let b = [];
        let rand;
        for (let i = 0; i < length; i++) {
            rand = Number((Math.random() * (a.length - 1)).toFixed(0));
            b[i] = a[rand];
        }
        return b.join("");
    }
    random(start = 10, end = 99) {
        return Math.floor(Math.random() * end) + start;
    }
    queryToJSON(query) {
        var obj = {};
        var qury = query.split("&");
        if (typeof qury === "object" && qury.length > 1) {
            for (let i = 0; i < qury.length; i++) {
                if (qury[i].split("=").length === 2) {
                    const q = qury[i].split("=");
                    obj[q[0]] = q[1];
                }
            }
            return obj;
        }
        else {
            return null;
        }
    }
    copyImageClipboard(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = yield fetch(url);
                const blob = yield req.blob();
                navigator.clipboard.write([
                    new ClipboardItem({
                        [blob.type]: blob,
                    }),
                ]);
                console.log("copied!");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const app = new App();
