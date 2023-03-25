const express =require('express');
const router = express.Router()
const show_file_controller=require('../controllers/show_file_controller');
router.get('/:id',show_file_controller.show)
module.exports= router;