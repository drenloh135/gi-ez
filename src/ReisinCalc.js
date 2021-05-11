import React, { useState } from "react";

function ReisinCalcDisp() {
  const [calculated, setCalculated] = useState(false);
  const [reisins, setReisins] = useState(10);
  const [reisinsNeeded, setReisinsNeeded] = useState(160);

  function onClickHandler() {
    setCalculated(!calculated);
    setReisins(reisins);
  }
  function Calculation() {
    if (!calculated) {
      return (
        <div>
          <input type="number" value={reisins}></input>
          <button onClick={onClickHandler}>Calculate!</button>
        </div>
      );
    } else {
      return <div>{ReisinCalc(reisins)}</div>;
    }
  }

  return (
    <div className="ReisinCalcDisp">
      <h1>REISIN CALCULATOR</h1>
      <h2>
        Enter the amount of reisin you have remaining and we will calculate for
        you how long it will take to regenerate them
      </h2>
      <Calculation></Calculation>
    </div>
  );

  function ReisinCalc(reisins) {
    console.log(reisins);
    setReisinsNeeded(160 - reisins);
    return <h2>You require {reisinsNeeded} more to reach max reisins!</h2>;
  }
}

export default ReisinCalcDisp;
