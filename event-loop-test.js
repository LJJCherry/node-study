console.time('start')
setTimeout(() => {
    console.log(2)
}, 10)
setImmediate(() => {
    console.log(1)
})
new Promise((resolve) => {
    console.log(3)
    resolve();
    console.log(4)
}).then(() => {
    console.log(5)
    console.timeEnd('start')
})
console.log(6)
process.nextTick(() => {
    console.log(7)
})
console.log(8)

/*
输出结果：
3
4
6
8
7
5
start: 11.929ms
2
1
------------------
3
4
6
8
7
5
start: 9.098ms
1
2
*/
