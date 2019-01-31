"use strict";

class UserRepository {
    constructor() {
        this._localRepo = [];
        this.masterRepo = MasterRepository.getInstance();
        this.usersRef = this.masterRepo.getDb().ref().child("users");
    }

    initLocalRepo() {
        this.usersRef.on("value", snapshot => {
            const dataFromRemote = snapshot.val();

            for(let child in dataFromRemote) {
               this._localRepo.push(dataFromRemote[child]);
            }
        })
    }

    addUser(user) {
        if (user !== null || user !== undefined) {
            this._localRepo.push(user);
        } else {
            alert('Cannot save user locally');
        }
    }

    getUsers() {
        return this._localRepo;
    }

    static getInstance() {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
}
