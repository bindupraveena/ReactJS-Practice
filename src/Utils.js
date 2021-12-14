import React from 'react';

const isArrayValid = (arr) => {
  if (arr != undefined && arr !== null && arr.length > 0) {
    return true;
  } else return false;
};

const dashboardLogs = (item) => {
  console.log(item);
};

export { isArrayValid, dashboardLogs };
