var cp = require('child_process');

n = cp.fork('./worker.js', ['1', '2']);

n.on('message', function(m){
    console.log('parent get msg', m);
})
n.send({hello: 'word'})
