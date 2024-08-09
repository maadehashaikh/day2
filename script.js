const fs = require('fs');

// const { mkdir } = require('node:fs/promises');
// const { join } = require('node:path');

// async function makeDirectory() {
//   const projectFolder = join(__dirname, 'test');
//   const dirCreation = await mkdir(projectFolder , { recursive: true });
//   console.log(dirCreation);
//   return dirCreation;
// }
// makeDirectory().catch(console.error); 

// write file
// fs.writeFile("./test/project.txt","I am maadeha shaikh ! ", function(err){
//   if(err) console.log(err);
//   else console.log("done!");
// }
 //callback matlb function
// )
// append file

// fs.appendFile("newfile.txt","I love to read novels ! ",function(err){
//   if(err) console.log(err);
//   else console.log("done!");
// }
// )

// rename file
// fs.rename("newfile.txt","renameFile.txt",function(err){
//   if(err) console.log(err);
//   else console.log("Done");
// });

// Copy file 
// fs.copyFile("renameFile.txt","./copy/copy.txt",function(err){
//   if(err) console.log(err);
//   else console.log("Done");
// })

// Unlink (delete)
// fs.unlink("newfile.txt",function(err){
//   if(err) console.log(err);
//   else console.log("its deleted");
// });

// rmdir => remove directory like koi bh folder but us mai kuch na ho please

// fs.rmdir("./copy",{recursive:true},function(err){ 
  //use rm instead of rmdir kion kay woh file ko bh delte kardyta h 
//  if (err) console.log(err);
//  else console.log("removed");
// }) // => code error through kar rha h kay directory isn't empty bhaee 
// {recursive:true} lagany kay bad we can say kay 


// folder kaisy banta h & file and folder ko kaisy read karty hain (readfile)
// done 


// ---------------------------------------------------------------
// HTTPS & HTTP 
// protocol => rules (kaisy chezain hongi) internet p kuch bh karny kay liyay rules banany hain un kay through jinho ny internet bnaya h also  , yeh rules follow hon is kay liyay ap ky OS kay software mai yeh mojood hoty hain means pre install , internet kay p kam kay liay protocols banay gay hain 

// internet say data ana ya jana is using => HTTP and HTTPs

// const http = require('http');
// const server = http.createServer(function(req,res){
//   res.end("hello world !");
// })
// server.listen(3000);

