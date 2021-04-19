const db = require("../Connection");

async function createTableUsers() {
    return await db.schema
        .createTable("users", (table) => {
            table.increments("id").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
            table.timestamp("create_at").defaultTo(db.fn.now());
            table.unique("email");
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.log(error));
}

createTableUsers().then((data) => {
    process.exit();
})