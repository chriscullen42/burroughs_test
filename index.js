#!/usr/bin/env node

const datelib = require("./lib/datelib")
const dateIterator = datelib.iterateMonths(new Date("2020-01-01"), 12)
const result = [...dateIterator]

let csv = "payday,bonus\n"
result.map(r=>csv+=`${r.payDay},${r.bonusDay}\n`)
console.log(csv)
