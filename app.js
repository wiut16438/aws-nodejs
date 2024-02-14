const express = require("express")

const app = express();

app.use(express.json())

const port = 3000;

app.get("/", (req, res) => {
    res.status(200).json({message:'Hello World'})
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})