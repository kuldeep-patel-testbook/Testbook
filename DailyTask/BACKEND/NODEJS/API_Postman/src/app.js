const express = require('express');

const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3200;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const medicineRecord = require('./models/medicine');

require('./db/connection');

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('<h1>Welcome to API Creation of Medicines</h1>');
    //res.sendFile(path.join(__dirname, '../medicine.html'));
});

app.get('/medicinedata', async(req, res) => {
    try {
        const medData = await medicineRecord.find().sort({"_id":1});
        res.status(201).json(medData);
    } catch (error) {
        console.log(error);
    }
});


app.post('/medicines', async(req, res) => {
try {
    const newMedicine = await medicineRecord.create(req.body);
    res.status(201).json(newMedicine);
} catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server error'});
}
});

app.put('/medicine/:id', async (req, res) => {
    const id = req.params.id;
    //name = req.params.name;
    const newData = req.body;

    console.log("Receive update request for", id);
    console.log("Data to update:", newData);

    try {
        const updateRecord = await medicineRecord.findOneAndUpdate( { id: id }, newData, {new: true});
        if(!updateRecord) {
            console.log("Medicine not Found!");
            return res.status(404).json({ error: "Medicine not found" });
        }
        console.log("update successfully", updateRecord);
        res.status(200).json(updateRecord);
    } catch (error) {
        console.error("Error updateing medicine", error);
        res.status(500).json({ error : "Intenal server error"});
    }
});

app.delete('/medicine/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deleteMedicine = await medicineRecord.findOneAndDelete({ id: id });
        if(!deleteMedicine) {
            return res.status(404).json({error: "Medicine not Found"})
        }
        return res.status(202).json(deleteMedicine);
    } catch (error) {
        return res.status(500).json({error: "Internal Server error"});
    }
});


app.listen(PORT, ()=>{
    try {
        console.log(`connecting port listerning at ${PORT}`);
    } catch (error) {
        console.log(`not connecting port listerning at ${PORT}`);
    }
    
});