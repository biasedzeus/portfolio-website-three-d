import messengerImg from "../assets/messenger.webp";
import youtubemui from "../assets/youtube_mui.webp";
import portfolio from "../assets/portfolio.webp";
import shoppingCart from "../assets/shoppingCart.webp";
import textFormat from "../assets/textformatanalyzer.webp";
import newsJournal from "../assets/newsJournal.webp";
import userlistApi from "../assets/userlistapi.webp";

export const portfolioProjects = [
  {
    id: "ghasdfagsd",
    order: 1,
    title: "Messenger Firebase",
    site_URL: "https://messenger-firebase.netlify.app/login",
    github_URL: "https://github.com/biasedzeus/messenger-react-firebase",
    imgURL: messengerImg,
    features: [
      "Register User with an avatar.",
      "Login a user using Firebase.",
      "Search other resgitered users.",
      "Chat with the selected user.",
    ],
    description:
      "A website which uses firebase for user registering & logining features and to chat in realtime using firestore database.",
    techUsed: [],
    dates: "May 2015 - December 2015",
  },
  {
    id: "ghasdfsxagsd",
    order: 2,
    title: "Youtube MUI",
    site_URL: "https://youtubemui.netlify.app/",
    github_URL: "https://github.com/biasedzeus/youtube-mui",
    imgURL: youtubemui,
    features: [
      "Search youtube videos.",
      "Play videos using react-player.",
      "Sidebar with tabs.",
      "Search modal for Mobile devices.",
    ],
    description:
      "A website similar to youtube made using Material UI,where a user can search for videos and play them.",
    techUsed: [],
    dates: "May 2015 - December 2015",
  },
  {
    id: "gbbfagsd",
    order: 3,
    title: "PortFolio Website",
    site_URL: "https://bhanusingh.netlify.app/",
    github_URL: "https://github.com/biasedzeus/portfolio-website-three-d",
    imgURL: portfolio,
    features: [
      "Managing UI using HTML, CSS and JavaScript.",
      "Home Page with Three-d scene.",
      "Projects showcase.",
      "Resume showcase.",
      "Blog soon to be added",
    ],
    description:
      "A Portfolio website that displays the portfolio of the developer ,projects and designs.Uses THREEJS and Material UI",
    techUsed: [],
  },
  {
    id: "ghasdfagsd",
    order: 4,
    title: "Shopping Cart",
    site_URL: "https://shoppingcartfaker.netlify.app/",
    github_URL: "https://github.com/biasedzeus/shoppingCart",
    imgURL: shoppingCart,
    features: [
      "Add Items to the cart",
      "Items can only be added once",
      "CheckOut from Cart",
      "On successfull checkout recieve a toast.",
    ],
    description:
      "A simple Store and Cart component app to demonstrate to add and delete items to the cart and checkout. ",
    techUsed: [],
  },
  {
    id: "ghasdfagsd",
    order: 5,
    title: "User Info API",
    site_URL: "https://fetchuserslistwithapi.netlify.app/",
    github_URL: "https://github.com/biasedzeus/randomUserBday-Api-app",
    imgURL: userlistApi,
    features: [
      "Add Items to the cart",
      "Items can only be added once",
      "CheckOut from Cart",
      "On successfull checkout recieve a toast.",
    ],
    description:
      "A simple user list which fetches user from an API and display to the screen.Tech used : Axios and Bootstrap .",
    techUsed: [],
  },

  {
    id: "ghasffdfasefgsd",
    order: 6,
    title: "The News Journal",
    site_URL: "",
    github_URL: "https://github.com/biasedzeus/news-journal",
    imgURL: newsJournal,
    features: [
      " Count the the number of words",
      " estimate the time to read the whole text.",
      " Convert all to upperCase or LowerCase.",
      " To remove whitespaces ",
      "To copy the result to the clipboard ",
    ],
    description:
      "A website which shows different news based on different categories made using reactstrap and news api. ",
    techUsed: [],
  },
  {
    id: "ghasffdfasefgsd",
    order: 7,
    title: "Text Format Analyzer",
    site_URL: "https://textformatanalyzer.netlify.app/",
    github_URL: "https://github.com/biasedzeus/text-formatter-analyzer",
    imgURL: textFormat,
    features: [
      " Count the the number of words",
      " estimate the time to read the whole text.",
      " Convert all to upperCase or LowerCase.",
      " To remove whitespaces ",
      "To copy the result to the clipboard ",
    ],
    description:
      "A website that analyzes Paragraphs, and text to return    the count of characters and words of a paragraph and the time required to read it.",
    techUsed: [],
  },
];
