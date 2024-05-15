const Customer = require("../models/Customer");
// const mongoose = require("mongoose");
const router = require("express").Router();


router.route("/Add").post((req, res) => {

    const {
        firstName,
        lastName,

        tel,
        password,
        email,
        city,
        address,

    } = req.body;

    const newCustomer = new Customer({

        firstName,
        lastName,

        tel,
        password,
        email,
        city,
        address,

    });

    newCustomer.save()
        .then(() => {
            res.json("New Customer Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error adding new Customer");
        })

});

router.route("/").get((req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error fetching Customers");
        })
});

router.route("/update/:id").put(async (req, res) => {
    const {

        firstName,
        lastName,

        tel,
        password,
        email,
        city,
        address
    } = req.body;

    const cusid = req.params.id;

    const updatecus = new Customer({
        _id: cusid,
        firstName,
        lastName,

        tel,
        password,
        email,
        city,
        address,
        _v: 0


    });

    try {
        await Customer.findByIdAndUpdate(cusid, updatecus);
        res.status(200).send({ status: "Customer Updated" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with Update" });
    }

});



router.route("/delete/:id").delete(async (req, res) => {
    const cusid = req.params.id;

    await Customer.findByIdAndDelete(cusid).then(() => {
        res.status(200).send({ status: "Customer Deleted" })
    })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Customer deletion" })
        })
})


router.route("/get/:id").get(async (req, res) => {
    const cusid = req.params.id;
    try {
        const customers = await Customer.find({ email: cusid });
        res.status(200).send({ status: "Customer fetch", data: customers });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error Customer fetch" });
    }
})

router.post("/LOG", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Customer.findOne({ email, password });

        if (user) {
            // res.json("exist");
            res.json({ status: "exist" }); // Send position along with the response

        } else {
            res.json("notexist");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Error processing login");
    }
});


module.exports = router;