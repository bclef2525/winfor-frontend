const championsData = [];
const defaultCardData = [
  {
    championsImgSrc: [
      {
        basicSkinImg:
          "https://static1.i4u.com/sites/default/files/imagecache/main_image_google_topstories1x1/images/2019/09/leagueoflegends-louis-vuitton.jpg"
      }
    ],
    championTitle: "CHAMPION CARD",
    championSubTitle: "PICK What You Want"
  }
];

let championsDataSet = () => {
  for (let i = 0; i < 144; i++) {
    championsData.push({
      id: i,
      championsImgSrc: [
        {
          basicIconImg:
            "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Cassiopeia.png",
          basicSkinImg:
            "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f8/Cassiopeia_0.jpg/200px-Cassiopeia_0.jpg?version=7fd29a45565cff46ff9925f475f179e3"
        }
      ],
      championTitle: "Cassiopeia",
      championSubTitle: "비밀은 칼날보다 날카로운 법...",
      championDesc:
        "카시오페아는 타인을 마음대로 조종하는 끔찍한 존재이다. 녹서스의 귀족, 뒤 쿠토 가문의 막내딸로 태어난 그녀는 눈부시게 아름다웠지만, 고대의 힘을 찾아 슈리마의 지하 무덤 깊숙한 곳까지 들어갔다가 무시무시한 묘실 수호자에게 물리고 만다. 수호자의 독 때문에 뱀 형상의 포식자로 변해 버린 그녀는 교활하고 민첩하게 어둠 속을 기어 다니며 사악한 눈빛으로 적들을 돌로 만든다"
    });
  }
  return championsData;
};
championsDataSet();

export { championsData, defaultCardData };
