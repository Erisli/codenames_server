//Only for purpose of debugging
//DO NOT MODIFY


// function verifyMap(map1, map2) {
//   //step1, check for count of black, white and green
//   let b1 = g1 = w1 = b2 = g2 = w2 = 0;
//   let ret = 1
//   for (let i = 0; i < size; i++) {
//     if (map1[i] == 0)
//       b1++;
//     else if (map1[i] == 1)
//       g1++
//     else if (map1[i] == 2)
//       w1++
//   }

//   for (let i = 0; i < size; i++) {
//     if (map2[i] == 0)
//       b2++;
//     else if (map2[i] == 1)
//       g2++
//     else if (map2[i] == 2)
//       w2++
//   }

//   if (((b1 == b2) && (b2 == 3)) &&
//     ((g1 == g2) && (g2 == 9)) &&
//     ((w1 == w2) && (w2 == 13)))
//     ret *= 1
//   else
//     ret *= 0

//   //step2: check if there is one and only one same index with black
//   let c1 = 0
//   for (let i = 0; i < size; i++) {
//     if (map1[i] == map2[i] && (map2[i] == 0))
//       c1++
//   }

//   if (c1 == 1)
//     ret *= 1
//   else
//     ret *= 0

//   //step3: check if there are only two black to white
//   let c2 = 0
//   for (let i = 0; i < size; i++) {
//     if ((map1[i] == 0) && (map2[i] == 2))
//       c2++
//     else if ((map1[i] == 2) && (map2[i] == 0))
//       c2++
//   }

//   if (c2 == 2)
//     ret *= 1
//   else
//     ret *= 0

//   //step4: check if there are three green card with same index
//   let c3 = 0
//   for (let i = 0; i < size; i++) {
//     if (map1[i] == map2[i] && (map2[i] == 1))
//       c3++
//   }

//   if (c3 == 3)
//     ret *= 1
//   else
//     ret *= 0

//   return ret
// }

// function getRandomNonRepeatingIntegers( size,  min,  max){
//   let numbers = []
//   while(numbers.length < size){
//     let temp = getRandomInt(max)
//     if(!numbers.includes(temp)){
//       numbers.push(temp);
//     }
//   }
// }


// console.log(map1)
// console.log(map2)
// console.log(verifyMap(map1, map2))