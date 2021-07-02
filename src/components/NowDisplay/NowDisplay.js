import React from 'react';
import dayjs from 'dayjs';

function NowDisplay() {
  const now = dayjs();

  return (
    <div className="box">
      <p>Right now:</p>
      {now.format()}
    </div>
  );
}

export default NowDisplay;
