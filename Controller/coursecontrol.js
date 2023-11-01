const studentModel = require('../models/studentModel');;

const createCourse = async function(req, res) {
    try {
        let course = req.body;
        let { Name,Duration,Code,Description} = student;

      



        let uniqueCode = await courseModel.findOne({ code });
        if (uniqueCode) {
            return res.send({ message: "codes already exists" });
        }

       
        let createCourse = await studentModel.create(course);
        return res.send({ message: createCourse });

    } catch (err) {
        console.log(err);
        
    }
}

module.exports.createStudent = createStudent;