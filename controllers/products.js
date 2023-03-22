const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { name} = req.query;
    const queryObject = {};

    if(name) {
        queryObject.name = {$regex: name, $options:"i"};
    }
   
    const myData = await apiData;
    res.status(200).json({myData, nbHits: myData.length});
};


module.exports = {getAllProducts};