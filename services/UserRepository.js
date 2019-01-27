"use strict";

class UserRepository {
    constructor() {
        this.localRepo = [];
    }

    get getUsers() {
        let immutableArray = [];

        return immutableArray.concat(...this.localRepo);
    }

    registerUser(user) {
        if (user !== null || user !== undefined) {
            this.localRepo.push(user);
        } else {
            throw new Error("Could not save user");
        }
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
