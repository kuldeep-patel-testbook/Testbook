const User = require('../models/user');

exports.addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await User.findById(req.user.id);

        const cartItem = user.cart.find(item => item.product == productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            user.cart.push({ product: productId });
        }

        await user.save();

        res.status(200).json({ status: 'ok', cart: user.cart });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
