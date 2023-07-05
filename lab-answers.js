// ==========EASY GOING========

for( let i = 1; i <= 20; i++){
    console.log(i)
}


//===========Get Even ===========

for(let i = 0; i <= 200; i++){
    if( i % 2 === 0){
        console.log(i)
    }
}


//=========== Fizz Buzz ==========
for( let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if( i % 5 === 0){
        console.log("Buzz")
    }else if( i % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

//============ Wild Wild Life===========
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

wolfy[2] = 17
wolfy[3] = "Gotham City"
dart.push("Hawkins")
wolfy[0] = "Gameboy"

console.log(wolfy)
console.log(dart)

//============ Yell at the Ninja Turtles ========
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for( let turtles of ninjaTurtles){
    turtle = turtles.toUpperCase()
    console.log(turtle)
}

//============ Methods, Revisited ================
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// for( let i = 0; i < favMovies.length; i++){
//     if(favMovies[i] === 'Titanic'){
//         console.log(i)
//     }
// }
console.log(favMovies.indexOf('Titanic'))
// 1
favMovies.sort()
console.log(favMovies)

// 3
favMovies.pop()
 console.log(favMovies)

 //4
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)

//5
favMovies.reverse()
console.log(favMovies)

//6
favMovies.shift()
console.log(favMovies)

//7
favMovies.unshift('Swag')
console.log(favMovies)

//8
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(15,1,"Avatar")
console.log(favMovies)

//10

let newMov= favMovies.slice(0, Math.floor(favMovies.length / 2))


//12
console.log(newMov)

console.log(newMov.indexOf('Fast and Furious'))

//=============== Where is Waldo =============
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)
whereIsWaldo[1][2]= "No One"
console.log(whereIsWaldo)
let found= whereIsWaldo[2][1][1]
console.log(found)