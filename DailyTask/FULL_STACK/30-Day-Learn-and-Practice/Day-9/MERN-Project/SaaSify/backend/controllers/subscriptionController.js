const Subscription = require('../models/Subscription');

const getSubscriptions = async (req, res) => {
    const userId = req.user;
    const subs = await Subscription.find({ userId });
    res.json(subs);
};

const addSubscription = async (req, res) => {
    const { name, price, renewalDate } = req.body;
    const userId = req.user;
    try {
        const sub = await Subscription.create({ name, price, renewalDate, userId });
        res.status(201).json(sub);
    } catch (error) {
        res.status(400).json({ message: "Failed to create subscription" });
    }
};

const updateSubscription = async (req, res) => {
    const { id } = req.params;
    const userId = req.user;
    const { name, price, renewalDate } = req.body;
    try {
        const sub = await Subscription.findOneAndUpdate({ _id: id, userId }, { name, price, renewalDate }, { new: true });
        res.json(sub);
    } catch (error) {
        res.status(400).json({ message: "Failed to update subscription" });
    }
};

const deleteSubscription = async (req, res) => {
    const { id } = req.params;
    const userId = req.user;
    try {
        await Subscription.findByIdAndDelete({ _id: id, userId });
        res.json({ message: "Deleted" });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete subscription" });
    }
}


module.exports = { getSubscriptions, addSubscription, updateSubscription, deleteSubscription };