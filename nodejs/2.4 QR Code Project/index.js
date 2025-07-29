import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
  {
    type: "input",
    name: "url",
    message: "Enter a URL:",
  }
])
.then(({ url }) => {
  // Generate QR image and save as PNG
  const qrImage = qr.image(url);
  qrImage.pipe(fs.createWriteStream("qr-code.png"));

  // Save the URL in a text file
  fs.writeFileSync("url.txt", url);

  console.log("✅ QR code and URL saved successfully!");
})
.catch(console.error);
