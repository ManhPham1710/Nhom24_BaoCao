const express = require('express');
const cors = require('cors');

const foodRoutes = require('./routes/foodRoutes');
const menuRoutes = require('./routes/menuRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');

const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send("School Meal Planner Backend Running");
});

app.use('/api/foods', foodRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/nutrition', nutritionRoutes);

const PORT = 5000;

connectDB().then(()=>{

    console.log("Connected to SQL Server");

    app.listen(PORT, ()=>{
        console.log(`Server running at http://localhost:${PORT}`);

        console.log("\nAPI Endpoints:");
        console.log("GET  /api/foods");
        console.log("GET  /api/menus");
        console.log("GET  /api/inventory");
        console.log("GET  /api/nutrition");
        console.log("GET  /api/purchase");
    });

});