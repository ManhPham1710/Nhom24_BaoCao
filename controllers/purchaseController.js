const db = require('../config/db');

exports.getPurchase = async (req,res)=>{

    try{

        const pool = await db();

        const result = await pool.request().query(
            "SELECT * FROM view_purchase_list"
        );

        res.json(result.recordset);

    }catch(err){

        console.log(err);
        res.status(500).json({error:"Server error"});

    }

}