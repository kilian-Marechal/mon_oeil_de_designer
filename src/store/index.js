import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      connected: true,
      name: "Kilian Marechal",
      email: "marechal.kiki@gmail.cul",
      picture: require("../../public/users_pictures/kilian.png"),
      rank: "Diamant",
      games: "211",
      totalScore: "2800",
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
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
