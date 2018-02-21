var Airport = function(){
  this.hangar = [];
  this.isStormy = function(){
    var chance = Math.floor((Math.random() * 10) + 1);
    if (chance < 3) {
      return true;
    } else {
      return false;
    }
  };
};

Airport.prototype.land = function(plane) {
  if (this.isStormy===true) {
    console.log("NO! NO LAND STORMY");
  } else {this.hangar.push(plane);};
};

Airport.prototype.takeoff = function(plane) {
  if (this.isStormy===true) {
    console.log("NO! NO TAKEOFF STORMY");
  } else {
      var index = this.hangar.indexOf(plane);
      if (index === -1) {
        console.log("NO! NO PLANE EXIST");
      } else {
        this.hangar.splice(index, 1);
      }
    }
  };

var airport = new Airport();
