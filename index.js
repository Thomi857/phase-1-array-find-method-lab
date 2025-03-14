//code your solution here
const record = [
    { year: 2015, result: "W"},
    { year: 2014, result: "N/A"},
    { year: 2013, result: "L"},
    //...
  ]



  function superbowlWin(data) {
    // Use find() to check for a win
    const win = data.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }

