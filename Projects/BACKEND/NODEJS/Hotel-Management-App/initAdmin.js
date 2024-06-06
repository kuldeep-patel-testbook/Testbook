
const User = require('./models/Users');

const createAdminUser = async () => {
    try {
        
        // Check if an admin user already exists
        const adminUser = await User.findOne({ isAdmin: true });
        if (!adminUser) {
            // Create the admin user
            const admin = new User({
                username: "admin",
                email: "admin@admin.com",
                password: "admin@123",
                cpassword: "admin@123",
                phone: "9999999999",
                city: "admin city",
                state: "admin state",
                address: "admin address",
                role: 'admin',
                isAdmin: true
            });

            await admin.save();
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }

    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

module.exports = createAdminUser;
