var divX;
var divY;
var flag = false;
var i = 0;
var totalDist = 0;
var average = 0;
var startingRad;
var accuracy;
var targetDiv = document.getElementById('center');
if (targetDiv) {
    var rect = targetDiv.getBoundingClientRect();
    divX = rect.left;
    divY = rect.top;
    console.log("Div Coordinates: X=".concat(divX, ", Y=").concat(divY));
}
else {
    console.error('Div not found');
}
document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (key === 'r') {
        document.addEventListener('mousemove', mouseMovement);
        console.clear();
        var mouseMoveHandler_1 = function (mouseEvent) {
            var cursorX = mouseEvent.clientX;
            var cursorY = mouseEvent.clientY;
            var distanceX = Math.abs(divX - cursorX);
            var distanceY = Math.abs(divY - cursorY);
            startingRad = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            average = startingRad;
            console.clear();
            console.log("Starting radius is: ".concat(startingRad));
            i = 0;
            totalDist = 0;
            accuracy = 0;
            document.removeEventListener('mousemove', mouseMoveHandler_1);
        };
        document.addEventListener('mousemove', mouseMoveHandler_1);
    }
    console.log("Key pressed: ".concat(key));
});
var mouseMovement = function (mouseEvent) {
    i++;
    var cursorX = mouseEvent.clientX;
    var cursorY = mouseEvent.clientY;
    //console.log(cursorX, cursorY);  
    var distanceX = Math.abs(divX - cursorX);
    var distanceY = Math.abs(divY - cursorY);
    var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    totalDist = totalDist + distance;
    average = totalDist / i;
    accuracy = 100 - ((Math.abs(startingRad - average)) / average) * 100;
    console.log(i, distance, accuracy);
};
document.addEventListener('mousemove', mouseMovement);
