const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 5000;
app.use(bodyParser.json());
const { validationResult } = require('express-validator');

// connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
    .then(() => console.log("Databases connected"))
    .catch(() => console.log('Databases is not connected'));

// define mongoose
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});
const Item = mongoose.model('Item', itemSchema);

app.post('/add-item', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error: error.message });
    }
});

app.get('/get-allitem', async (req, res) => {
    try {
        const getAllItem = await Item.find();
        if (getAllItem.length === 0) {
            res.status(200).json(getAllItem);
        }
        res.status(404).json({ message: 'Error getting item' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting all item', error: error.message });
    }
});

// get items by id
app.get('/items/:id', async (req, res) => {

    try {
        const getItem = await Item.findById(req.params.id);
        if (!getItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(getItem);
    } catch (error) {
        res.status(500).json({ message: 'Error getting item', error: error.message });
    }

});

app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not Found" });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Error updating item", error: error.message });
    }
});

app.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ message: "Error deleting item", error: error.message });
    }
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Server error', error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});