const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const User = require('./models/Users');
const app = express();
const path = require('path');
const PORT = 3600;

//connect to DB
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getUser = async (req, res) => {
    try {
        const user = await User.find();
        console.log(`get api users data`);
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Server Error");
    }
};

const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOne({ id: id });
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Server Error at record by userid");
    }
};

const addUser = async (req, res) => {
    try {   
        const { first_name, last_name, email, gender, job_title } = req.body;
        const newUsers = new User({ first_name, last_name, email, gender, job_title });
        await newUsers.save();
        return res.status(200).json({ status: "Success", user: newUsers });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOneAndUpdate({ id: id }, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }
        res.status(200).json({ status: "success", user });
    } catch (error) {
        res.status(500).send("Server error at update record");
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOneAndDelete({ id: id });
        if(!user){
            return res.status(404).json( {error: "User not found"});
        }
        res.status(200).json({status: "Success", message:'deleted user done'});
    } catch (error) {
        res.status(500).send("Server error at delete record");
    }
};

// Routes
app.get('/', (req, res) => {
    //res.render("index");
    //res.send('<h1>Hey, it works!</h1>');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/users', getUser);
app.post('/api/users', addUser);
app.route('/api/users/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);
    

//listen server port
app.listen(PORT, () => {
    console.log(`server listening port at ${PORT}`);
});
