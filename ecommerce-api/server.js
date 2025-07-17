import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to Tiendida API");
});

app.listen(process.env.PORT, () => { 
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});