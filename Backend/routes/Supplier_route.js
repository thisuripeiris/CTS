const Supplier = require("../models/Supplier");
// const mongoose = require("mongoose");
const router = require("express").Router();


router.route("/Add").post((req,res) => {

    const {
        SID,
        companyName,
        companyid,
        address,
        city,
        country,
        item,
        tel,
        email,
     
    } = req.body;

    const newSupplier = new Supplier({
        
        SID,
        companyName,
        companyid,
        address,
        city,
        country,
        item,
        tel,
        email,
    });

    newSupplier.save()
        .then(()=>{
            res.json("New Supplier Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error adding new Supplier");
        })   

});

router.route("/").get((req,res) => {
    Supplier.find()
        .then((suppliers)=> {
            res.json(suppliers)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Suppliers");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        SID,
        companyName,
        companyid,
        address,
        city,
        country,
        item,
        tel,
        email
    } = req.body;

    const supid = req.params.id;

    const updatesup= new Supplier({
        _id:supid,
        SID,
        companyName,
        companyid,
        address,
        city,
        country,
        item,
        tel,
        email,
        _v:0
        

    });

    try{
        await Supplier.findByIdAndUpdate(supid,updatesup);
        res.status(200).send({ status: "Supplier Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
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
    const supid = req.params.id;

    await Supplier.findByIdAndDelete(supid).then(()=>{
        res.status(200).send({status:"Supplier Deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Supplier deletion"})
    })
})

router.route("/get/:id").get(async(req,res) => {
    const supid = req.params.id;
    try{
        const suppliers = await Supplier.find({_id:supid});
        res.status(200).send({ status: "Supplier fetch", data: suppliers });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error Supplier fetch" });
      }
})

module.exports = router;