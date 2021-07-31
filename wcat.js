let fs = require("fs");

//input handling
let inputArr = process.argv.slice(2);

//options and contents
let options = [];
let fileArr = [];
for (let i = 0; i < inputArr.length; i++) {
  let fch = inputArr[i].charAt(0);
  if (fch == "-") {
    options.push(inputArr[i]);
  } else {
    fileArr.push(inputArr[i]);
  }
}

let isSpresent = options.includes("-s");
let isNpresent = options.includes("-n");
let isBpresent = options.includes("-b");

//for mutually commmand

if (isBpresent == true && isSpresent == true && isNpresent == true) {
  if (options[0].includes("-b")) {

    forb();
    return;
  }
  else if (options[0].includes("-n")) {
    forn();
    return;
  }
  else if (options[0].includes("-s")) {
    fors();
    return;
  }
  
}


 if (options[0].includes("-b")) {
   forb();
   return;
 } else if (options[0].includes("-n")) {
   forn();
   return;
 } else if (options[0].includes("-s")) {
   fors();
   return;
 }


//functions for b command



function forb() {
  let contentb = "";
  for (let i = 0; i < fileArr.length; i++) {
    let ans = fs.existsSync(fileArr[i]);
    if (ans == false) {
      console.log("File does not exist");
    } else {
      let filecontentb = fs.readFileSync(fileArr[i]);
      contentb += filecontentb + "\r\n";
    }
  }
  

  let arrOfContentb = contentb.split("\r\n");
  let isBpresent = options.includes("-b");
  let countb = "1";
  let newarrb = [];
  if (isBpresent == true) {
    for (let i = 0; i < arrOfContentb.length; i++) {
      if (arrOfContentb[i] != "") {
        let addnob = countb;
        let addstringb = "" + addnob + " " + arrOfContentb[i];
        newarrb.push(addstringb);
        countb++;
      } else {
        newarrb.push(arrOfContentb[i]);
      }

      console.log(newarrb[i]);
    }
  }
}






//for s command





function fors() {
  let content = "";
  for (let i = 0; i < fileArr.length; i++) {
    let ans = fs.existsSync(fileArr[i]);
    if (ans == false) {
      console.log("File does not exist");
    } else {
      let filecontent = fs.readFileSync(fileArr[i]);
      content += filecontent + "\r\n";
    }
  }
 

  let arrOfContent = content.split("\r\n");
  


  if (isSpresent == true) {
    for (let i = 1; i < arrOfContent.length; i++) {
      if (arrOfContent[i] == "" && arrOfContent[i - 1] == "") {
        arrOfContent[i] = null;
      } else if (arrOfContent[i] == "" && arrOfContent[i - 1] == null) {
        arrOfContent[i] = null;
      }
    }
    let tempContent = [];
    for (let i = 0; i < arrOfContent.length; i++) {
      if (arrOfContent[i] != null) {
        tempContent.push(arrOfContent[i]);
      }
    }
    arrOfContent = tempContent;
    let newContent = arrOfContent.join("\n");
    console.log(newContent);
  }
}


////n command 







function forn() {
  let content1 = "";
  for (let i = 0; i < fileArr.length; i++) {
    let ans = fs.existsSync(fileArr[i]);
    if (ans == false) {
      console.log("File does not exist");
    } else {
      let filecontent1 = fs.readFileSync(fileArr[i]);
      content1 += filecontent1 + "\r\n";
    }
  }
  

  let arrOfContent1 = content1.split("\r\n");


  let count = "1";
  let newarr = [];
  if (isNpresent == true) {
    for (let i = 0; i < arrOfContent1.length; i++) {
      let addno = count;
      let addstring = "" + count + " " + arrOfContent1[i];
      newarr.push(addstring);
      console.log(newarr[i]);
      count++;
    }
  
  }
}


