import express from "express";

const app = express();
import sum from "./sum.js"
const port = 8080;

app.listen(port, ()=>{
    console.log("server is Listening", port);
})

app.get("/home",(req,res)=>{
    res.json({
        "msg" : "Iam Root"
    });
})

// GET route
app.get("/sum/:a/:b", (req, res) => {
    const {a,b} = req.params;
    console.log(a,b);

    const result = sum(parseInt(a), parseInt(b));
    console.log(result);

    res.json({
        a: a,
        b: b,
        sum: result
    });
});