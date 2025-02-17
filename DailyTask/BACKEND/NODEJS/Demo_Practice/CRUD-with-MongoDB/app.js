const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3100;
require('./db/conn');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});
