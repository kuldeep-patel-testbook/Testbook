const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud-with-react-node')
    .then(() => console.log('Database Connected Successfully'))
    .catch(() => console.log('Database Not Connected'));