const studentModel = require('../models/studentModel');
const { validEmail, validPass, validPhone } = require('../src-validation/valid');

const createStudent = async function(req, res) {
    try {
        let student = req.body;
        let { fname, lname, email, password, mobile, address } = student;

        if (!fname || !lname || !email || !password || !mobile || !address) {
            return res.send({ message: "Please provide all Information!!" });
        }

        if (!validEmail(email)) {
            return res.send({ message: "Please enter a valid email" });
        }
        if (!validPass(password)) {
            return res.send({ message: "Please enter a valid password" });
        }
        if (!validPhone(mobile)) {
            return res.send({ message: "Please enter a valid phone" });
        }

        let uniqueEmail = await studentModel.findOne({ email });
        if (uniqueEmail) {
            return res.send({ message: "Email already exists" });
        }

        let uniquePhone = await studentModel.findOne({ mobile });
        if (uniquePhone) {
            return res.send({ message: "Phone already exists" });
        }

        let createStu = await studentModel.create(student);
        return res.send({ message: createStu });

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Internal server error" });
    }
}

module.exports.createStudent = createStudent;
