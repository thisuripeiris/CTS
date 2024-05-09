
const router = require("express").Router();
const Salary = require("../models/Product_Payment_Delete");

router.route("/Add").post((req,res) => {

    const {
        ID,
        Issue
    } = req.body;

    const newSalary = new Salary({
        ID,
        Issue
    });

    newSalary.save()
        .then(()=>{
            res.json("Employee Salary Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error with Salary Add");
        })   

});

router.route("/").get((req,res) => {
    Salary.find()
        .then((salary)=> {
            res.json(salary)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching salary");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        ID,
        Issue
    } = req.body;

    const salaryid = req.params.id;

    const updatesalary = new Salary({
        _id:salaryid,
        ID,
        Issue,
        _v:0
    });

    try{
        await Salary.findByIdAndUpdate(salaryid,updatesalary);
        res.status(200).send({ status: "Salary Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
    }

});

router.route("/delete/:id").delete(async(req,res)=>{
    let salaryid = req.params.id;

    await Salary.findByIdAndDelete(salaryid).then(()=>{
        res.status(200).send({status:"Salary Payment Delete"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete Salary"})
    })
})

router.route("/get").get(async(req,res) => {
    let salaryid = req.params.id;

    try{
        const slaries = await Salary.find({_id:salaryid});
        res.status(200).send({ status: "Booking fetch", data: slaries });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with Salary" });
      }
})

module.exports = router;