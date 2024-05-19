const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect('mongodb+srv://Invitado:N5UiryGQ2D9jmjOG@cluster0.wo38cx0.mongodb.net/onBoarding-Politecnico');
        console.log(
            "Database Connected: ",
            connect.connection.host, 
            connect.connection.name
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;