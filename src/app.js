import React from 'react';
import ReactDOM from 'react-dom';
import ChartBar from './react-chart-bar.js';

// sample usage 1
/*
var chart = { msg: "", osX: [], osY: [] };
for (var i=0,x=-10; i<20; i++,x++) {
  chart.osX[i] = x;
  chart.osY[i] = Math.sin(x)-Math.tan(x);
}

ReactDOM.render(
  <ChartBar data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
function setRandomChart() {
  var chart = { msg: "", osX: [], osY: [] };
  for (var i=0,x=-10; i<20; i++,x++) {
    chart.osX[i] = x;
    chart.osY[i] = Math.random()-Math.cos(x);
  }
  ReactDOM.render(
    <ChartBar data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
