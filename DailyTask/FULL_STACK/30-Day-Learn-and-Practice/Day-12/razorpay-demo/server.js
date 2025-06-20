const express = require('express');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});


app.post('/create-order', async(req, res) => {
    const { amount } = req.body;

    try {
        const options = {
            amount: amount * 100, // Razorpay takes amount in paisa
            currency: "INR",
            receipt: "receipt#" + Date.now(),
        };

        const order = await razorpay.orders.create(options);
        res.json(order);

    } catch (error) {
        console.error('error creating order', error);
        res.status(500).send('Something went wrong');
    }
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`server connecting at http://localhost:${PORT}`);
});