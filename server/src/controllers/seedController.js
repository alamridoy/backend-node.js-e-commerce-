const User = require('../models/userModel');
const data = require('../data');

const seedUser = async (req, res, next) => {
    try {
       
        // await User.deleteMany({});

        // // Create new users
        // const insertUser = await User.insertMany(data.users);
        // console.log(insertUser);
        return res.status(201).json({ message: "Users seeded successfully", users: data.users });
    } catch (error) {
        // Handle any errors that occur during the seeding process
        console.error("Error seeding users:", error);
        return res.status(500).json({ error: "Failed to seed users" });
    }
};

module.exports = { seedUser };
