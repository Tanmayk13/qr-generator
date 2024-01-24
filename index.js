/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";

inquirer
  .prompt({ message: "Enter Your URL", name: "URL" })
  .then((answers) => {
    var Url = answers.URL;
    var qr_svg = qr.image(Url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("myqr.png"));

    fs.writeFile("sample.txt", Url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
