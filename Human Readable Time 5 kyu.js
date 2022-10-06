function humanReadable(seconds) {
  hours = seconds / 3600;
  strHours =
    Math.floor(hours).toString().length === 1
      ? "0" + Math.floor(hours)
      : Math.floor(hours);
  modHours = seconds % 3600;
  minutes = modHours / 60;
  strMinutes =
    Math.floor(minutes).toString().length === 1
      ? "0" + Math.floor(minutes)
      : Math.floor(minutes);
  strSeconds =
    (seconds % 60).toString().length === 1
      ? "0" + (seconds % 60)
      : seconds % 60;
  console.log(strHours);
  console.log(strMinutes);
  console.log(strSeconds);
  return strHours + ":" + strMinutes + ":" + strSeconds;
}

humanReadable(59);

// best practice

/* function humanReadable(seconds) {
    var hours = parseInt( seconds / 3600 ) ;
    var minutes = parseInt( seconds / 60 ) % 60;
    var seconds = seconds % 60;
    
    var pad = function(val){
      return val < 10 ?"0"+val:val;
    }
    
    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
    } */
