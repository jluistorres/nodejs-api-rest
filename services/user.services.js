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
        userData[index].name = data.name;
        userData[index].age = data.age;
        return "Usuario actualizado";
    }

    delete(id) {
        let index = userData.findIndex(x => x.id == id);
        return userData.splice(index, 1);
    }
}

module.exports = new UserService();