[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# ftp-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to open a connection with a ftp server..

## Features

- Create a directory in an specific path.
- Delete the directory and their content.
- Delete a file in an specific path.
- Dowload the directory inside an ftp in a local machine.
- Get the content of a file, an specific enconding can be requested.
- Get the list of files and directgories inside a specific path.
- Rename a file inside a path.
- Create a file inside the ftp server, the content of the file is a string that can have an specific encondig, you have to specify the enconding.
- Take a directory for a local machine and save the content inside an ftp server.

## Libraries

- [msgbroker-nxg-cg](https://www.npmjs.com/package/msgbroker-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [ftp-cg-lib](https://www.npmjs.com/package/ftp-cg-lib)

> For more detail of the functionality review **ftp-cg-lib** documentation

## Installation

Docker image: cloudgenuser/ftp-component:1.0.0

Functions
- trigger:
  - ftp_source
- action:
  - ftp

Fields:
- content: The string that containt the file we will get from the ftp or the file we want to create. It can be s base64, utf8 or other enconding.
- encoding: The enconging that we want to use to get the file, if this parameter is not sended base64 will be taken as default.
- file: The name of the file that will be deleted inside the ftp, the name of the file we want to rename inside the ftp or the file we want to get or delete inside the ftp.
- flag: : The string that contains the actinon to execute, can be one of this: CREATEDIRECTORY, DELETEDIRECTORY, DELETEFILE, DOWNLOADDIR, GETFILE, GETLISTFILES, RENAMEFILE, SAVEFILE, UPLOADDIR. The string is not case sensitive.
- host: The host where you will connect, can be a url or ip.
- localPath: The path in out local machine we will use to download a directory from the ftp or upload to the ftp. 
- newName: The new name of the file we want.
- password: This parameter contains the password that can stablish connection with the ftp.
- path: The full path where you want to create the directory in the ftp, delete a directory in the ftp, where a file in the ftp is (to delete, create, get or rename), the directory we want to download from the ftp or the location where we want to upload inside the ftp.
- port: The port where you will access to the ftp server.
- secure: A boolean value that can be true or false.
- username: The username that have grants to connect with the ftp server.