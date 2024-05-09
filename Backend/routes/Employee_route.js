const Employee = require("../models/Employee");
// const mongoose = require("mongoose");
const router = require("express").Router();


router.route("/Add").post((req,res) => {

    const {
        RID,
        firstName,
        lastName,
        details,
        NIC,
        basicsal,
        tel,
        employee_type,
        email,
        address,
        city,
     
    } = req.body;

    const newEmployee = new Employee({
        RID,
        firstName,
        lastName,
        details,
        employee_type,
        NIC,
        basicsal,
        tel,
        email,
        address,
        city,
    });

    newEmployee.save()
        .then(()=>{
            res.json("New Employee Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error adding new employee");
        })   

});

router.route("/").get((req,res) => {
    Employee.find()
        .then((employees)=> {
            res.json(employees)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Employees");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        RID,
        firstName,
        lastName,
        details,
        NIC,
        basicsal,
        employee_type,
        tel,
        email,
        address,
        city
    } = req.body;

    const empid = req.params.id;

    const updateempolyee = new Employee({
        _id:empid,
        RID,
        firstName,
        lastName,
        details,
        NIC,
        employee_type,
        basicsal,
        tel,
        email,
        address,
        city,
        _v:0
        

    });

    try{
        await Employee.findByIdAndUpdate(empid,updateempolyee);
        res.status(200).send({ status: "Employee Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update employee" });
    }

});

// router.route("/update/:id").put(async (req,res) =>{
//     const {
//         RID,
//         firstName,
//         lastName,
//         details,
//         tel,
//         email
//     } = req.body;

//     const empid = req.params.id;

//     const updateemp = {
//         RID,
//         firstName,
//         lastName,
//         details,
//         tel,
//         email,
//         _v: 0 // Assuming you meant "__v" here, not "_v"
//     };

//     try {
//         // Use $set to update only the specified fields
//         await Employer.findByIdAndUpdate(empid, { $set: updateemp });
//         res.status(200).send({ status: "Employer Updated" });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({ status: "Error with Update" });
//     }
// });


router.route("/delete/:id").delete(async(req,res)=>{
    const empid = req.params.id;

    await Employee.findByIdAndDelete(empid).then(()=>{
        res.status(200).send({status:"Employee Deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with employee deletion"})
    })
})

router.route("/get/:id").get(async(req,res) => {
    const empid = req.params.id;
    try{
        const employees = await Employee.find({_id:empid});
        res.status(200).send({ status: "Employees fetch", data: employees });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error Employees fetch" });
      }
})

module.exports = router;