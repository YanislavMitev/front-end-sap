"use strict";

class UserRepository {
    constructor() {
        this.localRepo = [];
    }

    get getUsers() {
        let immutableArray = [];

        return immutableArray.concat(...this.localRepo);
    }

    get registerUser() {
        //TODO:TO BE IMPLEMENTED!!!
    }

    fetchUsers(db) {
        return db.ref().child("users");
    }

    initLocalRepo(source) {
        for(let child in source) {
            this.localRepo.push(source[child]);
        }
    }

    getUser(user) {
        //TODO:TO BE IMPLEMENTED!!!
    }
}
