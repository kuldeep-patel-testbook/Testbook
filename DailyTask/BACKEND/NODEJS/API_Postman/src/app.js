const express = require('express');
const app = express();
const PORT = 3200;
const CORS = require('cors');
app.use(CORS());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
const connectDB = require('./db/connection');
connectDB();

const medicineRecord = require('./models/medicine');

app.get('/', (req, res) => {
    res.send(`<h1>Welcome To Medicine Record World!</h1>`)
});

app.get('/medicinedata', async (req, res) => {
    try {
        const fetchData = await medicineRecord.find().sort({ "id": 1 });
        console.log("Medicine Data Fetch Successfully");
        res.status(201).json(fetchData);

    } catch (error) {
        console.log("Can not get medicine data", error);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

app.post('/medicines', async (req, res) => {
    try {
        const newMedicine = await medicineRecord.create(req.body);
        console.log("Medicine Data saved successfully");
        res.status(201).json(newMedicine);

    } catch (error) {
        console.log("Medicine Data saved error", error);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

app.get('/medicines/:id', async (req, res) => {
    try {
        const medicine = await medicineRecord.findOne({ id: req.params.id });
        return res.status(200).json(medicine)
    } catch (error) {
        res.status(500).send("Server Error at record by userid", error);
    }
});

app.put('/medicines/:id', async (req, res) => {
    try {
        const newData = req.body;
        const updateMedicine = await medicineRecord.findOneAndUpdate({id: req.params.id}, newData, {new: true} );
        if(!updateMedicine) {
             console.log(`Medicine not found`);
             return res.status(404).json({ error: "Medicine not found" });
        }
        console.log("Medicine Data updated successfully");
        res.status(201).json(updateMedicine);

    } catch (error) {
        console.log("Medicine Data update time save error", error);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

app.delete('/medicines/:id', async (req, res) => {
    try {
        const deleteMedicine = await medicineRecord.findOneAndDelete({ id: req.params.id });
        if(!deleteMedicine) {
            console.log(`Medicine not found`);
            return res.status(404).json({ error: "Medicine not found" });
       }
        return res.status(200).json(deleteMedicine)
    } catch (error) {
        res.status(500).send("Server Error at record delete by userid", error);
    }
});

app.listen(PORT, () => {
    console.log(`Server Connecting at ${PORT}`);
});