const userData = require('../db/database');

class UserService {
    getAll() {
        return userData;
    }

    get(id) {
        return userData.find(x => x.id == id);
    }

    create(data) {
        userData.push(data);
        return "Usuario creado";
    }

    update(id, data) {
        let index = userData.findIndex(x => x.id == id);
        if (index != -1) {
            userData[index].name = data.name;
            userData[index].age = data.age;
            return "Usuario actualizado";
        } else {
            return "Usuario no existe";
        }
    }

    delete(id) {
        let index = userData.findIndex(x => x.id == id);
        if (index != -1) {
            return userData.splice(index, 1);
        } else {
            return "Usuario no existe";
        }
    }
}

module.exports = new UserService();