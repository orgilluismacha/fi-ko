// const person = {
//   name: 'John Doe',
//   age: 23,
//   location: {
//     city: 'Budapest',
//     temp: 7
//   }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// console.log(`Its ${temperature} in ${location}`);

// const book = {
//   title: 'The Adventure of Scrotie McBoogerballs',
//   author: 'Bummers',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);  //Penguin, Self-Published


//array

// const address = ['Budapest', '1068', 'Felsoerdosor utca 9'];

// const [city, zip, street= 'Budapest'] = address;

// console.log(`You are in ${city}, ${street}. The postcode is ${zip}`);

const item = ['Hotdog (mono)', 'Ft900', 'Ft1200', 'Ft1400'];
const [name, , mPrice] = item;
console.log(`A medium ${name} costs ${mPrice}`);