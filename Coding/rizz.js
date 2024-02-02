class Person{
    constructor(weight, height, femaleFriends){
        this.femaleFriends = femaleFriends;
        this.rizz = 0;
        this.weight = weight * 0.453592;
        this.height = (parseInt((height[0] * 12)) + parseInt((height.split("'"))[1])) * 0.0254; this.heightInches = (parseInt((height[0] * 12)) + parseInt((height.split("'"))[1]));
        this.BMI = this.weight/(this.height * this.height);
    }
    calculateRizz(){
        this.femaleFriends >= 20 ? this.rizz -= 1 : this.rizz += (this.femaleFriends/2)
        this.heightInches < 84 ? this.rizz += ((this.heightInches-60) / 2) : this.rizz -= 10;
        this.BMI >= 18.5 && this.BMI <= 24.9 ? this.rizz += 5 : this.rizz -= 1;
        this.heightInches >= 72 ? this.rizz += 10 : this.rizz -= 1;
        return `Your rizz is ${this.rizz}, estimated max is 36`
    }
}

//The constructor function takes in weight(in pounds), height(ft'in") and amount of female friends. It needs weight so it can calculate BMI and factor in physical health. 
function rizz(){
    var weight = prompt("Please enter your weight in pounds(this is a joke program, please don't take it offensively): ");
    var height = prompt("Please enter your height in this format(f'in");
    var femaleFriends = prompt("Please enter the amount of female friends(or friends of whatever gender you're attracted to) you have:");
    const user = new Person(weight, height, femaleFriends);
    alert(user.calculateRizz())
}
//Code Written by SirAbe