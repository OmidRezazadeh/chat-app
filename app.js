const express =require( "express");
const app = express();
app.use(express.json());
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

const dotEnv  =require ("dotenv");
const connectDB = require('./config/db'); 
const router = require('./routes/auth');
const chatRouter = require('./routes/chat');
dotEnv.config({path: ".env"});

app.use('/api/v1/users', router);
app.use('/api/v1/chats', chatRouter);
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));