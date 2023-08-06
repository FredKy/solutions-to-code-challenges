const obj = {
  name: "Fredrik",
  logName: function () {
    console.log(this.name);
  },
};

obj.logName();

setTimeout(obj.logName, 500);
setTimeout(obj.logName.bind(obj), 500);
