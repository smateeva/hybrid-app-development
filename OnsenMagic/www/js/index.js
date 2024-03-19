function testAction() {
    document.querySelector('#largeBtn').setAttribute('modifier', 'large');
};
document.addEventListener('init', function (event) {
    ons.ready(function () {
        document.getElementById("info").innerHTML = device.cordova;
        //ons.notification.alert("Feeling better?");
    });

});

// document.addEventListener('show', function (event) {
//     ons.ready(function () {
//         if (event.target.matches('#Tab2')) {
//             ons.notification.alert('При всяко показване на таб 2');
//         }
//     });
// });

document.addEventListener('init', function (event) {
    ons.ready(function () {
        if (event.target.matches('#Tab3')) {
            window.addEventListener("batterystatus", updateBatteryStatus, false);
        }
    });
});

function updateBatteryStatus(status) {
    document.getElementById('batteryCharge').value = status.level;
}
