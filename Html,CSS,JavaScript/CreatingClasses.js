class Car{
    constructor(speed,color){
this.speed = speed;
this.color = color;
console.log("The speed of car is ",speed);
console.log("The color of car is ",color);
    }
    tourbo(){
        console.log("Turbo on");
    }
}

var car1 = new Car(250,"Gray");
car1.tourbo();