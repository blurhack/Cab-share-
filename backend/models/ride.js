const moment = require('moment');

class Ride {
    constructor(creator, pickup, dropoff, date, time, phone) {
        this.creator = creator;
        this.pickup = pickup;
        this.dropoff = dropoff;
        this.dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
        this.passengers = [{ name: creator, phone }];
        this.maxPassengers = 4;
    }

    canJoin(newDateTime) {
        const hoursDiff = Math.abs(this.dateTime.diff(newDateTime, 'hours', true));
        return this.passengers.length < this.maxPassengers && hoursDiff <= 1 && this.dateTime.isSame(newDateTime, 'day');
    }

    addPassenger(name, phone) {
        if (this.passengers.length < this.maxPassengers) {
            this.passengers.push({ name, phone });
            return true;
        }
        return false;
    }
}

module.exports = Ride;
