const mongoose = require("mongoose");
// const { type } = require("os");

const taskSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "please enter a valid task of type string"]
    },
    desc : {
        type : String,
        required : true
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;