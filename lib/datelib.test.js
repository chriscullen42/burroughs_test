const datelib = require("./datelib")
const testdate = new Date("2020-11-23")
const testdateFormatted = "Monday November 23rd 2020"
const testdateFormattedMonth = "November 2020"
const testdateWeekend = new Date("2020-11-21")
const testdateWednesday = new Date("2020-11-25")
const testdateFriday = new Date("2020-11-20")
const testdateFridayMonth = new Date("2020-11-27")
const testPayday = new Date("2020-11-30")
const testBonus = new Date("2020-12-15")
const testEOM = new Date("2020-11-30")

describe("datelib", () => {
    it("corretly parses string into a date", () => {
        const result = datelib.parse("2020-11-23");
        expect(result.getTime()).toEqual(testdate.getTime())
    });
    it("correctly computes end of month for given date", () => {
        const result = datelib.endOfMonth(testdate);
        expect(result.getTime()).toEqual(testEOM.getTime())
    });
    it("correctly finds nearest wednesday from testdate", () => {
        const result = datelib.nextWednesday(testdate);
        expect(result.getTime()).toEqual(testdateWednesday.getTime());
    });
    it("correctly returns true when date is a weekend", () => {
        const result = datelib.isWeekend(testdateWeekend);
        expect(result).toBe(true);
    });
    it("correctly finds the bonus date in the test date month", () => {
        const result = datelib.nextBonus(testdate);
        expect(result.getTime()).toEqual(testBonus.getTime());
    });
    it("correctly finds nearest friday before test date", () => {
        const result = datelib.lastFriday(testdate);
        expect(result.getTime()).toEqual(testdateFriday.getTime());
    });
    it("correctly finds nearest friday before end of month", () => {
        const result = datelib.lastFriday(testEOM);
        expect(result.getTime()).toEqual(testdateFridayMonth.getTime());
    });

    it("correctly iterates over 3 months", () => {
        const dateIterator = datelib.iterateMonths(testdate, 3)
        const result = [...dateIterator]
        expect(result.length).toEqual(3);
    });
    it("correctly formats date as a string", () => {
        const result = datelib.formatDate(testdate)
        expect(result).toEqual(testdateFormatted);
    });
    it("correctly formats month as a string", () => {
        const result = datelib.formatMonth(testdate)
        expect(result).toEqual(testdateFormattedMonth);
    });
});
