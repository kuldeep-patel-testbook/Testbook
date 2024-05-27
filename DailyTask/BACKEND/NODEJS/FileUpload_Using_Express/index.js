const express = require('express');
const app = express();
const upload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const PORT = 3003;

const uploadDir = path.join(__dirname, 'uploads');
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/', (req, res) => {
    console.log("Inside a Post");
    if(req.files) {
        let file = req.files.file;
        let filename = file.name;
        console.log(file);

        file.mv(uploadDir+'/'+filename, function(err) {
            if(err) {
                res.send(err.message);
            } else {
                res.send("File has been uploaded");
            }
        });
    }
});

app.listen(PORT, () => {

    try {
        console.log(`Server has been Stating at ${PORT}`);    
    } catch (error) {
        console.log(error);
    }
});

