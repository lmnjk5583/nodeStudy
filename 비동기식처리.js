import fs from 'fs'

//동기

const a = fs.readFileSync('a.txt');
const b = fs.readFileSync('b.txt');
const c = fs.readFileSync('c.txt');

console.log(a,b,c);


// 비동기

const a= fs.readFile('./a.txt', (error, file) => { 
    console.log(file.toString());
const a= fs.readFile('./b.txt', (error, file) => { 
    console.log(file.toString());
const a= fs.readFile('./c.txt', (error, file) => { 
    console.log(file.toString());
});




// 비동기식2

import async from 'async'

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);}],

    (error, result) => {
        console.log(error, result.toString());
});