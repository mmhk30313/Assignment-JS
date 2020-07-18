//1. feetToMile...
console.log("================= 1. Feet To Mile Converter =================")
const milePerFeet = 0.0001894;
const feetToMile = (feet) => feet<0 ? -1 : feet*milePerFeet;
let feet = 1;//555,9,100000,-1014/
if(feet >= 0){
    console.log(feet,"ft =",feetToMile(feet).toExponential(),"mile");
}else{
    console.log("Invalid feet!!!")
}
console.log("\n");

//2. woodCalculator...
console.log("=================== 2. Wood Calculator ======================")
function woodCalculator(nChair, nTable, nBed){
    return nChair+(nTable*3)+(nBed*5);
}
let nC = 1, nT = 3, nB = 5;
nC<0 || nT<0 || nB<0 ? console.log("Invalid input!!!") 
: console.log("Woods needed =",woodCalculator(nC,nT,nB),"qF // For",nC,"chair,",nT,"table,",nB,"bed");
console.log("\n");

//3. brickCalcultor...
console.log("================= 3. Brick Calculator =======================")
function brickCalculator(nFloor){
    if(nFloor<=10){
        return nFloor<0 ? -1 : nFloor*15*1000;
    }else if(nFloor<=20){
        return (10*15*1000)+((nFloor-10)*12*1000);
    }else{
        return (10*15*1000)+(10*12*1000)+((nFloor-20)*10*1000);
    }
}
let nFloor = 10;//15,25,55,-1,0
nFloor<-1 ? console.log("Invalid input")
:console.log("No. of bricks for",nFloor,"floor =",brickCalculator(nFloor),"bricks");
console.log("\n");

//4. tinyFriend...
console.log("=================== 4. Tiny Friends =========================")
let min = +Infinity;
let minName = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
function tinyFriend(friends){
    for(let i=0;i<friends.length;i++){
        if(min>=friends[i].length && minName>friends[i]){
            min=friends[i].length;
            minName=friends[i];
        }
    }
    return minName;
}
let friends = ["B","A","a","Jhonker-sir","Rasel-sir","Rezaul-sir","Kumo-mam","Manik-sir","Mahadi","Ami"];
if(tinyFriend(friends)==""){
    console.log("There is an empty String!!!");
}else{
    console.log("Tiny name in friends is:",minName);
}
