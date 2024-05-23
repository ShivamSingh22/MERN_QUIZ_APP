import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions,{answers} from "../database/data.js"
//export all questions
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

//insert all questions
export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers}).then( function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    }catch (error) {
        res.json({ error })
    }
}

//delete all question
export async function dropQuestions(req, res){
    try {
         await Questions.deleteMany();
         res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
         res.json({ error })
    }
 }

//get all results
export async function getResult(req,res){
    try{
        const r=await Results.find()
        res.json(r)
    } catch(err){
        res.json({err});
    }
}

export async function storeResult(req,res){
    try{
       const {username, result, attempts, points, achieved}= req.body;
       if(!username && !result) throw new Error("Data Not Provided!")

       Results.create({ username, result, attempts, points, achieved })
       .then(data => {
           res.json({ msg: "Result Saved Successfully!" });
       })
       .catch(err => {
           res.status(500).json({ error: err.message });
       });
   
    }catch(err){
        res.json({err})
    }
}

export async function dropResult(req,res){
    try{
        await Results.deleteMany();
        res.json({msg: "Result Deleted Successfully"})
    }catch(err){
        res.json({err});
    }
}