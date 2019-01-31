"use strict";

class MasterRepository {
    constructor() {
        this.config = {
            apiKey: "AIzaSyDMDgiw1L-JNdhMqfrXNNtVesBUOj27IF8",
            authDomain: "liquidflavor-7f12a.firebaseapp.com",
            databaseURL: "https://liquidflavor-7f12a.firebaseio.com",
            projectId: "liquidflavor-7f12a",
            storageBucket: "liquidflavor-7f12a.appspot.com",
            messagingSenderId: "378742161031"
        };

        firebase.initializeApp(this.config);
        this.db = firebase.database();
    }

    static getInstance() {
        if (!MasterRepository._instance) {
            MasterRepository.instantiate();
        }
        return MasterRepository._instance;
    }

    static instantiate() {
        MasterRepository._instance = new MasterRepository();
    }

    getDb() {
        return this.db;
    }
}