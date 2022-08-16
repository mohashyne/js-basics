// Create a function called showProperties you pass and object and the object should display all the properties this object that are typeof 'string'.

const movie = {
    title: 'a',
    releaseYear: 2020,
    rating: 4.5,
    director: 'b'
   };
   
   showProperties(movie);
   
   function showProperties(obj) {
    for (let key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
   
   
   }


   //optional

//    function showProperties(obj) {
//     for (let key in obj) {
//     if (typeof obj[key] === 'string')
//     console.log(key, obj[key]);
//    }
   
//    }