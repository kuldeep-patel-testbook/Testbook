const {MongoClient} = require('mongodb');

async function main() {
    // rest of the code
    //const uri = `mongodb+srv://kuldeep_testbook_new:Anaya3063@mongodbtestbook.ozhqdon.mongodb.net/`;
    const uri = `mongodb+srv://kuldeep_testbook_new:Anaya3063@mongodbtestbook.ozhqdon.mongodb.net/?retryWrites=true&w=majority&appName=MongoDbTestbook`;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        await listDatabases(client);
        console.log('Connected to MongoDB Atlas');


        // Insert Data
        await createData(client, { name: "KV P", email:"kvp@ntestbook.com", password:"123456" });
        //await createData(client);

        // find user data
        await findData(client, "KV Patel");
        
        // edit data
        await editData(client, "KV Patel", {email:"kvptl@test.com", password:"009007002" });

        // delete data
        await deleteData(client, "Kuldeep Patel");

        // Call the function to fetch data
        //await fetchData(client);
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

async function listDatabases(client) {
    dbList = await client.db().admin().listDatabases();
    console.log("Available Databases are: ");
    dbList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });

}

async function createData(client, newData) {
    const session = client.startSession();
    try {
        await session.withTransaction(async () => {
            const databases = client.db('sample_mflix');
            const collection = await databases.collection('users').insertOne(newData);
            console.log("New Data added :" + collection.insertedId);
        });
    } catch (error) {
        console.error('Error inserting data to MongoDB Atlas:', error);
    } finally {
        session.endSession(); // Ensure session is ended after use
    }
    //const result = databases.collection('users').insertOne(newData);
    
}

async function findData(client, name) {
    const databases = client.db('sample_mflix');
    const result = await databases.collection('users').findOne({ name: name });

    if(result) {
        console.log("Found a User " + result.name);
    } else {
        console.log("Not Found User");
    }
}

async function editData(client, name, updateData) {
    const databases = client.db('sample_mflix');
    const result = await databases.collection('users').updateOne({ name: name }, {$set: {updateData}});

    if(result) {
        console.log( `${result} This User update record like ${updateData}` );
    } else {
        console.log("Not Updated Data");
    }
}

async function deleteData(client, name) {
    const databases = client.db('sample_mflix');
    const result = await databases.collection('users').deleteOne({ name: name });

    if(result) {
        console.log( `This User delete record like ${name}` );
    } else {
        console.log("Not Deleted Data");
    }
}

async function fetchData(client) {
    const databases = client.db('sample_mflix');
    //const collection = databases.collection('comments');
    //const collection = databases.collection('users');
    const collection = databases.collection('theaters');

    const query = {};

    const cursor = collection.find(query);
    //const cursor = collection.find(query);

    await cursor.forEach(document => {
        console.log(document);
    });
}

main();



