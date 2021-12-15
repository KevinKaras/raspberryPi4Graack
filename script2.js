var sensor = require('ds18x20');

sensor.isDriverLoaded(function (err, isLoaded) {
    console.log("Is the driver loaded", isLoaded);
});

sensor.loadDriver(function (err) {
    if (err) console.log('something went wrong loading the driver:', err)
    else console.log('The driver is loaded');
});

sensor.list(function (err, listOfDeviceIds) {
    console.log(listOfDeviceIds);
});


sensor.getAll(function (err, tempObj) {
    console.log("This will be an object with all the temperatures graack", tempObj);
});

// sensor.get('YOURE SENSOR ID HERE', function (err, temp) {
//     console.log(temp);
//     document.getElementById("temperature").innerText = "Temperature: " + temp
// });




