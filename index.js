const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

let courses = [
    { id: 1, name: "java" },
    { id: 2, name: "javascript" },
    { id: 3, name: "python" },
    { id: 4, name: "php"}
];

app.get('/courses',(req,res) => {
    res.json(courses);
});
app.post('/courses',(req,res)=>{
    console.log(req.body);
})

app.listen(3001, () => {
    console.log('Listening on port 3000');
});