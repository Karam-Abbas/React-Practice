import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import Github from "./Github/Github.jsx";
import User from "./User/User.jsx";

const githubDataFetcher = async () => {
  let data = await fetch("https://api.github.com/users/Karam-Abbas");
  let userData = await data.json();
  return userData;
};

export {
  Footer,
  Header,
  Home,
  About,
  Contact,
  Github,
  User,
  githubDataFetcher,
};
