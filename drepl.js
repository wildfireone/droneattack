var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var ioHook = require('iohook');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    switch( key.name) {
        case "up" : goForward(); break;
        case "down" : goBack(); break;
        case "left" : goAnti(); break;
        case "right" : goClock(); break;
        case "a": goUp(); break;
        case "z": goDown(); break;
        case "q": takeoff(); break;
        case "w": land(); break;
        default: console.log(key.name); break;
    }
  }
});

function goForward(){
    client.front(0.2);
}
function goBack(){
    client.back(0.2);
}
function goAnti(){
    client.counterClockwise(0.2);
}
function goClock(){
    client.clockwise(0.2);
}


function goUp(){
    client.up(0.2);
}
function goDown(){
    client.down(0.2);
}

function takeoff(){
    client.takeoff();
}
function land(){
    client.land();
}




  





