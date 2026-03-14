const fs = require('fs'); // fs 모듈 가져오기

// 동기 방식
//let files = fs.readdirSync('./');
//console.log(files);

// './' : 현재위치를 가져오는 것

// 콜백 방식
//let files = fs.readdir('./', (err, files) => {
//  if (err) {
//    console.error(err);
//    return;
//  }

//  console.log(files);
//});

//promise 방식
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
