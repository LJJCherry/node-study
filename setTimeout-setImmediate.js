setTimeout(() => {
    console.log('setTimeout')
}, 0)
setImmediate(()=> {
    console.log('setImmediate')
})
 // 代码的执行顺序是不一定的
 /*
 原因：setTimeout/setInterval的第二个参数的取值范围是：[1, 2^31-1], 如果超过这个范围，则会初始化
      为1；即setTimeout(fn, 0) === setTimeout(fn, 1)
      我们知道setTimeout的回调函数在timer阶段执行，setImmediate的回调函数在check阶段执行，
      event loop的开始会检查timer阶段，但是在开始之前到timer阶段会消耗一定时间；
      所以会出现两种情况：
      1、timer前的准备时间超过1ms，满足loop->timer >=1，则执行timer阶段（setTimeout）的回调函数
      2、timer前的准备时间小于1ms，则先执行check阶段（setImmediate）的回调函数，下一次的event loop
         执行timer阶段（setTimeout）的回调函数
 */