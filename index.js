let store = {drivers: [], trips: [], passengers: []}


let driverId = 0
class Driver {
    constructor(name){
        this.name = name
        this.id = ++driverId
        store.drivers.push(this)
    }
    trips(){
        return store.trips.filter(trip => {
                return trip.driverId === this.id
        })
    }
    passengers(){
        return this.trips().map(trip => {
                return trip.passenger()
        })
    }
}




let passengerId = 0
class Passenger {
    constructor(name){
        this.name = name
        this.id = ++passengerId 
        store.passengers.push(this)
    }
    trips(){
        return store.trips.filter(trip => {
                return trip.passengerId === this.id
        })
    }
    drivers(){
        return this.trips().map (trip => {
            return trip.driver()
        })
    }
}



let tripId = 0
class Trip {
    constructor(driver, passenger){
        this.id = ++tripId
        
        if (driver){
            this.setDriver(driver)
        }
        if (passenger){
            this.setPassenger(passenger)
        }

        store.trips.push(this)
    }

    setDriver(driver){
        this.driverId = driver.id
    }
    setPassenger(passenger){
        this.passengerId = passenger.id
    }

    passenger(){
        return store.passengers.find(passenger => {
                return passenger.id === this.passengerId
        })
    }
    driver(){
        return store.drivers.find(driver => {
                return driver.id === this.driverId
        })
    }
}