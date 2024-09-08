//Q1
var eatsPlants = true;
var eatsAnimals = false;

var category = eatsPlants  ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

 console.log(category);


//Q2
 let musicians = 0;

 if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group more than 4");
}

//Q3
var room = "billiards room";
var suspect = "Mr. Parkes"; 
var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
} else if (room === "gallery") {
    weapon = "trophy";
} else if (room === "billiards room") {
    weapon = "pool stick";
} else if (room === "dining room") {
    weapon = "knife";
}

if (room === "dining room" && suspect === "Mr. Parkes") {
    solved = true;

}else if (room === "gallery" && suspect === "Ms. Van Cleve"){
    solved = true;

}else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    solved = true;

}else if(room === "ballroom" && suspect === "Mr. Kalehoff"){
    solved = true;
}else{
    console.log("the room not match with suspect we detect")
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}


//Q4
var balance = -325;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log(" balance positive:  $" + balance );
        } else if (balance < 0) {
            console.log("balance negative : $" + balance );
        } else {
            console.log("balance is zero");
        }
    } else {
        console.log("Your account  inactive");
    }
}else{
    console.log("checkBalance is false");
}

//Q5
var flavor = "chocolate"; 
var vessel = "bowl";   
var toppings = "sprinkles";

if (
    (flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")
) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
} else{
    console.log("the flavor not vanilla and chocolate AND vessel not cone and bowl AND tooping not sprinkles and peanuts");
}