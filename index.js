const mongoose = require('mongoose');
//Building connection using mongoose
main()
.then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//creating Schema in Mongoose
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
});


//creating model(collection) using mongoose
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);


//Inserting documents in collection
// const user1 = new User({
//     name:"CG",
//     email:"cg@gmail.com",
//     age:20,
// });
// user1.save();
// const user2 = new User({
//     name:"SCG",
//     email:"scg@gmail.com",
//     age:20,
// });
// user2.save().then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Inserting Multiple Documents using Mongoose
// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com", age : 69},
//     {name:"Peter",email:"peter@gmail.com", age : 39},
//     {name:"Bruce",email:"Bruce@gmail.com", age : 29},
// ]).then((res)=>console.log(res));

//Find in Mongoose
// User.find({}).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//find with condition age greater then 47
// User.find({ age: {$gt: 47}}).then((res)=>console.log(res[0].name))
// .catch((err)=>console.log(err));

//Find in Mongoose
// User.findOne({ age: {$gt: 47}}).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Find by ID
User.findById("65a4e28050edf96bff392aa2").then((res)=>console.log(res))
.catch((err)=>console.log(err));