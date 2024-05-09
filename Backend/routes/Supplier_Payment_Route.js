

const router = require("express").Router();
const { models } = require("mongoose");
const SupplierPayment = require("../models/Supplier_Payment");

router.route("/Add").post((req,res) => {

    const {
        Company_ID,
        Company_Name,
        Product_ID,
        Product_Name,
        Date,
        Stock_count,
        Stock_Price,
        Vehicle_Type,
        Description
    }= req.body;

    const newsupplierpayment = new SupplierPayment({
        Company_ID,
        Company_Name,
        Product_ID,
        Product_Name,
        Date,
        Stock_count,
        Stock_Price,
        Vehicle_Type,
        Description
    });

    newsupplierpayment.save()
        .then(() => {
            res.json("Supplier Payment Added");
        }) .catch((err)=>{
            console.log(err);
            res.status(500).json("Error with Supplier Payment Add");
        })   

});

router.route("/").get((req,res) => {
    SupplierPayment.find()
        .then((payments) => {
            res.json(payments)
        })  .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Supplier Payment");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        Company_ID,
        Company_Name,
        Product_ID,
        Product_Name,
        Date,
        Stock_count,
        Stock_Price,
        Vehicle_Type,
        Description
    }= req.body;

    const stockid = req.params.id;

    const updatesupplierpayment =new SupplierPayment({
        _id:stockid,
        Company_ID,
        Company_Name,
        Product_ID,
        Product_Name,
        Date,
        Stock_count,
        Stock_Price,
        Vehicle_Type,
        Description,
        _v:0
    });

    try{
        await SupplierPayment.findByIdAndUpdate(stockid,updatesupplierpayment);
        res.status(200).send({ status: "stock payment Updated" });

    } catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
    }

});

router.route("/delete/:id").delete(async(req,res) => {
    const stockid = req.params.id;

    await SupplierPayment.findByIdAndDelete(stockid).then(()=>{
        res.status(200).send({status:"supplier Payment Delete"}) 
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete supplier payment"})
    })

});

router.route("/get").get(async(req,res) => {
    const stockid = req.params.id;

    try{
        const suppayments = await SupplierPayment.find({_id:stockid});
        res.status(200).send({ status: "Booking fetch", data: suppayments });

    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with supplier payment" });
      }
})


module.exports = router;
