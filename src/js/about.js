import hello_word from "./hello";
import world_word from "./world.js";
import css from "../css/style.css";
import img from "../asset/about.jpg";

document.querySelector('#root').innerHTML = `about: ${hello_word} ${world_word}`;