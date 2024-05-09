const router = require("express").Router();
const Employer = require("../models/Employer");

router.route("/Add").post((req,res) => {

    const {
        Employer_ID,
        Email,
        Password,
        Position
    } = req.body;

    const newEmployer = new Employer({
        Employer_ID,
        Email,
        Password,
        Position
    });

    newEmployer.save()
        .then(()=>{
            res.json("System account Added");
        }) 
        .catch((err)=>{
            console.log(err);
            res.status(500).json("Error with System Add");
        })

});


router.route("/").get((req,res) => {
    Employer.find()
        .then((employers)=> {
            res.json(employers)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Employers");
        })
});

router.route("/update/:id").put(async (req,res) =>{
    const {
        Employer_ID,
        Email,
        Password,
        Position
    } = req.body;

    const empid = req.params.id;

    const updateempolyer = new Employer({
        _id:empid,
        Employer_ID,
        Email,
        Password,
        Position,
        _v:0
        

    });

    try{
        await Employer.findByIdAndUpdate(empid,updateempolyer);
        res.status(200).send({ status: "Employer Updated" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "Error with Update employer" });
    }

});


router.route("/delete/:id").delete(async(req,res)=>{
    const empid = req.params.id;

    await Employer.findByIdAndDelete(empid).then(()=>{
        res.status(200).send({status:"Employer Deleted"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with employer deletion"})
    })
})

router.route("/get/:id").get(async(req,res) => {
    const empid = req.params.id;
    try{
        const employers = await Employer.find({_id:empid});
        res.status(200).send({ status: "Employers fetch", data: employers });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error Employers fetch" });
      }
})

router.post("/LOG", async (req, res) => {
    const { Email, Password } = req.body;
    
    try {
        const user = await Salary.findOne({ Email, Password });

        if (user) {
           // res.json("exist");
           res.json({ status: "exist", position: user.Position }); // Send position along with the response

        } else {
            res.json("notexist");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Error processing login");
    }
});



module.exports = router;