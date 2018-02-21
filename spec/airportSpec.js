describe ('Airport', function() {

  describe ('Airplanes when is not stormy', function(){

      var airport;
      beforeEach(function() {
          airport = new Airport();
      });

    it("lands airplanes", function() {
      airport.land('plane');
      airport.land('another plane');
      expect(airport.hangar).toEqual(['plane', 'another plane']);
    });
  });

  it("removes airplanes from the airport", function() {
    airport.land('plane');
    airport.land('another plane');
    console.log(airport.hangar);
    airport.takeoff('plane');
    console.log(airport.hangar);
    expect(airport.hangar).toEqual(['another plane']);
    console.log(airport.hangar)
  });

  it("doesn't allow planes to take off if stormy", function() {
    airport.land('plane');
    console.log(airport.hangar);
    // land when not stormy and then try to take off when stormy
    airport.takeoff('plane');
    expect(airport.hangar).toEqual(['plane']);
    console.log(airport.hangar)
  });

  it("doesn't allow planes to land if it's stormy", function() {
    console.log(airport.hangar);
    spyOn(Math, 'random').and.returnValue(0);
    airport.land('plane');
    expect(airport.hangar).not.toEqual(['plane']);
  });

});
