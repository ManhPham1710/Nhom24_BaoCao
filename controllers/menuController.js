
const db = require('../config/db');

exports.getMenus = async(req,res)=>{
    const pool = await db();
    const result = await pool.request().query("SELECT * FROM view_menu_list");
    res.json(result.recordset);
};

exports.addMenu = async(req,res)=>{
    const {menu_date,note} = req.body;
    const pool = await db();
    await pool.request()
    .input('menu_date',menu_date)
    .input('note',note)
    .query("INSERT INTO meal_menu(menu_date,note) VALUES(@menu_date,@note)");
    res.json({message:"Menu created"});
};
