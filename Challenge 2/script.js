// The following code is meant to run every hour of the day to check a user’s balance should be calculated.
// The only time the balance should be calculated is when it is the start of a new day.
// When "hourOfDay" and "minuteOfDay" are both 0.
// However, there are cases where the time is not known (in which case both "hourOfDay" and "minuteOfDay" will be undefined.
// To prevent any bugs, the "balance" should not be calculated if the time is not known.

// Before calculating the cost, "tax" needs to be deduced as a percentage of the "salary".
// After this is done all expenses should be subtracted such as "food", "transport" and "rent".
// The final result should be "274.00100000000003".
// However, you are required to use "toFixed(2)"" to only show cents (up to only 2 decimals) and prefix the value with a "R" symbol.
// This means that the final logged value should be "R274.46".

const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay === 00 && minuteOfDay === 00) {
	const taxAsDecimal = parseInt(tax) / 100
  const starting = salary * (1 - taxAsDecimal)
	const balance = starting - (transport + food + rent)
	console.log("R"+ balance.toFixed(2))
}
if(hourOfDay == null && minuteOfDay == null){
	balance = null
}
	