const player = {
    name: "mico",
    sayHello: function (otherPersonsName) {
        console.log(`hello! ${otherPersonsName} nice to meet you`)
    }
}
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

function plus(a, b) {
    console.log(a + b);
}
plus(5, 5)

const character/*object*/ = {
    name: "nico",    //property
    age: 98,
}

character.age
console.log(character.age = 83);
