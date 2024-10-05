const fs=require("fs")
fs.writeFile("messaage.txt","hello fron node js", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });



  fs.readFile("./messaage.txt", (err, data) => {
      if (err) throw err;
      console.log(data.toString());  // Convert buffer to string
  });
  