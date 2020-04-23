exports.currentlyInfected = ({ data, impact, severeImpact }) => {
  impact.currentlyInfected = Math.trunc(data.reportedCases * 10);
  severeImpact.currentlyInfected = Math.trunc(data.reportedCases * 50);
  return { impact, severeImpact };
};
exports.infectionsByRequestedTime = ({ data, impact, severeImpact }) => {
  const calcluateDays = (periodType, value) => {
    switch (periodType) {
      case 'months':
        return value * 30;
      case 'weeks':
        return value * 7;
      default:
        return value;
    }
  };
  impact.infectionsByRequestedTime = Math.trunc(impact.currentlyInfected
    * (2 ** (Math.trunc(calcluateDays(data.periodType, data.timeToElapse) / 3))));
  severeImpact.infectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected
  * (2 ** (Math.trunc(calcluateDays(data.periodType, data.timeToElapse) / 3))));
  return { impact, severeImpact };
};
