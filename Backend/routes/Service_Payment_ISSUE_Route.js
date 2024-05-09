
const router = require("express").Router();
const Service_Payment = require("../models/Service_Payment_ISSUE");

router.route("/Add").post((req,res) => {

    const {
        ID,
        User_Type,
        Registered_ID,
        Service_Type,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        ISSUE
    } = req.body;

    const newService = new Service_Payment({
        ID,
        User_Type,
        Registered_ID,
        Service_Type,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        ISSUE
    });

    newService.save()
        .then(()=>{
            res.json("Service Payment Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error with Service Paymet Add");
        })   

});

router.route("/").get((req,res) => {
    Service_Payment.find()
        .then((service)=> {
            res.json(service)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Service Payment");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        ID,
        User_Type,
        Registered_ID,
        Service_Type,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        ISSUE
    } = req.body;

    const serviceid = req.params.id;

    const updateservice = new Service_Payment({
        _id:serviceid,
        ID,
        User_Type,
        Registered_ID,
        Service_Type,
        Vehicle_Type,
        Price,
        Date,
        Payment_Type,
        ISSUE,
        _v:0
    });

    try{
        await Service_Payment.findByIdAndUpdate(serviceid,updateservice);
        res.status(200).send({ status: "Service payment Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
    }

});

router.route("/delete/:id").delete(async(req,res)=>{
    const serviceid = req.params.id;

    await Service_Payment.findByIdAndDelete(serviceid).then(()=>{
        res.status(200).send({status:"Service Payment Delete"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete service payment"})
    })
})

router.route("/get").get(async(req,res) => {
    const serviceid = req.params.id;

    try{
        const serices = await Salary.find({_id:serviceid});
        res.status(200).send({ status: "Services fetch", data: serices });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with Service payment" });
      }
})

module.exports = router;
