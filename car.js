var Carspecs = function(color, speed, convertible) {
  this.color = color;
  this.speed = 0;
  this.convertible = convertible;
  this.accelerate = function(rate) {
    return this.speed += rate
  };
  this.decelerate = function(rate) {
    return this.speed -= rate
  }
  this.stop = 0;
}

// var honda = new Carspecs('Honda', 'red', 0)
//
// console.log('I am a ' + honda.convertible + ', my current speed is ' + honda.speed +
//             ', my accelerated speed is ' + honda.accelerate(100) +
//             ', my decelerated speed is ' + honda.decelerate(20) )

module.exports = Carspecs
