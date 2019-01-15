const store = {drivers: [], passengers: [], trips: []}
class Driver{
  constructor(name){
    this.name = name
    this.id = store.drivers.length + 1
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }

  passengers(){
    const temp = this.trips()
    return temp.map(function (trip) {
      return trip.passenger()
    }.bind(this))
  }
}

class Passenger{
  constructor(name){
    this.name = name
    this.id = store.passengers.length + 1
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    )
  }

  drivers(){
    const temp = this.trips()
    return temp.map(function (trip) {
      return trip.driver()
    }.bind(this))
  }
}

class Trip{
  constructor(driver, passenger){
    this.id = store.trips.length + 1
    this.setDriver(driver)
    this.setPassenger(passenger)
    store.trips.push(this)
  }

  setDriver(driver) {
    this.driverId = driver.id
  }

  driver(){
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId
      }.bind(this)
    )
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  passenger(){
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }
}
