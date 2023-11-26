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

  //function expressions, In a function expression, the function name is usually omitted.
  // A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
  const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));

 