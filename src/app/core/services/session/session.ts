import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class SessionService {

    private api = {
        sessionID: "",
        actualPath: "",
        userInfo: {
            name: "",
            email: "",
            phoneNo: null
        }
    }

    set sessionID(sessionID) {
        this.api.sessionID = sessionID
    }
    get sessionID() {
        return this.api.sessionID
    }
    set actualPath(actualPath) {
        this.api.actualPath = actualPath
    }
    get actualPath() {
        return this.api.actualPath
    }
    set userInfo(userinfo) {
        this.api.userInfo = userinfo
    }
    get userInfo() {
        return this.api.userInfo
    }
    clearSession() {
        this.api.sessionID = ""
        this.api.userInfo = { name: "", email: "", phoneNo: null }
        this.api.actualPath = "";
        return true;
    }
}

