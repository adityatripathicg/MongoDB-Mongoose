const mongoose = require('mongoose');
//Building connection using mongoose
main()
.then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        maxLength : 20,
    },
    author:{
        type: String,
    },
    discount : {
        type : Number,
        default: 0,
    },
    category : {
        enum : ["Fiction", "Non-Fiction"],
    },
    genre : [String],
    price: {
        type :Number,
        min : [1, "Price is too low for Amazon Selling"],
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"Mathematics 3",
    author :"CG",
    price: 1200,
});
book1.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{console.log(err)});