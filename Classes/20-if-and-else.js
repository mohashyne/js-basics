//Hour
//If hour is between 6am and 12pm: Good morning
//If hour is between 12pm and 6pm: Good afternoon
//Otherwise: Good evening:

let hour = 20; // if you change this to 10 you get good morning.

if  (hour >= 6 && hour < 12)
   console.log( 'Good morning');


else if (hour >= 12 &&  hour < 18) 
    console.log('Good afternoon');

else 
    console.log('Good Evening');