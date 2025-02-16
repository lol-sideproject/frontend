// store/matchStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMatchStore = defineStore("matchStore", () => {
  const matches = ref([
    {
      championImage:
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
      spells: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerFlash.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerHeal.png",
      ],
      runeMain:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      runeSub:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      kills: 19,
      deaths: 8,
      assists: 15,
      kda: (19 + 15) / 8,
      aiScore: 80,
      rank: 2,
      result: "승리",
      items: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3031.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6672.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3094.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3036.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3006.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3363.png",
      ],
      team1: [
        {
          name: "프로젝트 모건도",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
        },
        {
          name: "왼쪽날개락",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
        },
        {
          name: "배탈나는 우승자",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
        },
        {
          name: "PORO of LEGEND",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
        },
        {
          name: "바위번지점프",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png",
        },
      ],
      team2: [
        {
          name: "쪽지시험",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png",
        },
        {
          name: "심리학교수김심리",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
        },
        {
          name: "찬스브",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
        },
        {
          name: "renegade",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png",
        },
        {
          name: "그럴만두해",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png",
        },
      ],
    },
    {
      championImage:
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
      spells: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerFlash.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerExhaust.png",
      ],
      runeMain:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      runeSub:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      kills: 14,
      deaths: 10,
      assists: 7,
      kda: (14 + 7) / 10,
      aiScore: 72,
      rank: 5,
      result: "패배",
      items: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6673.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3031.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3091.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3072.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3111.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3364.png",
      ],
      team1: [
        {
          name: "프로젝트 모건도",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
        },
        {
          name: "왼쪽날개락",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
        },
        {
          name: "배탈나는 우승자",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png",
        },
        {
          name: "PORO of LEGEND",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
        },
        {
          name: "바위번지점프",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
        },
      ],
      team2: [
        {
          name: "쪽지시험",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png",
        },
        {
          name: "심리학교수김심리",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
        },
        {
          name: "찬스브",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png",
        },
        {
          name: "renegade",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
        },
        {
          name: "그럴만두해",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png",
        },
      ],
    },
    {
      championImage:
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
      spells: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerFlash.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerExhaust.png",
      ],
      runeMain:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      runeSub:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
      kills: 14,
      deaths: 10,
      assists: 7,
      kda: (14 + 7) / 10,
      aiScore: 72,
      rank: 5,
      result: "승리",
      items: [
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6673.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3031.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3091.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3072.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3111.png",
        "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3364.png",
      ],
      team1: [
        {
          name: "프로젝트 모건도",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
        },
        {
          name: "왼쪽날개락",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
        },
        {
          name: "배탈나는 우승자",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png",
        },
        {
          name: "PORO of LEGEND",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
        },
        {
          name: "바위번지점프",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
        },
      ],
      team2: [
        {
          name: "쪽지시험",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png",
        },
        {
          name: "심리학교수김심리",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
        },
        {
          name: "찬스브",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Morgana.png",
        },
        {
          name: "renegade",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
        },
        {
          name: "그럴만두해",
          championImage:
            "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png",
        },
      ],
    },
  ]);

  return { matches };
});
