var Airport = function(){
  this.hangar = [];
};

Airport.prototype.isStormy = function(){
    var chance = Math.floor((Math.random() * 10) + 1);
    if (chance < 3) {
      console.log("It's stormy");

        return true;
    } else {
      console.log("Not stormy");
        return false;
    }
};

Airport.prototype.land = function(plane) {
  if (this.isStormy()===true) {
    console.log("NO! NO LAND STORMY");
  } else {
    console.log("Plane has landed");
    this.hangar.push(plane);
  }
};

Airport.prototype.takeoff = function(plane) {
  if (this.isStormy()===true) {
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
