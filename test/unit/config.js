const {objectFTPReq} = require('ftp-cg-lib')
let properties = {...objectFTPReq};
properties.host = '34.226.105.135';
properties.username = 'ftpuser';
properties.secure = "false";
properties.port = 21;
properties.password = 'Cloudgen';

module.exports = properties;
