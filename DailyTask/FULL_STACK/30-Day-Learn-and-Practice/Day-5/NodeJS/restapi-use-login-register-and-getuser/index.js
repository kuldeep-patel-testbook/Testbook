const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/', userRoutes);


app.listen(PORT, () => {
    console.log(`Server runnig at http://localhost:${PORT}`);
});