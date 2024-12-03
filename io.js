let a = prompt("Salem")
let b = prompt("Ok batyrmasyn basynyz")
let c = prompt("Ctrl + Shirft + J  basynyz")
let menu = {
    name:"Ronaldo",
    surname:"Cristiano",
    age:"39",
    goal:"915",
    team: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al Nassr"]
};
function getFullName(menu) {
    return `${menu.name} ${menu.surname}`;
}
menu.goal = +(menu.goal) + 2;
function getFullName(menu){
    return`${menu.name},${menu.surname}`;
}
function getCurrentClub(menu) {
    return menu.team[menu.team.length - 1];
}
console.log("Толык аты жони:",getFullName(menu));
console.log("Гол салгандары:",menu.goal);
console.log("Казирги ойнап жаткан клубы:",getCurrentClub(menu));