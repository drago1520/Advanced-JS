function HouseKeeper(name, age, sexy) {
    this.name = name;
    HouseKeeper.age = age;
    HouseKeeper.sexy = sexy;
    this.clean = function (){
        alert("Cleaning in process...");
    }
}
var houseKeeper = new HouseKeeper ("Shee", 18, true);
console.log(houseKeeper.name);
