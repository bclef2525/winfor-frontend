const championData = [];

let getRandomNum = function getRandomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let loopChampData = () => {
    for(let i = 0; i < 20; i++){
        championData.push(
            {
                id: i.toString(),
                rank: i,
                championImgSrc: "",
                championName: "애쉬",
                winRate: getRandomNum(42,53).toString(),
                playCount: getRandomNum(22646,1057380).toString(),
                averageScore: getRandomNum(1.52,3.78).toString(),
                csScore: getRandomNum(9,200).toString(),
                goldScore: getRandomNum(7389,12274).toString(),
            }
        )
    }
}

loopChampData();
export default championData;