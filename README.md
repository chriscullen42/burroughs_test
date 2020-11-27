# burroughs_test

### _The Burroughs Test_

#### _Create a small command line utility to help a small ﬁctional company calculate the dates on which they should pay their sales staff._  
#### Company payroll is handled like so:
* Sales staff are paid a regular ﬁxed base salary each month, plus a regular
monthly bonus. 
* Base salaries are paid on the last day of each month, unless that day is a
Saturday or Sunday (a weekend), in which case they are paid on the Friday
before the weekend 
*  On the 15th of each month, bonuses are paid for the previous month, unless
that day is a weekend, in which case they are paid on the ﬁrst Wednesday
after the 15th. 

### Your utility should calculate the payment dates for the next 12 months, including the current month, and output to the screen in a CSV format.


### Usage

To run the process, which uses todays date as the starting date, use the command:
```bash
npm start
```

To all the tests use the command:
```bash
npm test
```

The output comprises 3 fields as follows:

|field|description|
|----|-------|
|month|The month being shown|
|payday|The date of the main payment for this month|
|bonus|The date when the bonus for this month will be paid|

### Sample output in November 2020
```csv
month,payday,bonus
November 2020,Monday November 30th 2020,Tuesday December 15th 2020
December 2020,Thursday December 31st 2020,Friday January 15th 2021
January 2021,Friday January 29th 2021,Monday February 15th 2021
February 2021,Friday February 26th 2021,Monday March 15th 2021
March 2021,Wednesday March 31st 2021,Thursday April 15th 2021
April 2021,Friday April 30th 2021,Wednesday May 19th 2021
May 2021,Monday May 31st 2021,Tuesday June 15th 2021
June 2021,Wednesday June 30th 2021,Thursday July 15th 2021
July 2021,Friday July 30th 2021,Wednesday August 18th 2021
August 2021,Tuesday August 31st 2021,Wednesday September 15th 2021
September 2021,Thursday September 30th 2021,Friday October 15th 2021
October 2021,Friday October 29th 2021,Monday November 15th 2021
```

