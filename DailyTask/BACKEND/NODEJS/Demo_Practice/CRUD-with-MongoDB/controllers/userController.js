const userInfo = require('../models/userModel');

const signup = (req, res) => {
    res.render('signup', {message: 'Welcome to the signup page!'});
};

const userList = async (req, res) => {
    try {
        const allUsers = await userInfo.find();
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ status: "Error", message: "No Users record found" });
        }
        res.render('userlist', { users: allUsers });
    } catch (error) {
        return res.status(500).json({ status: "Error", message: "Unable to fetch users", error: error.message });
    }
};

const signupPost = async (req, res) => {

    try {
        const { first_name, last_name, user_name, email, password, address, contact_no } = req.body;

        if (!first_name || !last_name || !user_name || !email || !password || !address || !contact_no) {
            return res.status(400).json({ status: "Error", message: "All fields are required" });
        }

        const addUser = new userInfo(req.body);
        await addUser.save();
        // res.status(200).json({ status: 'Success', message: "User Saved Successfully", user: { id: addUser._id, name: addUser.first_name } });
        console.log("User Saved Successfully");
        res.redirect('/users/userlist');
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Unable to add user", error: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const user = await userInfo.findById(req.params.id);
        return res.render('edituser', { user });
    } catch (error) {
        return res.status(500).json({ status: "Error", message: "Unable to fetch user", error: error.message });
    }

};


const editUserPost = async (req, res) => {
    try {
        const updateUser =  await userInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updateUser) {
            return res.status(404).render('error', { message: 'User not updated' });
        }
        res.redirect('/users/userlist');
    } catch (error) {
        return res.status(500).json({ status: "Error", message: "Unable to edit user", error: error.message });
    }
};

const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;
        const user  = await userInfo.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).render('error', { message: 'User not found' });
        }
        console.log('user data deleted');
        res.redirect('/users/userlist');
    } catch (error) {
        return res.status(500).json({ status: "Error", message: "Unable to delete user", error: error.message });
    }
};

module.exports = { signup, signupPost, userList, editUser, editUserPost, deleteuser };