describe ('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("lands airplanes", function() {
    airport.land('plane');
    airport.land('another plane');
    expect(airport.hangar).toEqual(['plane', 'another plane']);
  });

  it("removes airplanes from the airport", function() {
    airport.land('plane');
    airport.land('another plane');
    spyOn(Math, 'random').and.returnValue(0.9);
    airport.takeoff('plane')
    expect(airport.hangar).toEqual(['another plane']);
  });

  it("doesn't allow planes to take off if stormy", function() {
    airport.land('plane');
    spyOn(Math, 'random').and.returnValue(0.1);
    airport.takeoff('plane');
    expect(airport.hangar).toEqual(['plane']);
  });

  it("doesn't allow planes to land if it's stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    airport.land('plane');
    expect(airport.hanger).not.toEqual(['plane']);
  });

});
