const {log} = require('utils-nxg-cg');
const {ftp,objectFTPOpt,objectFTPReq} = require('ftp-cg-lib');
const express = require('express');
const app = express();
app.use(express.json());
app.post('/', async(req, res)=>{
  let properties = {...objectFTPReq};  
  //Basic parameters for stablish connection with sftp server.  
  properties.host=req.body.host;
  properties.port=req.body.port;
  properties.username=req.body.username;
  properties.password=req.body.password;
  properties.path=req.body.path;
  properties.flag=req.body.flag;

  properties.file=req.body.file;
  properties.content=req.body.content;
  properties.nameFile=req.body.nameFile;
  properties.secure=req.body.secure;
  properties.encoding=req.body.encoding;
  properties.newName=req.body.newName;
  properties.localPath=req.body.localPath;

  try{
    log.info("Conectando");
    const result = await ftp({data:properties},{});
    log.info("resultado", result);
    res.json(result);
  }

  catch(err){
    log.info("err", err);
    res.status(500).json(err);
  }
})

app.listen(3000, ()=>{
  console.log("Server ejecutandose en el puerto 3000");
});