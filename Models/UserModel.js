const db = require("./Connection");

// FUNCTION MEMBUAT USER
exports.createUser = async (data) => {
    return await db("users")
    .insert(data)
    .then((result) => {
        return result;
    })
    .catch((error) => {
        // ini akan keluar di test.rest
        return error;
    });
};

// FUNCTION LIHAT USER
exports.readUser = async () => {
    return await db("users")
    .select("*")
    .then((result) => {
        return result;
    })
    .catch((error) => {
        return error;
    });
};

// FUNCTION DELETE USER
exports.deleteUser = async (data) => {
    return await db("users")
    .where(data)
    .del()
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return err;
    });
};

// FUNCTION MENGEDIT USER
exports.editUser = async (id, data) => {
    return await db("users")
    .where({ id: id})
    .update(data)
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return err;
    });
};
