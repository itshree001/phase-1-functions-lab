// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return (Math.abs(42 - someValue));
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}

distanceFromHqInFeet(200)

function distanceTravelledInFeet(start, destination){
    return Math.abs(start- destination) * 264;
}
distanceTravelledInFeet( 50, 25); 

function calculatesFarePrice( start, destination){
  let dis= distanceTravelledInFeet(start, destination)
  if(dis <=400) return 0;
  else if( dis >400 && dis <= 2000) return (dis - 400)* 0.02;
  else if(dis > 2000 && dis <= 2500) return 25;
  else return 'cannot travel that far';

}
calculatesFarePrice(12,23)
