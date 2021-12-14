import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      connected: true,
      name: "Kilian Marechal",
      email: "marechal.kiki@gmail.cul",
      picture: require("../../public/users_pictures/kilian.png"),
      rank: "Diamant",
      games: 211,
      bestScore: 1280,
      totalScore: 2800,
      goal: {
        zen: false,
        motivated: false,
        intensive: true
      },
      alert: "11h30",
      pickedDays: {
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: false,
        friday: true,
        saturday: false,
        sunday: false
      },
      friends: [
        {
          firstName: "Nico",
          lastName: "Tri",
          accountScore: "22600",
          picture: require("../../public/users_pictures/devotist.jpg")
        },
        {
          firstName: "kaurtau",
          lastName: "Devotiste",
          accountScore: "600",
          picture: require("../../public/users_pictures/niko.jpg")
        }
      ]
    },

    seasonEnd: "2j 19h",

    users: [
      {
        firstName: "Kiik",
        lastName: "mrcl",
        accountScore: "2600",
        picture: require("../../public/users_pictures/kilian.png")
      },
      {
        firstName: "jaaaj",
        lastName: "suuus",
        accountScore: "4800",
        picture: require("../../public/users_pictures/warren.jpg")
      },
      {
        firstName: "Nico",
        lastName: "Tri",
        accountScore: "22600",
        picture: require("../../public/users_pictures/devotist.jpg")
      },
      {
        firstName: "kaurtau",
        lastName: "Devotiste",
        accountScore: "600",
        picture: require("../../public/users_pictures/niko.jpg")
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
