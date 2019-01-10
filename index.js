let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(function(trip){return trip.driverId === this.id}.bind(this));
  }
  passengers() {
    let trip;
    const trips = this.trips()
    for (trip in trips){
      return store.passengers.filter(function(passenger) {return passenger.tripId === this.id}.bind(trip))
    }
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(function(trip) {return trip.passengerId === this.id}.bind(this))
  }
  drivers(){
    let trip;
    let trips = this.trips();
    for (trip in trips){
    return store.drivers.filter(function(driver) {return driver.tripId === this.id}.bind(trip))
    }
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++driverId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  passenger() {
    const passId = this.passengerId
    return store.passengers.find(function(passenger){
      return passenger.id === passId;
    })
  }

  driver() {
    const drivId = this.driverId;
    return store.drivers.find(function(driver){
      return driver.id === drivId;;
    })
  }
}
