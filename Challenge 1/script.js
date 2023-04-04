// In the example below the user has accidently typed the alphabetical "O" character instead of the zero "0" number.
//This means that the primary validation should fail (resolving to false, however since the secondary number is correct it should pass (resolving to true).
/* At the moment both values return false , in other words:

Primary phone is valid numerical string: false
Secondary phone is valid numerical string: false
*/

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof 1 == primaryPhone 
const secondaryValid = typeof 1 == typeof parseInt(secondaryPhone) 

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )