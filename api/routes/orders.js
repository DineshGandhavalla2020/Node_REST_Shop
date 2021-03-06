const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:"orders fetched"
    });
});

router.post('/', (req, res, next) =>{
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    };
    res.status(201).json({
        message:"order created",
        order: order
    });
});

router.get('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    if(id === 'special'){
        res.status(200).json({
            message : "ID is special Id ",
            id: id
        });
    }
    else{
        res.status(200).json({
            message : "this is different Id",
            id: id
        });
    }
});


router.patch('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message:"order Updated!!!"
    });
});

router.delete('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message:"Deleted orders!!!"
    });
});

module.exports = router;