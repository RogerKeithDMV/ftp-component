[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# ftp-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to open a connection to a ftp server in order to have access to store and get files. It also allows to create directories to store the files.

## Features

- Create a directory in a specific path.
- Delete the directory and their content.
- Delete a file in a specific path.
- Download the directory inside a ftp into an other location like a local machine.
- Get the content of a file, a specific encoding can be requested.
- Get the list of files and directories inside a specific path.
- Rename a file inside a path.
- Create a file inside the ftp server, the content of the file is going to be passed as a string characters that can have an specific encondig, the encoding type will be required.
- Take a directory for a different location like a local machine, and save the content inside a ftp server.

## Libraries

- [errorhandler-nxg-cg](https://www.npmjs.com/package/errorhandler-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [ftp-cg-lib](https://www.npmjs.com/package/ftp-cg-lib)

> For more detail of the functionality review **[ftp-cg-lib](https://github.com/CloudGenUser/ftp-cg-lib)** documentation

## Installation

Docker image: cloudgenuser/ftp-component:1.0.0

Functions
- trigger:
  - ftp_source
- action:
  - ftp

Fields:
- content: The string that containt the file that will be obtained from the ftp or the file that will be created. It can be s base64, utf8 or other enconding.
- encoding: The enconging that will be used to get the file, if this parameter is not sended base64 will be taken as default.
- file: The name of the file that will be deleted inside the ftp, the name of the file that will be renamed inside the ftp or the file that will be obtained or deleted inside the ftp.
- flag: : The string that contains the actinon to execute, can be one of this: CREATEDIRECTORY, DELETEDIRECTORY, DELETEFILE, DOWNLOADDIR, GETFILE, GETLISTFILES, RENAMEFILE, SAVEFILE, UPLOADDIR. The string is not case sensitive.
- host: The host where the process will connect, can be a url or ip.
- localPath: The path in the local machine that will be used to download a directory from the ftp or upload to the ftp. 
- newName: The new name of the file that will be used.
- password: This parameter contains the password that can stablish connection with the ftp.
- path: The full path where the process will create the directory in the ftp, delete a directory in the ftp, where a file in the ftp is (to delete, create, get or rename), the directory that will be downloaded from the ftp or the location that will be uploaded inside the ftp.
- port: The port where the process will access to the ftp server.
- secure: A boolean value that can be true or false.
- username: The username that have grants to connect with the ftp server.
