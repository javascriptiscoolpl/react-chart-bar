# Description

This is simple Chart.js Bar React component.

# Quickstart

In project directory run command:

    bash install.bash

then open <code>index.html</code> file in your browser.

# Sample usage - basic

You can create <code>chart</code> object with data and send it to the <code>ChartBar</code> React component as <code>data</code>.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ChartBar from './react-chart-bar.js';

    var chart = { msg: "", osX: [], osY: [] };
    for (var i=0,x=-10; i<20; i++,x++) {
      chart.osX[i] = x;
      chart.osY[i] = Math.sin(x)-Math.tan(x);
    }

    ReactDOM.render(
      <ChartBar data={chart}/>,
      document.getElementById('app')
    );

# Sample usage - update

If you send updated <code>chart</code> object again to the <code>ChartBar</code> React component as <code>data</code> it will update itself.

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

# License

MIT
