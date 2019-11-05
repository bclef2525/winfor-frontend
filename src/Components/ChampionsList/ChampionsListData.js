const championsData = [];

let championsDataSet = () => {
  for (let i = 0; i < 144; i++) {
    championsData.push({
      id: i,
      championsImgSrc:
        "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Cassiopeia.png",
      championName: "Cassiopeia",
      championTitle: "Champion Name",
      championDesc: "Champion Description"
    });
  }
  return championsData;
};

championsDataSet();

export default championsData;
