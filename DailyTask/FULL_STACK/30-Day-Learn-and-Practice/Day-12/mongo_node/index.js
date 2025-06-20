const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

const data1 = {
    title: 'One Plus 16S',
    description: 'An oneplus phone new launch',
    price: 59000,
    category: '2025 new launch smartphones',
};

const main = async () => {
    await client.connect();
    const db = client.db('shop');
    const collection = db.collection("products");
    await collection.insertOne(data1);
    const data = await collection.find({price: {$gt:12}}).toArray();
    console.log(data);
    return "done";
};

main()
    .then(console.log())
    .catch((e) => console.log(e))
    .finally((e) =>  client.close(e));