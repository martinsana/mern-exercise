const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

mongoose.connect(`mongodb+srv://anapaula:mean123@cluster0-a0ykm.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser:true, useCreateIndex: true });  
const connection = mongoose.connection; 
 
connection.once('open', () => {
    console.log("MongoDB database connection established successfuly")
})

const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
 
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);    


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
}) 