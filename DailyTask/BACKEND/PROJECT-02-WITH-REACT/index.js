const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB');
const User = require('./models/User');
const app = express();
const PORT = 3700;

// connecDB
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log("User Found");
        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json({ status: error, message: "Get All Users not works" });
    }

};

const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOne({ id: id });
        console.log("User Found");
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ status: "error", message: "user details not found", error });
    }

};

const addUser = async (req, res) => {
    try {
        //const { first_name, last_name, email, gender, job_title } = req.body;
        const newUser = new User(req.body);
        await newUser.save();
        console.log("New User Created Successfully");
        return res.status(200).json({ status: "Success", message: "New User Created", user: newUser });

    } catch (error) {
        console.error("New User Not created", error);
        return res.status(500).json({ status: "Error", message: error });
    }

};

const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOneAndUpdate({ id: id }, req.body, { new: true });

        if(!user) {
            res.status(500).json({error: "User not found"});
        }
        console.log("User Updated Successfully");
        return res.status(200).json({ status: "Success", message: "User Updated Successfully", user });
    } catch (error) {
        console.error("User Not updated", error);
        return res.status(500).json({ error: "user not updated", error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOneAndDelete({ id: id });
        if (!user) {
            res.status(404).json({ error: "User not Found" });
        }
        console.log("User Deleted Successfully");
        return res.status(200).json({ status: "Success", message: "User Deleted" });
    } catch (error) {
        return res.status(500).json({ status: "Error", message: error });
    }

};


//Route
app.get('/', (req, res) => {
    res.send(`<h1>Node and React Connecting</h1>`);
});

app.route('/api/users')
    .get(getUsers)
    .post(addUser);

app.route('/api/users/:id')
    .get(getUserById)
    .delete(deleteUser)
    .patch(updateUser);

app.listen(PORT, () => {
    console.log(`Server connecting at port ${PORT}`);
});