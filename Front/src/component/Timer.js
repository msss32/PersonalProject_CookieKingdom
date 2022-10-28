import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState();

  let now = new Date();
  let end = new Date("2022-10-28 10:00:00");

  let nowTime = now.getTime();
  let endTime = end.getTime();

  let gapTime = endTime - nowTime;

  let sec = Math.floor((gapTime / 1000) % 60);

  let min = Math.floor((gapTime / (1000 * 60)) % 60);

  let hour = Math.floor((gapTime / (1000 * 60 * 60)) % 24);

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  if (gapTime > 0) {
    setTimeout(() => {
      setTimer({ hour, min, sec });
    }, 1000);
  }

  return (
    <div>
      <div className="timer">
        {timer && timer.hour ? (
          <>
            {gapTime > 0 ? (
              <>
                {timer && timer.hour} : {timer && timer.min} :{" "}
                {timer && timer.sec}
              </>
            ) : (
              <>종료!</>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Timer;
