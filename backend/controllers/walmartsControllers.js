const { Walmart, validate } = require('../models/walmartModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllWalmart = catchAsync(async(req, res) => {
    const walmarts = await Walmart.find().sort('Amount');
    res.send(walmarts);
});

exports.createWalmart = catchAsync(async (req, res) => {
    const {error} = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   let walmart = new Walmart({
    fullName: req.body.fullName,
    yourGoods: req.body.yourGoods,
    amount: req.body.amount,
   cards:req.body.cards,
   product:req.body.product
});
 walmart = await walmart.save()

 res.send(walmart);
});

exports.getWalmartById = catchAsync(async (req, res) => {
    const walmart = await Walmart.findById(req.params.id);
    
    if (!walmart) return res.status(404).send('The walmart with the given ID was not found');
    
     res.send(walmart);
    });

 exports.updateWalmart = catchAsync(async (req, res) => {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const walmart = await Walmart.findByIdAndUpdate(
        req.params.id,
        {
      fullName: req.body.fullName,
      yourGoods: req.body.yourGoods,
       amount: req.body.amount,
       cards: req.body.cards,
       product: req.body.product
        },
        {
        new: true
        
        
    });
    if(!walmart) return res.status(404).send('The walmart with the given ID was not found');
     
    res.send(walmart);

   });
        
        
    
exports.deleteWalmart = catchAsync(async(req, res) => {
    const walmart = await Walmart.findByIdAndDelete(req.params.id);
    if(!walmart) return res.status(404).send('the walmart with the given ID was not found');

    res.send(walmart);
});
