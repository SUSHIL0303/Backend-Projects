// const mongoose = require('mongoose');
const Product = require('../models/product.model.js');

//get single product
const getProduct = async (req,res)=>{
  try{
    const {id} = req.params;

    const products = await Product.findById(id);
    res.send(products);
  }
  catch(error){
    res.status(500).json({
      message:error
    });
  }
}

//get all the product
const getAllProducts = async (req,res)=>{

  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }
  catch(error){
    res.status(500).json({
      message:error
    });
  }
}

//update product
const updateProduct = async (req,res)=>{

  try{
    const {id} = req.params;


    const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product){
      res.status(404).json({
        message : "Product not found!"
      })
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  }
  catch(error){
    res.status(500).json({
      message:error
    });
  }
}

//delete product
const deleteProduct = async (req,res)=>{

  try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({
        message : "Product not found!"
      })
    }
    res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({
      message:error
    });
  }
}

//create product
const createProduct = async (req,res)=>{

  try{
    const product = await Product.create(req.body);
    res.send(product);
  }
  catch(error){
    res.status(500).json({
      message:error
    })
  }
  res.send(req.body);
}


module.exports = {
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct
}