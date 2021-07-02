import React from 'react';
import dayjs from 'dayjs';

function Difference() {
  const lastCrash = '2021-07-01T07:51:00-06:00';
  const dayjsLastCrash = dayjs(lastCrash);

  const now = dayjs();

  const timeSinceLastCrash = now.diff(lastCrash);

  console.log(timeSinceLastCrash);

  // Magic converter code
  function convertMS(milliseconds) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds,
    };
  }

  const timeObject = convertMS(timeSinceLastCrash);
  console.log(timeObject);

  return (
    <div className="box">
      <p>Time since Last Crash:</p>
      <p>Days: {timeObject.day}</p>
      <p>Hours: {timeObject.hour}</p>
      <p>Minutes: {timeObject.minute}</p>
      <p>Seconds: {timeObject.seconds}</p>
    </div>
  );
}

export default Difference;
