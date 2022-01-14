//Only for purpose of debugging
//DO NOT MODIFY

const size = 25;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

function mapGengerator() {
  var count = 25;
  let NotOccupied = [];
  for (let i = 0; i < count; i++) {
    NotOccupied[i] = i;
  }

  //two black card corresponding to each green card 
  let blackToG1;
  let blackToG2;

  //two black card corresponding to each white card
  let blackToW1;
  let blackToW2;

  //1 black card has same index to the other player
  let blackToB;

  //rest 8 green cards
  let green1 = []
  let green2 = []
  let r
  //step1: get random index for first black card for any player
  r = getRandomInt(count--)
  let random1 = NotOccupied[r]
  NotOccupied.splice(r, 1)
  blackToG1 = random1
  green2.push(random1)

  r = getRandomInt(count--)
  random1 = NotOccupied[r]
  NotOccupied.splice(r, 1)
  blackToG2 = random1
  green1.push(random1)

  //step2: get second black card index

  r = getRandomInt(count--)
  let random2 = NotOccupied[r]
  NotOccupied.splice(r, 1)
  blackToB = random2

  //step3: get third black card index
  r = getRandomInt(count--)
  let random3 = NotOccupied[r]
  NotOccupied.splice(r, 1)
  blackToW1 = random3

  r = getRandomInt(count--)
  random3 = NotOccupied[r]
  NotOccupied.splice(r, 1)
  blackToW2 = random3

  //step4: get index for three green cards
  r = getRandomInt(count--)
  let random4 = NotOccupied[r]
  green1.push(random4)
  green2.push(random4)
  NotOccupied.splice(r, 1)

  r = getRandomInt(count--)
  let random5 = NotOccupied[r]
  green1.push(random5)
  green2.push(random5)
  NotOccupied.splice(r, 1)

  r = getRandomInt(count--)
  let random6 = NotOccupied[r]
  green1.push(random6)
  green2.push(random6)
  NotOccupied.splice(r, 1)

  //rest green for player 1  
  for (let i = 0; i < 5; i++) {
    r = getRandomInt(count--)
    let temp = NotOccupied[r]
    NotOccupied.splice(r, 1)
    green1.push(temp)
  }

  //rest green for player 2  
  for (let i = 0; i < 5; i++) {
    r = getRandomInt(count--)
    let temp = NotOccupied[r]
    NotOccupied.splice(r, 1)
    green2.push(temp)
  }

  //rest of the occupied array would be common white cards
  //0: black
  //1: green
  //2: white

  //map for player 1
  //let black1 = [blackToG1, blackToB, blackToW1]

  const map1 = Array(size).fill(-1)

  //black card
  map1[blackToG1] = 0
  map1[blackToB] = 0
  map1[blackToW1] = 0
  //green card
  for (let i = 0; i < green1.length; i++) {
    map1[green1[i]] = 1
  }

  for (let i = 0; i < size; i++) {
    if (map1[i] == -1)
      map1[i] = 2
  }

  //map for player 2
  const map2 = Array(size).fill(-1)

  //black card
  map2[blackToG2] = 0
  map2[blackToB] = 0
  map2[blackToW2] = 0
  //green card
  for (let i = 0; i < green2.length; i++) {
    map2[green2[i]] = 1
  }

  for (let i = 0; i < size; i++) {
    if (map2[i] == -1)
      map2[i] = 2
  }

  console.log(map1)
  console.log(map2)

  console.log(verifyMap(map1, map2))
}


mapGengerator();