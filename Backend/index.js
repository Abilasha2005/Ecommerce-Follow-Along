const express = require('express');
const connectDB = require('./src/Database/db');
const cors = require('cors');
const userrouter = require('./src/Controllers/user');
const productrouter = require('./src/Controllers/Products');
const profileRouter = require('./src/Controllers/profile');
const orderRouter = require('./src/Controllers/Order'); 
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())

require('dotenv').config({
    path: './src/config/.env'
});

const PORT = process.env.port || 5000;
const url = process.env.db_url;

app.use('/auth', userrouter);
app.listen(PORT, async () => {
    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.log(err);
    }
});

app.use('/auth', userrouter);
app.use('/product', productrouter);
app.use('/profile', profileRouter);
app.use('/order', orderRouter); // Updated to use 'orderRouter'

app.get('/', (req, res) => {
    res.send('Product Router');
});