
const db = require('../config/db');

exports.getInventory = async(req,res)=>{
    const pool = await db();
    const result = await pool.request().query("SELECT * FROM view_inventory_status");
    res.json(result.recordset);
};
