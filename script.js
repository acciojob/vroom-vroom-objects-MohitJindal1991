// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}

function getMakeModel(){
	return `${make} ${model}`;
}

Car.prototype.getTopSpeed=function(){
	return topSpeed;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed=topSpeed;
}

function getTopSpeed(){
	return topSpeed;
}

SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;
SportsCar.prototype.getTopSpeed=getTopSpeed;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
