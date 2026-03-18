
const db = require('../config/db');

exports.getFoods = async(req,res)=>{
    const pool = await db();
    const result = await pool.request().query("SELECT * FROM foods");
    res.json(result.recordset);
};

exports.addFood = async(req,res)=>{
    const {food_name,calories,protein,lipid,carb} = req.body;
    const pool = await db();
    await pool.request()
    .input('food_name',food_name)
    .input('calories',calories)
    .input('protein',protein)
    .input('lipid',lipid)
    .input('carb',carb)
    .query(`INSERT INTO foods(food_name,calories,protein,lipid,carb)
            VALUES(@food_name,@calories,@protein,@lipid,@carb)`);
    res.json({message:"Food added"});
};
