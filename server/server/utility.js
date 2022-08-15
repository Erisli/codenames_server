import { Player } from "../Player.js";
const size = 25;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function verifyMap(map1, map2) {
  //step1, check for count of black, white and green
  let b1 = g1 = w1 = b2 = g2 = w2 = 0;
  let ret = 1
  for (let i = 0; i < size; i++) {
    if (map1[i] == 0)
      b1++;
    else if (map1[i] == 1)
      g1++
    else if (map1[i] == 2)
      w1++
  }

  for (let i = 0; i < size; i++) {
    if (map2[i] == 0)
      b2++;
    else if (map2[i] == 1)
      g2++
    else if (map2[i] == 2)
      w2++
  }

  if (((b1 == b2) && (b2 == 3)) &&
    ((g1 == g2) && (g2 == 9)) &&
    ((w1 == w2) && (w2 == 13)))
    ret *= 1
  else
    ret *= 0

  //step2: check if there is one and only one same index with black
  let c1 = 0
  for (let i = 0; i < size; i++) {
    if (map1[i] == map2[i] && (map2[i] == 0))
      c1++
  }

  if (c1 == 1)
    ret *= 1
  else
    ret *= 0

  //step3: check if there are only two black to white
  let c2 = 0
  for (let i = 0; i < size; i++) {
    if ((map1[i] == 0) && (map2[i] == 2))
      c2++
    else if ((map1[i] == 2) && (map2[i] == 0))
      c2++
  }

  if (c2 == 2)
    ret *= 1
  else
    ret *= 0

  //step4: check if there are three green card with same index
  let c3 = 0
  for (let i = 0; i < size; i++) {
    if (map1[i] == map2[i] && (map2[i] == 1))
      c3++
  }

  if (c3 == 3)
    ret *= 1
  else
    ret *= 0

  return ret
}

export function mapGengerator(maps) {
  var p1 = new Player(0);
  var p2 = new Player(1);
  var mapList = []
  for (var i = 0; i < size; i++) {
    mapList.push(i);
  }

  shuffle(mapList)

  //1. random 1 matched black
  
  p1.MatchBlack = mapList[0];
  p2.MatchBlack = mapList[0];
  mapList.splice(0, 1)

  //2. random 2 reversed green black
  p1.MatchBtoG = mapList[0];
  p2.MatchGtoB = mapList[0];
  mapList.splice(0, 1)
  p1.MatchGtoB = mapList[0];
  p2.MatchBtoG = mapList[0];
  mapList.splice(0, 1)

  //3. random 1 unique black
  p1.Black = mapList[0];
  mapList.splice(0, 1)
  p2.Black = mapList[0];
  mapList.splice(0, 1)

  //4. random 3 matched green
  p1.MatchGreen = mapList.slice(0, 3);
  p2.MatchGreen = mapList.slice(0, 3);
  mapList.splice(0, 3)

  //5. random 5 unique green for each
  p1.Green = mapList.slice(0, 5);
  mapList.splice(0, 5)
  p2.Green = mapList.slice(0, 5);
  mapList.splice(0, 5)



  maps.push(p1)
  maps.push(p2)
  console.log(maps[0].AllGreen);
  console.log(maps[0].AllBlack);
  console.log(p2.AllGreen);
  console.log(p2.AllBlack);
}

// var maps = []

// mapGengerator(maps);

// console.log(maps[0].getAllGreen());


//console.log(verifyMap(map1, map2))

