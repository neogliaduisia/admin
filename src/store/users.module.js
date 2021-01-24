const usersModule = {
  state: {
    users: [
      {
        id: 1,
        image: require("@/assets/Frodo.jpeg"),
        name: "Frodo",
        lastName: "Baggins",
        email: "frodo_baggins@gmail.com",
      },
      {
        id: 2,
        image: require("@/assets/Samwise.jpg"),
        name: "Samwise",
        lastName: "Gamgee",
        email: "samwise_gamgee@gmail.com"
      },
      {
        id: 3,
        image: require("@/assets/Meriadoc.jpg"),
        name: "Meriadoc",
        lastName: "Brandybuck",
        email: "meriadoc_brandybuck@gmail.com"
      },
      {
        id: 4,
        image: require("@/assets/Peregrin.jpg"),
        name: "Peregrin",
        lastName: "Took",
        email: "peregrin_took@gmail.com"
      },
      {
        id: 5,
        image: require("@/assets/Gandalf.jpg"),
        name: "Gandalf",
        lastName: "Grey",
        email: "gendalf_grey@gmail.com"
      },
      {
        id: 6,
        image: require("@/assets/Saruman.jpg"),
        name: "Saruman",
        lastName: "White",
        email: "saruman_white@gmail.com"
      },
      {
        id: 7,
        image: require("@/assets/Radagast.jpg"),
        name: "Radagast",
        lastName: "Brown",
        email: "radagast_brown@gmail.com"
      },
      {
        id: 8,
        image: require("@/assets/Aragorn.jpg"),
        name: "Aragorn",
        lastName: "Elessar",
        email: "aragorn_elessar@gmail.com"
      },
      {
        id: 9,
        image: require("@/assets/Elrond.jpg"),
        name: "Elrond",
        lastName: "Peredhel",
        email: "elrond_peredhel@gmail.com"
      },
      {
        id: 10,
        image: require("@/assets/Theoden.png"),
        name: "Theoden",
        lastName: "Ednew",
        email: "theoden_ednew@gmail.com"
      },
    ]
  },
  getters: {
    users(state) {
      return state.users
    }
  },
};

export default usersModule;