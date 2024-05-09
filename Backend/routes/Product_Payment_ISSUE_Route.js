
const router = require("express").Router();
const Product_Payment = require("../models/Product_Payment_ISSUE");

router.route("/Add").post((req,res) => {

    const {
        ID,
        User_Type,
        Registered_ID,
        Product_Name,
        Product_ID,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        Count,
        ISSUE
    } = req.body;

    const newproduct = new Product_Payment({
        ID,
        User_Type,
        Registered_ID,
        Product_Name,
        Product_ID,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        Count,
        ISSUE
    });

    newproduct.save()
        .then(()=>{
            res.json("Product Payment Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error with Product Paymet Add");
        })   

});

router.route("/").get((req,res) => {
    Product_Payment.find()
        .then((products)=> {
            res.json(products)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Product Payment");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        ID,
        User_Type,
        Registered_ID,
        Product_Name,
        Product_ID,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        Count,
        ISSUE
    } = req.body;

    const productid = req.params.id;

    const updateproduct = new Product_Payment({
        _id:productid,
        ID,
        User_Type,
        Registered_ID,
        Product_Name,
        Product_ID,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        Count, 
        ISSUE,       
        _v:0

    });

    try{
        await Product_Payment.findByIdAndUpdate(productid,updateproduct);
        res.status(200).send({ status: "Product payment Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
    }

});

router.route("/delete/:id").delete(async(req,res)=>{
    const productid = req.params.id;

    await Product_Payment.findByIdAndDelete(productid).then(()=>{
        res.status(200).send({status:"Product Payment Delete"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete Product payment"})
    })
})

router.route("/get").get(async(req,res) => {
    const productid = req.params.id;
    try{
        const products = await Product_Payment.find({_id:productid});
        res.status(200).send({ status: "Products fetch", data: products });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with Products payment" });
      }
})

module.exports = router;
