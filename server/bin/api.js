const app = require('../apps');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = normalizaPort(process.env.PORT || '3099');

function normalizaPort (val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    return false;
}

http.listen(port, () => {
    console.log(`backend listening na porta ${port}`);
});