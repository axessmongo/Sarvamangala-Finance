const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
// const Singlerouter =require("./route.js");

app.use(express.json());
app.use(cors());
// app.use(Singlerouter)

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
           
        });
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log('Server is listening on port ' + PORT);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code
    }
})();
