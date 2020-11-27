#!/usr/bin/env node

const datelib = require("./lib/datelib")
const dateIterator = datelib.iterateMonths(new Date(), 12)
const result = [...dateIterator]

let csv = "month,payday,bonus\n"
result.map(r=>csv+=`${r.current},${r.payDay},${r.bonusDay}\n`)
console.log(csv)
