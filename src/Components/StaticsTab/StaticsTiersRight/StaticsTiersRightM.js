const STRData = [];
// let getRandomNum = function getRandomNum(min,max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min
// }
let loopSTRData = () => {
   for(let i = 0; i < 3; i++){
       STRData.push(
           {
               id: i.toString(),
               tier: "Challenger",
               tier_roman: "I",
               summoner: "300",
               summoner_percent: "0.0079",
               aggregate: "300",
               aggregate_percent: "0.0079",
           }
       )
   }
   for(let i = 0; i < 3; i++){
    STRData.push(
        {
            id: i.toString(),
            tier: "silver",
            tier_roman: "IV",
            summoner: "4142",
            summoner_percent: "6.432",
            aggregate: "5235",
            aggregate_percent: "12.4213",
        }
    )
}
}
loopSTRData();
export default STRData;