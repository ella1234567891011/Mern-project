const Joi = require('joi');
const mongoose = require('mongoose');

const walmartSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    yourGoods: {
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    amount: {
        type:Number,
        required:true,
        
    },
    cards: {
        type:String,
        required:true,
        enum: ['Gift Card', 'Vanilla Card', 'Steam Card']
   
    },
    product: {
        type:String,
        required:true,
        minlength:5,
        maxlength:50
        },
});

const Walmart = mongoose.model('Walmart',walmartSchema);


function validateWalmart(walmart) {
   const schema = {
    fullName: Joi.string().min(5).required(),
     yourGoods: Joi.string().min(5).required(),
     amount: Joi.number().required(),
     cards: Joi.string().min(5).required(),
     product: Joi.string().min(5).required(),
   };

   return Joi.validate(walmart, schema);
}

exports.walmartSchema = walmartSchema;
exports.Walmart = Walmart;
exports.validate = validateWalmart;