class Car {
  private numGears: number;
  private maxSpeed: number;
  private currentGear: number;
  private currentSpeed: number;
  private isPowerOn: boolean;
  private isHandbrakeOn: boolean;

  constructor(numGears: number, maxSpeed: number) {
    this.numGears = numGears;
    this.maxSpeed = maxSpeed;
    this.currentGear = 0;
    this.currentSpeed = 0;
    this.isPowerOn = false;
    this.isHandbrakeOn = true;
  }

  public turnOn(): void {
    this.isPowerOn = true;
  }

  public turnOff(): void {
    this.isPowerOn = false;
  }

  public lowerHandbrake(): void {
    this.isHandbrakeOn = false;
  }

  public raiseHandbrake(): void {
    this.isHandbrakeOn = true;
  }

  public changeGear(gear:number): void {
    this.currentGear = gear;
  }

  public accelerate(): void {
    if (this.currentSpeed < this.maxSpeed) {
      this.currentSpeed += 5;
    }
  }

  public decelerate(): void {
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
console.log("apres démarrage",myCar);
console.log("-------------------");
myCar.decelerate();
myCar.changeGear(0);
myCar.raiseHandbrake();
myCar.turnOff();
console.log('-------------------');
console.log("apres arret", myCar);
console.log('-------------------');




