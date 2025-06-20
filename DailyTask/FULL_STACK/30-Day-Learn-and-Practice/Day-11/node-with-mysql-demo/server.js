const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use(bodyParser.json());

app.use('/api', userRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

