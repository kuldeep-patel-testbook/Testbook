const express = require('express');
const app = express();
const PORT = 3000;
const expressFileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
app.use(expressFileUpload());

const uploadDir = path.join(__dirname, 'uploads');
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html');
});


app.post('/uploads', (req, res) => {
    if(req.files) {
        let file = req.files.file
        console.log(file);
        let filename= file.name;
        console.log(filename);
        
        file.mv(uploadDir+'/'+filename, function (err) {

            if(err) {
                res.send(err.message);
            } else {
                res.send("File has been uploaded");
            }
        });

    }
});

app.listen(PORT, ()=> {
console.log(`Server connecting at ${PORT}`);
});