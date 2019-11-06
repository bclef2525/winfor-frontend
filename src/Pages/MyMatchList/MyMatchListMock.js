// {
//     "summonerdata" : {
//         "name" : "data",
//         "tier" : "silver I",
//         "summonerpicture" : "imgLink"
//     },
//     "gamedata1" : {
//         "gametype" : "무작위 총력전",
//         "gamedate" : "7일전",
//         "result" : "win",
//         "champion" : "애쉬",
//         "championimg" : "애쉬img",
//         "rune" : {
//             "rune1" : "rune1img"
//         }
//     }

// const asd = [
//   {
//     summonerName: [{ summoner_name: "박세환" }],
//     summonerprofile: [{ summoner_profile_img_url: "img_url" }],
//     tier: "strtype",
//     rank: "strtype",
//     game: [
//       {
//         id: "inttype",
//         gametype: "strtype",
//         gametype: "gamemode",
//         user: [{ user_name: "user_name" }],
//         champions: [{ champion_name: "champion", champion_img_src: "img_url" }],
//         win: "intdatatype",
//         death: "intdatatype",
//         assist: "intdatatype",
//         champion_level: "intdatatype",
//         cs: "intdatatype",
//         lane: "strdatatype",
//         start_time: "datedatatype or intdatatype",
//         to_user1_name: "strtype",
//         to_user1_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         to_user2_name: "strtype",
//         to_user2_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         to_user3_name: "strtype",
//         to_user3_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         to_user4_name: "strtype",
//         to_user4_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         en_user1_name: "strtype",
//         en_user1_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         en_user2_name: "strtype",
//         en_user2_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         en_user3_name: "strtype",
//         en_user3_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         en_user4_name: "strtype",
//         en_user4_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         en_user5_name: "strtype",
//         en_user5_champion: [
//           { champion_name: "champion", champion_img_src: "img_url" }
//         ],
//         core_rune: [{ rune_name: "rune", rune_img_src: "runeimgurl" }],
//         sub_rune: [
//           { subrune_name: "subrune", subrune_img_src: "subruneimgurl" }
//         ],
//         spell1: [{ spell_name: "spell", spell_img_src: "spellimgurl" }],
//         spell2: [{ spell_name: "spell", spell_img_src: "spellimgurl" }],
//         gameduration: "inttype or datetype",
//         doublekill: "inttype",
//         triplekill: "inttype",
//         quadrakill: "inttype",
//         pentakill: "inttype"
//       }
//     ]
//   }
// ];

const mmlMock = [
  {
    summonerName: [{ summoner_name: "박세환" }],
    summonerprofile: [
      {
        summoner_profile_img_url:
          "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Cassiopeia.png"
      }
    ],
    tier: "Chanllenger",
    rank: "12",
    game: [
      {
        id: "inttype",
        gametype: "무작위 총력전",
        user: [{ user_name: "박세환" }],
        champions: [
          {
            champion_name: "자르반3세",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Alistar.png"
          }
        ],
        win: "승리",
        kill: 10,
        death: 7,
        assist: 22,
        champion_level: "13",
        cs: "309",
        lane: "미드",
        start_time: "7일전",
        to_user1_name: "김상혁",
        to_user1_champion: [
          {
            champion_name: "소라카",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Anivia.png"
          }
        ],
        to_user2_name: "나찬영",
        to_user2_champion: [
          {
            champion_name: "가렌",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Kennen.png"
          }
        ],
        to_user3_name: "김민식",
        to_user3_champion: [
          {
            champion_name: "에코",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Nasus.png"
          }
        ],
        to_user4_name: "박지혁",
        to_user4_champion: [
          {
            champion_name: "문도박사",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Nocturne.png"
          }
        ],
        en_user1_name: "이윤성",
        en_user1_champion: [
          {
            champion_name: "카밀",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Sejuani.png"
          }
        ],
        en_user2_name: "이수호",
        en_user2_champion: [
          {
            champion_name: "말파이트",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Twitch.png"
          }
        ],
        en_user3_name: "노정윤",
        en_user3_champion: [
          {
            champion_name: "징크스",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Udyr.png"
          }
        ],
        en_user4_name: "윤민혁",
        en_user4_champion: [
          {
            champion_name: "아리",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Xayah.png"
          }
        ],
        en_user5_name: "권동욱",
        en_user5_champion: [
          {
            champion_name: "아칼리",
            champion_img_src:
              "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Yorick.png"
          }
        ],
        core_rune: [
          {
            rune_name: "도벽",
            rune_img_src:
              "https://opgg-static.akamaized.net/images/lol/perk/8359.png?image=w_22&v=1"
          }
        ],
        sub_rune: [
          {
            subrune_name: "지배",
            subrune_img_src:
              "https://opgg-static.akamaized.net/images/lol/perkStyle/8100.png?image=w_22&v=2"
          }
        ],
        spell1: [
          {
            spell_name: "순간이동",
            spell_img_src:
              "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png?image=w_22&v=15354684000"
          }
        ],
        spell2: [
          {
            spell_name: "점멸",
            spell_img_src:
              "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=w_22&v=15354684000"
          }
        ],
        gameduration: "35분 12초",
        doublekill: 1,
        triplekill: 3,
        quadrakill: 0,
        pentakill: 0
      }
    ]
  }
];

export default mmlMock;
