var carType = require('./car')

var yellowCar = new carType('yellow', 0)

console.log('yellowCar speed is ' + yellowCar.speed)

console.log('yellowCar speed after acceleration is ' + yellowCar.accelerate(40));

console.log('yellowCar speed after deceleration is ' + yellowCar.decelerate(20));

console.log('When yellowCar stops, the speed is ' + yellowCar.stop);
