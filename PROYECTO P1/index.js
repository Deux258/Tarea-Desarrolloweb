const app = require('./server');

app.get("/",(req,res)=>{
    //res.send("hello world");
    res.sendFile("D:/GITHUB/Tarea-Desarrolloweb/PROYECTO P1/index.html");
});

app.listen(app.get('port'),()=>{
    console.log("server iniciado en el puerto", app.get('port'));
});