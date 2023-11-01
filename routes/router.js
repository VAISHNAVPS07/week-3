// const express = require('express')

// const router = express.Router()

// router.get('/', (req,res)=>{
//     res.send("Router Method!!!")
// })

// module.exports = router;


const express = require('express')

const router = express.Router()

const { createStudent } = require('../Controller/studentcontroller')
const { createCourse}=require("../Controller/coursecontroller")

router.get('/', (req,res)=>{
    res.send("Router Method!!!")
})

router.post('/student', createStudent)
router.post('.course',createCourse)

module.exports = router;