#!/usr/bin/env node

const datelib = require("./lib/datelib")
const dateIterator = datelib.iterateMonths(new Date("2020-01-01"), 12)
const result = [...dateIterator]

console.log(JSON.stringify(result,null,"\t"))