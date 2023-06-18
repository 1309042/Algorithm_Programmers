process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let [x, y] = data.split(' ').map(Number);
    
    for (let i = 0; i < y; i++) {
        let line = '';
        for (let j = 0; j < x; j++) {
            line += '*';
        }
        console.log(line);
    }
});
