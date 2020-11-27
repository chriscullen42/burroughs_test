const { is } = require("@babel/types");
const moment = require("moment")
const dateFormat = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/gm;

/**
 * Convert a string to a date
 * @param {string} a string holding a date in the form YYYY-MM-DD 
 */
const parse = (stringDate) => {
    if (!dateFormat.test(stringDate)) throw new Error("Invalid date string")
    return moment(stringDate, "YYYY-MM-DD").toDate();
}
/**
 * Returns true/false if the date supplied is a weekend day
 * @param {Date} date 
 */
const isWeekend = (date) => {
    const day = date.getDay();
    const isWeekend = (day === 6 || day === 0);    // 6 = Saturday, 0 = Sunday
    return isWeekend
}

/**
 * Returns the date of the last day in the same month as the supplied date
 * @param {Date} date 
 */
const endOfMonth = (date) => {
    return moment(date).endOf("month").startOf("day").toDate()
}

/**
 * Return the date of the nearest Wednesday on or after the supplied date
 * @param {Date} date -the date to compute from 
 */
const nextWednesday = (date) => {
    let nextWednesday = moment(date).day("wednesday").startOf("day")
    if (nextWednesday.isBefore(date)) {
        nextWednesday.add(1, "week")
    }
    return nextWednesday.toDate()
}

/**
 * Return the date of the nearest Friday on or before the supplied date
 * @param {Date} date -the date to compute from 
 */
const lastFriday = (date) => {
    let lastFriday = moment(date).day("friday").startOf("day")
    if (lastFriday.isAfter(date)) {
        lastFriday.subtract(1, "week")
    }
    return lastFriday.toDate()
}

/**
 * Returns the 15th day of the month from the date given, unless this is a weekend, then 
 * returns nearest Wednesday after the 15th
 * @param {Date} date 
 */
const nextBonus = (date) => {
    let nextBonus = moment(date).date(15).startOf("day").toDate()
    if (isWeekend(nextBonus)) {
        nextBonus = nextWednesday(nextBonus)
    }
    return nextBonus
}

const nextPay = (date) => {
    let nextPay = endOfMonth(date)
    if (isWeekend(nextPay)) {
        nextPay = lastFriday(nextPay)
    }
    return nextPay
}

const formatDate = (date) => moment(date).format("dddd, MMMM Do YYYY")

const iterateMonths = function *(dateFrom, months) {
    let currentMonth = dateFrom
    for(let month=0; month<months;month++) {
        let dates = {
            current: formatDate(currentMonth),
            payDay: formatDate(nextPay(currentMonth)),
            bonusDay: (month > 0) ? formatDate(nextBonus(currentMonth)) : ""
        }
        yield dates
        currentMonth = moment(currentMonth).add(1,"month")
    }
}
module.exports = {
    parse,
    endOfMonth,
    nextWednesday,
    isWeekend,
    nextBonus,
    lastFriday,
    nextPay,
    iterateMonths,
    formatDate

}
