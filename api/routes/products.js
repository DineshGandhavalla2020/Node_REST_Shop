const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:"Handling routes to /products with GET"
    });
});

router.post('/', (req, res, next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price

    };
    res.status(201).json({
        message:"Handling routes to /products with POST",
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
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


router.patch('/:productId', (req, res, next) =>{
    res.status(200).json({
        message:"Product Updated!!!"
    });
});

router.delete('/:productId', (req, res, next) =>{
    res.status(200).json({
        message:"Deleted product!!!"
    });
});

module.exports = router;