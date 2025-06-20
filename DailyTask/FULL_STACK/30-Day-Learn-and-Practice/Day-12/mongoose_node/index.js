const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/shop";
const mongoURI = "mongodb+srv://kuldeep3063:kuldeep123@cluster0.q8k8clz.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI);

// We need to create a schema
const productDemoSchema = new mongoose.Schema({
    name: String,
    description: String,
    brand: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years: Number,
    category: String,
    isFeatured: Boolean,
    available: Boolean
});

// we need to now create a model

const Product = new mongoose.model('Product', productDemoSchema);

const data1 = {
    name: 'IPhone 19',
    description: 'An apple phone new launch',
    brand: 'Apple',
    type: 'phone',
    price: 155000,
    rating: 4,
    warranty_years: 2,
    category: '2025 new launch smartphones',
    isFeatured: true,
    available: true
};

const main = async () => {
    try {

        // 1 ) Insert Data

        // await Product.create(data1);
        // console.log("Data Inserted");

        // 2 ) Update Data

        // const update = await Product.findOneAndUpdate(
        //     {name: 'IPhone 19', price: 155000},
        //     {$set: {price: 165000}}
        // );
        // console.log("update", update);
        
        // 3 ) Read Data
        const data = await Product.find({price: {$gt: 15000}});
        console.log(data);

        // 4 ) Delete Data
        const deleteque = await Product.findOneAndDelete(
            {name: 'IPhone 19', price: 165000},
        );
        console.log("delete", deleteque);


    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

main();

