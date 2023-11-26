//function 1
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5,4);
  console.log("Number of Monitors: " + numOfMonitors);

// with helper function
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors (rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);