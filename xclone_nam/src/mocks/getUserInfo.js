import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";
import user7 from "../../assets/images/user7.png";
import user8 from "../../assets/images/user8.png";
import user9 from "../../assets/images/user9.png";
import user10 from "../../assets/images/user10.png";
import user11 from "../../assets/images/user11.png";
import user12 from "../../assets/images/user12.png";
import user13 from "../../assets/images/user13.png";
import user14 from "../../assets/images/user14.png";

export const followers = [
  {
    userId: 17,
    img: user7,
    name: "Elena Vargas",
    userName: "@elena_v",
    isFollowing: true,
  },
  {
    userId: 1,
    img: user10,
    name: "Kevin Suarez",
    userName: "@kev_03",
    isFollowing: true,
  },
  {
    userId: 5,
    img: user5,
    name: "Lucía Fernández",
    userName: "@luciafdez",
    isFollowing: false,
  },
  {
    userId: 2,
    img: user2,
    name: "Antonio Garcés",
    userName: "@antonio1223",
    isFollowing: false,
  },
  {
    userId: 3,
    img: user3,
    name: "María Rodríguez",
    userName: "@maria_rodriguez",
    isFollowing: true,
  },
  {
    userId: 4,
    img: user4,
    name: "Javier Sánchez",
    userName: "@jav_sanchez",
    isFollowing: true,
  },

  {
    userId: 6,
    img: user1,
    name: "Carlos López",
    userName: "@carlitolopez",
    isFollowing: true,
  },
  {
    userId: 7,
    img: user5,
    name: "Isabel Martínez",
    userName: "@isabel.mtz",
    isFollowing: false,
  },
  {
    userId: 8,
    img: user14,
    name: "Miguel Torres",
    userName: "@migueltorres",
    isFollowing: true,
  },
  {
    userId: 9,
    img: user13,
    name: "Sofía Castro",
    userName: "@sofiacastro",
    isFollowing: true,
  },
  {
    userId: 10,
    img: user9,
    name: "Alejandro Gómez",
    userName: "@alejandro_gomez",
    isFollowing: false,
  },
  {
    userId: 11,
    img: user3,
    name: "Valeria Ortiz",
    userName: "@val_ortiz",
    isFollowing: true,
  },

  {
    userId: 14,
    img: user13,
    name: "Gabriela Ruiz",
    userName: "@gabyruiz",
    isFollowing: false,
  },
  {
    userId: 15,
    img: user7,
    name: "Patricia Morales",
    userName: "@patty_morales",
    isFollowing: true,
  },
  {
    userId: 16,
    img: user6,
    name: "David Ramírez",
    userName: "@davidram",
    isFollowing: false,
  },
  {
    userId: 13,
    img: user14,
    name: "Fernando Pérez",
    userName: "@fer_perez",
    isFollowing: false,
  },
];

followers.sort((a, b) => a.name.localeCompare(b.name));

// This will be the value that we are going to render: followerById
export const followerById = followers.find((follow) => follow.userId == userId);

export const following = [
  {
    userId: 1,
    img: user10,
    name: "Kevin Suarez",
    userName: "@kev_03",
    isFollowing: true,
  },
  {
    userId: 2,
    img: user2,
    name: "Antonio Garcés",
    userName: "@antonio1223",
    isFollowing: true,
  },
  {
    userId: 3,
    img: user3,
    name: "María Rodríguez",
    userName: "@maria_rodriguez",
    isFollowing: true,
  },
  {
    userId: 4,
    img: user4,
    name: "Javier Sánchez",
    userName: "@jav_sanchez",
    isFollowing: true,
  },
  {
    userId: 5,
    img: user5,
    name: "Lucía Fernández",
    userName: "@luciafdez",
    isFollowing: true,
  },
  {
    userId: 6,
    img: user6,
    name: "Carlos López",
    userName: "@carlitolopez",
    isFollowing: true,
  },
  {
    userId: 7,
    img: user7,
    name: "Isabel Martínez",
    userName: "@isabel.mtz",
    isFollowing: true,
  },
  {
    userId: 8,
    img: user8,
    name: "Miguel Torres",
    userName: "@migueltorres",
    isFollowing: true,
  },
  {
    userId: 9,
    img: user11,
    name: "Sofía Castro",
    userName: "@sofiacastro",
    isFollowing: true,
  },
  {
    userId: 10,
    img: user9,
    name: "Alejandro Gómez",
    userName: "@alejandro_gomez",
    isFollowing: true,
  },
  {
    userId: 11,
    img: user12,
    name: "Valeria Ortiz",
    userName: "@val_ortiz",
    isFollowing: true,
  },
];
following.sort((a, b) => a.name.localeCompare(b.name));

//this is for handle the options in the profile
const [value, setValue] = React.useState("1");
const handleChange = (event, newValue) => {
  setValue(newValue);
};
