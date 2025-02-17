const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/mongo-cruddb`)
.then(()=> console.log('Database is Connected'))
.catch(()=> console.log('Database is not connected'));