const five = require('johnny-five');

const app = require('../apps');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = normalizaPort(process.env.PORT || '3099');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    return false;
}

five.Board({
    port: "COM9"
}).on('ready', function () {
    console.log('ATP Breja Arduino esta OK, vamos que vamos...');
    io.on('connection', socket => {
        //var relay100A = new five.Relay(12);
        var relayB6 = new five.Relay(6);
        var relayB7 = new five.Relay(7);
        // var thermometer01 = new five.Thermometer({
        //   controller: 'DS18B20',
        //   pin: 2,
        //   freq: 1000
        // });

        // thermometer01.on("change", function () {
        //   io.emit('temperatura01', {
        //     temperatura: this.celsius,
        //     tempo: new Date()
        //   });
        //   console.log(new Date().toLocaleString() + ' - ' + this.celsius + '°C');
        // });

        //bomba liga/desliga
        socket.on('bomba01', (on) => {
            if (on) {
                console.log('R B6 BB On:' + on)
                relayB6.on();
            } else {
                console.log('R B6 BB Off:' + on)
                relayB6.off();
            }
        });

        socket.on('bomba02', (on) => {
            if (on) {
                console.log('R B7 BB On:' + on)
                relayB7.on();
            } else {
                console.log('R B7 BB Off:' + on)
                relayB7.off();
            }
        });
        // relay 100A liga/desliga
        // socket.on('relay100A', (on) => {
        //   if (on) {
        //     console.log('R 100A On:' + on)
        //     relay100A.on();
        //   } else {
        //     console.log('R 100A Off:' + on)
        //     relay100A.off();
        //   }
        // });

        socket.on('disconnect', function () {
            console.log('conexão fechada...');
        });

    });

});


http.listen(port, () => {
    console.log(`backend listening na porta ${port}`);
});