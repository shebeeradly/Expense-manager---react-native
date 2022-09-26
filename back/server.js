const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json())

const url = process.env.ATLAS_URI;

mongoose.connect(url, {useNewUrlParser: true})
const connection = mongoose.connection

connection.once('open', () => {
    console.log('mongodb connected')
});

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server connected at http://192.168.1.47:${port}/user`)
})