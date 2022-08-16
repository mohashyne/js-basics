//let speedLimit = 70
//for every 5km they will get 1point
//70km = Ok and 75km = 1point
//points >= 12 --> license suspended

checkSpeed(120);


// avoid using magic number , always define a const for functions like this
function checkSpeed(speed) {
    const speedLimit = 70;   
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('OK');
        return;

    }
     //try to avoid indentation to make your code cleaner '{}'
       const points = Math.floor((speed - speedLimit ) / kmPerPoint);
     if (points >= 12)
     console.log('License suspended');
     else
     console.log('Points', points);

}
