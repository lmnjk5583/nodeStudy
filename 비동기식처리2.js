import fs from 'fs'


//동기식 처리
const a=fs.writeFileSync('my.txt', '안녕하세요\n 하하 hi');

console.log('완료')


// 비동기식 처리

fs.writeFile('my2.txt', '안녕\n 하하', (error) => {
    console.log('완료1', error)
});
console.log('완료2')



// 비동기식 예외 처리

// try문
try{
    fs.readFile('./textfile.txt', (error, file) => {
        //console.log(file);
        console.log(file.toString());
    })
} catch (error) {
    console.log("파일 없음");
}

// if문
fs.readFile('./textfile.txt', (error, file) => {
    if (error){
        console.log('문제 발생');
    } else {
        console.log(file.toString());
    }
});


// 예외시 조기 리턴
fs.readFile('./textfile2.txt', (error, file) => {
    if (error){
        console.log('문제 발생');
        return
    } else {
        console.log(file.toString());
    }
});