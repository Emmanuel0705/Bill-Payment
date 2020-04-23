exports.casesForICUByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForICUByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * 0.05);
  severeImpact.casesForICUByRequestedTime = Math.trunc(severeImpact
    .infectionsByRequestedTime * 0.05);
  return { impact, severeImpact };
};
exports.casesForVentilatorsByRequestedTime = ({ impact, severeImpact }) => {
  impact.casesForVentilatorsByRequestedTime = Math.trunc(impact.infectionsByRequestedTime * 0.02);
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(severeImpact
    .infectionsByRequestedTime * 0.02);
  return { impact, severeImpact };
};
exports.dollarsInFlight = ({ data, impact, severeImpact }) => {
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
  impact.dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime
    * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD)
    / Math.trunc(calcluateDays(data.periodType, data.timeToElapse)));
  severeImpact.dollarsInFlight = Math.trunc((severeImpact.infectionsByRequestedTime
  * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD)
  / Math.trunc(calcluateDays(data.periodType, data.timeToElapse)));
  return { impact, severeImpact };
};
