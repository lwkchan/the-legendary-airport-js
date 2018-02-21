describe ('Airport', function() {

  describe ('When airport is not stormy', function(){

      var airport;
      var plane;
      var another_plane;
      var loner_plane;

      beforeEach(function() {
          airport = new Airport();
          plane = jasmine.createSpy('plane')
          another_plane = jasmine.createSpy('another_plane')
      });

    it("lands airplanes", function() {
      spyOn(Math, 'random').and.returnValue(5);
      airport.land(plane);
      airport.land(another_plane);
      expect(airport.hangar).toEqual([plane, another_plane]);
    });

    it("removes airplanes from the airport", function() {
      spyOn(Math, 'random').and.returnValue(5);
      airport.land(plane);
      airport.land(another_plane);
      airport.takeoff(plane);
      expect(airport.hangar).toEqual([another_plane]);
    });
  });

  describe ('When airport is stormy', function(){

      var airport;
      var plane;

      beforeEach(function() {
          airport = new Airport();
          plane = jasmine.createSpy(plane)
      });

    it("doesn't allow planes to take off if stormy", function() {
      spyOn(Math, 'random').and.returnValues(5, 0);
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar).toEqual([plane]);
    });

    it("doesn't allow planes to land if it's stormy", function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport.land(plane);
      expect(airport.hangar).not.toEqual([plane]);
    });
  });

  describe ('When airport is full', function() {

      var airport;
      var plane;
      var loner_plane;

      beforeEach(function() {
          airport = new Airport();
          plane = jasmine.createSpy(plane);
          loner_plane = jasmine.createSpy('loner_plane')
      });

     it("doesn't allow plane to land", function() {
      spyOn(Math, 'random').and.returnValue(5);
      for (i = 1; i <= 5; i++) {
          airport.land(plane);
      }
      expect(airport.hangar.length).toBe(5);
      expect(function(){airport.land(loner_plane)}).toThrowError("Hangar is full");
     });
  });
});
