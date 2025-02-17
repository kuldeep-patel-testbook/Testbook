const userInfo = require('../models/userModel');

const getUser = async (req, res) => {
    try {
        const users = await userInfo.find();
        if(!users || users.length === 0) {
            return res.status(404).json({ status: "Error", message: "No Users record found"});
        }
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ status: 'Error', message: 'unable to fetch users', errors: error.message });
    }
};

const addUser = async (req, res) => {
    try {
        const { first_name, last_name, user_name, email, password, address, contact_no } = req.body;

        if (!first_name || !last_name || !user_name || !email || !password || !address || !contact_no) {
            res.status(400).json({ status: 'Error', message: 'All fields are required' });
        }

        const createUser = new userInfo(req.body);
        await createUser.save();

        console.log('users created');
        return res.status(201).json({ status: 'Success', message: 'user created success', user: createUser });
    } catch (error) {
        return res.status(500).json({ status: 'Error', message: 'user creating error', error: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const updateUser = await userInfo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateUser) {
            return res.status(404).json({status:'Error', message: 'User not found'});
        }
        res.status(200).json({ status: "Success", message: "User updated successfully", user: updateUser });
        // res.redirect('/');
    } catch (error) {
        return res.status(500).json({status: 'Error', message: 'Unable to update user', error:error.message});
    }
};


const deleteUser = async (req, res) => {
    try {
        const delUser = await userInfo.findByIdAndDelete(req.params.id);
        if(!delUser){
            return res.status(404).render('error', { message: 'User not found'});
        }
        // res.status(201).render('/');
        return res.status(200).json({ status: 'Success', message: 'user deleted success', delUser });
    } catch (error) {
        return res.status(500).json({status: 'Error', message: 'Unable to delete user', error: error.message});
    }
}
module.exports = { getUser, addUser, editUser, deleteUser};