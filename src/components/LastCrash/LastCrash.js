import React from 'react';
import dayjs from 'dayjs';

function LastCrash() {
  const lastCrash = '2021-07-01T07:51:00-06:00';
  const dayjsLastCrash = dayjs(lastCrash);
  console.log(dayjsLastCrash);
  return (
    <div className="box">
      <p>Last Crash</p>
      {dayjsLastCrash.format()}
    </div>
  );
}

export default LastCrash;
