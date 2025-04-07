const { MongoClient } = require('mongodb');

const runAggregation = async () => {

    const client = new MongoClient("mongodb://localhost:27017"); // Use your connection string
    await client.connect();

    const db = client.db("testdb");
    const sales = db.collection("sales");

    const result = await sales.aggregate([
        // Flatten the items array so each items becomes a separate documentrs.
        { $unwind: "$items" }, 
        {
            // add the custom fields month and itemRevenue.
            $addFields : {
                month : {
                    $dateToString: { format: "%Y-%m", date: "$date" }
                },
                itemRevenue : { $multiply : ["$items.quantity", "$items.price"] }
            }
        },
        {   
            // group by store and month to calculate totalRevenue and averagePrice
            $group: {
                _id : { store: "$store", month: "$month" },
                totalRevenue : { $sum: "$itemRevenue" },
                averagePrice : { $avg: "$items.price"}
            }
        },
        {   
            // So last format the final ouput with required fields and order
            $project : {
                _id : 0,
                store: "$_id.store",
                month: "$_id.month",
                totalRevenue: "$totalRevenue",
                averagePrice: "$averagePrice"
            }
        },
        // sort ouput first by store name and then by month
        { $sort: { store: 1, month: 1 } }
    ]).toArray();

    console.log(result);

    await client.close();

};

runAggregation();