const express =require( "express");
const app = express();
app.use(express.json());
const { Server } = require("socket.io");
const dotEnv  =require ("dotenv");
const connectDB = require('./config/db'); 
const router = require('./routes/auth');
dotEnv.config({path: ".env"});

app.use('/api/v1/users', router);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));