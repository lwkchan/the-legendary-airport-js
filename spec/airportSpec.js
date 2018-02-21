describe ('Airport', function() {

  describe ('When airport is not stormy', function(){

      var airport;
      beforeEach(function() {
          airport = new Airport();
      });

    it("lands airplanes", function() {
      spyOn(Math, 'random').and.returnValue(5);
      airport.land('plane');
      airport.land('another plane');
      expect(airport.hangar).toEqual(['plane', 'another plane']);
    });

    it("removes airplanes from the airport", function() {
      spyOn(Math, 'random').and.returnValue(5);
      airport.land('plane');
      airport.land('another plane');
      airport.takeoff('plane');
      expect(airport.hangar).toEqual(['another plane']);
    });
  });

  describe ('When airport is stormy', function(){

      var airport;
      beforeEach(function() {
          airport = new Airport();
      });

    it("doesn't allow planes to take off if stormy", function() {
      spyOn(Math, 'random').and.returnValues(5, 0);
      airport.land('plane');
      console.log(airport.hangar);
      airport.takeoff('plane');
      expect(airport.hangar).toEqual(['plane']);
    });

    it("doesn't allow planes to land if it's stormy", function() {
      spyOn(Math, 'random').and.returnValue(0);
      airport.land('plane');
      expect(airport.hangar).not.toEqual(['plane']);
    });
  });

});
