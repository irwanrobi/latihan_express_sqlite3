const db = require("./Connection");

exports.createUser = async (data) => {
    return await db("users")
    .insert(data)
    .then((result) => {
        return result;
    })
    .catch((error) => {
        return error;
    })
}

exports.readUser = async () => {
    return await db("users")
    .select("*")
    .then((result) => {
        return result;
    })
    .catch((error) => {
        return error;
    })
}