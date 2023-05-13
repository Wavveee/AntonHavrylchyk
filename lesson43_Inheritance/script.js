class User {
    constructor(name = "anonym", role = "user") {
        this.name = name
        if (role === "user" || role === "admin") {

            this.role = role;
        } else {

            this.role = "ALERT an incorrect role is specified";
        }
    }

    getName() {
        return this.name
    }

    getRole() {
        return this.role
    }

    login() {
        // не зрозумів що тут повинно бути
    }

    logout() {
         // не зрозумів що тут повинно бути
    }

    changeName(name) {
        this.name = name
    }

    changePassword(password) {
        this.password = password
    }
}

const user1 = new User("Derevyanko")
const user2 = new User("Abercrombie")
const user3 = new User("Sapkowski")

const usersArray = [user1, user2, user3]

class Admin extends User {
    constructor(name) {
        super()
        this.name = name
        this.role = "admin"
    }

    addUser(name) {
        return usersArray.push(new User(name))
    }

    removeUser(name) {
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].name === name) usersArray.splice(i, 1)
        }
    }

    changeUserRole(name, role) {
        usersArray.forEach(element => {
            if (element.name === name) element.role = role
        });
    }

    getAllUsers() {
        console.log(usersArray)
    }

    removeAllUsers() {
        usersArray.splice(0, usersArray.length)
    }


}

const admin = new Admin("Tolkien")
admin.addUser("Var")
admin.getAllUsers()
admin.changeUserRole("Derevyanko", "admin")
admin.removeUser("Var")