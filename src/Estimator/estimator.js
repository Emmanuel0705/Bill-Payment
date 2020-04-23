
const challengeOne = require('./challenge-1');
const challengeTwo = require('./challenge-2');
const challengeThree = require('./challenge-3');

const chalenges = ({ data, impact, severeImpact }) => {
  // challenge 1
  challengeOne.currentlyInfected({ data, impact, severeImpact });
  challengeOne.infectionsByRequestedTime({ data, impact, severeImpact });
  // challenge 2
  challengeTwo.severeCasesByRequestedTime({ impact, severeImpact });
  challengeTwo.hospitalBedsByRequestedTime({ data, impact, severeImpact });
  // challenge 3
  challengeThree.casesForICUByRequestedTime({ impact, severeImpact });
  challengeThree.casesForVentilatorsByRequestedTime({ impact, severeImpact });
  challengeThree.dollarsInFlight({ data, impact, severeImpact });
  return { data, impact, severeImpact };
};
const covid19ImpactEstimator = (data) => chalenges({ data, impact: {}, severeImpact: {} });
export default covid19ImpactEstimator;
