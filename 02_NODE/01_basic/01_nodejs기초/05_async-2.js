function displayA() {
    console.log('A');
}

function displayB(callback) {//callback : 작업 완료 후 실행할 함수
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}

function displayC() {
    console.log('C');
}

displayA();
displayB(displayC);