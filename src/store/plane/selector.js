export const selectEngine = (reduxState) => reduxState.planeReducer.engines;

export const SelectThrust = (reduxState) => reduxState.planeReducer.thrust;

export const selectTotalPower = (reduxState) => {
  const { engines, thrust } = reduxState.planeReducer;
  const totalPower = Object.values(engines).reduce((acc, e) => {
    return e ? thrust + acc : acc;
  }, 0);

  console.log(totalPower);

  return totalPower;
};
