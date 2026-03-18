const db = require('../config/db');

exports.getNutrition = async (req,res)=>{

    try{

        const pool = await db();

        const result = await pool.request().query(
            "SELECT * FROM view_total_nutrition"
        );

        res.json(result.recordset);

    }catch(err){

        console.log(err);
        res.status(500).json({error:"Server error"});

    }

}