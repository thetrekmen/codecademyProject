//formula for random number generator
let raceNumber = Math.floor(Math.random() * 1000);

//runners registration time
let earlyRunner = 'Late';

//runners age
let runnersAge = 17;

//a condition if runner's are adults and registered early; they will receive a number of >1000. all others will be <1000
if (earlyRunner === 'Early' && runnersAge > 18) {
  raceNumber = raceNumber + 1000;
} else {
  (raceNumber);
};

//a control flow for communicating runners start time and number
if (runnersAge > 18 && earlyRunner === 'Early') {
  console.log(`Runner ${raceNumber}, your start time is 930`)
} else if (earlyRunner != 'Early' && runnersAge > 18) {
  console.log(`Runner ${raceNumber}, your start time is 1100`)
} else if (runnersAge < 18) {
  console.log(`Runner ${raceNumber}, your start time is 1230`)
} else {
  console.log('See the registration desk!')
}
