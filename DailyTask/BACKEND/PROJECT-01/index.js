const express = require("express");
const fs = require('fs');
const app = express();
const PORT = 3500;

const users = require("./MOCK_DATA.json");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const getUsers = (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
};

const getApiUsers = (req, res) => {
    return res.json(users);
};

const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
};

const updateUser = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if(user) {
        Object.assign(user, req.body);

        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 4));

        console.log(`User with ID ${id} updated successfully`);
        return res.json({ status: "success", user });
    } else {
        console.log(`User with ID ${id} not found`);
        return res.status(404).json({ error: "User not found" });
    }
};

const deleteUserById = (req, res)=> {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        users.splice(index, 1);

        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 4));
        console.log(`User with ID ${id} deleted successfully`);
        return res.json({ status: "success" });
    } else {
        console.log(`User with ID ${id} not found`);
        return res.status(404).json({ error: "User not Found" });
    }
};

const addUser = (req, res) => {
    console.log("Create a new User");
    const body = req.body;
    console.log("Body", body);
    users.push( {id: users.length + 1, ...body} );
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error, data) => {
        return res.json({ status: "success", id: users.length });
    });

};


app.get('/users', getUsers);  // get all users record normal html format

// Routes
app.get('/api/users', getApiUsers); // get all users record api json format
app.route('/api/users/:id')
    .get(getUserById) // get specific user details by id
    .patch(updateUser) // update record using patch
    .delete(deleteUserById); // delete user by Id

app.post('/api/users/', addUser); // add user

app.listen(PORT, () => {
    console.log(`server connectiong at port ${PORT}`);
});