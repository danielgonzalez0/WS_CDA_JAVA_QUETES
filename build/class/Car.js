"use strict";
class Car {
    constructor(numGears, maxSpeed) {
        this.numGears = numGears;
        this.maxSpeed = maxSpeed;
        this.currentGear = 0;
        this.currentSpeed = 0;
        this.isPowerOn = false;
        this.isHandbrakeOn = true;
    }
    turnOn() {
        this.isPowerOn = true;
    }
    turnOff() {
        this.isPowerOn = false;
    }
    lowerHandbrake() {
        this.isHandbrakeOn = false;
    }
    raiseHandbrake() {
        this.isHandbrakeOn = true;
    }
    changeGear(gear) {
        this.currentGear = gear;
    }
    accelerate() {
        if (this.currentSpeed < this.maxSpeed) {
            this.currentSpeed += 5;
        }
    }
    decelerate() {
        if (this.currentSpeed > 0) {
            this.currentSpeed -= 5;
        }
    }
}
const myCar = new Car(5, 180);
// Mettre le contact
myCar.turnOn();
// Baisser le frein à main
myCar.lowerHandbrake();
// Passer la 1ère
myCar.changeGear(1);
// Accélérer
myCar.accelerate();
// etc.
// ...
console.log("-------------------");
console.log("apres démarrage", myCar);
console.log("-------------------");
myCar.decelerate();
myCar.changeGear(0);
myCar.raiseHandbrake();
myCar.turnOff();
console.log('-------------------');
console.log("apres arret", myCar);
console.log('-------------------');
