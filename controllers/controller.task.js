
const { set } = require("mongoose");
const Task = require("../models/task.model.js");

const methods = {
    getTask : async (req,res)=>{
        try{
            const {name} = req.params ;
            const task = await Task.find({name : name});
            res.status(200).render('HomeTask',{task:task});
            // console.log(task);
        }catch (err) {
            res.status(500).json({message : err.message}); 
        }
    },
    getTasks : async (req,res)=>{
        try{
            
            const tasks = await Task.find({})
            console.log(tasks);
            res.status(200).render('HomeTasks',{tasks:tasks})
            
        }catch (err) {
            res.status(500).json({message : err.message}); 
        }
    },
    postTask : async (req,res)=>{
        try{
            let name = req.body.newTask;
            let desc = req.body.newTask_desc;
            const task = await Task.create({name : name, desc : desc});
            await task.save();
            res.status(200).redirect("/api/tasks");
        }catch (err){
            res.status(500).json({message : err.message});
        }
    },
    deleteTask : async (req,res)=>{
          try {
              const {name} = req.params;
              const task = await Task.deleteOne({name:name});
            //   const task = await Task.findByIdAndDelete(tas._id);
              
              
              res.status(200).redirect("/api/tasks/");
          } catch (error) {
            res.status(500).json({message : error.message});
          }
    }

}

module.exports = methods