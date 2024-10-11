import user from "../assets/images/user.png";

export const myInfo = {
  userId: 1,
  img: user,
  name: "Alejandra Navarro",
  userName: "@aleja2312",
  postCount: 12, //this value will be myPost.lenght
  following: 23,
  followers: 1522,

  myPost: [
    {
      postId: 3,
      date: "23/01/24",
      bodyPost: "programming is my passion",
      likeCount: 2,
      savePost: true, //this is state for save post
    },
    {
      postId: 1,
      date: "28/03/24",
      bodyPost: "today is today and tomorrow is tomorrow",
      likeCount: 0,
      savePost: false, //this is state for save post
    },
    {
      postId: 2,
      date: "15/05/24",
      bodyPost: "Siuuuuuuu",
      likeCount: 15,
      savePost: true, //this is state for save post
    },

    {
      postId: 4,
      date: "9/08/24",
      bodyPost: "Hello word",
      likeCount: 3,
      savePost: false, //this is state for save post
    },
  ],
};
