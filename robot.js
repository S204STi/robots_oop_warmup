'use strict';

var Robot = function (startingCharge) {
	this.startingCharge = startingCharge;
	this.positionX = 0;
	this.positionY = 0;
	this.moveUp = function(){
		return this.positionY += 1;
	};
};

Robot.prototype.position = function() {
	console.log(this.positionX, this.positionY);
	return [this.positionX, this.positionY];
};

Robot.prototype.battery = function(){
	this.battery = this.startingCharge;
	console.log("battery",this.battery);
	return this.battery;
};



module.exports = Robot;
