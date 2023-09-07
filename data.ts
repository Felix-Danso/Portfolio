import {RiComputerLine } from "react-icons/ri"
import { IProject, IService, ISkill } from "./type"
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign,AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'
export const services:IService[]=[
    {
        title:"Frontend Development",
        about:"I can build a beautiful and scaleable SPA using <b> HTML</b><b> CSS </b> and <b> React.Js/Ts</br>. ",
        Icon:RiComputerLine,
    },
    {
        title:"Backend Development",
        about:"handle database, server, api using Express & other popular frameworks",
        Icon:FaServer,
    },
    {
        title:"API Development",
        about:"I can develop robust REST API using django-rest-api & Node API",
        Icon:AiOutlineApi,
    },
    {
        title:"Competitive Coder",
        about:"a daily solver in HackerRank and Leet Code",
        Icon:MdDeveloperMode,
    },
    {
        title:"UI/UX designer",
        about:"Stunning user interface designer using Figma and Framer",
        Icon:AiOutlineAntDesign,
    },
    {
        title:"Whatever",
        about:"I can build a beautiful and scaleable SPA using <b> HTML</b><b> CSS </b> and <React.Js/Ts ",
        Icon:RiComputerLine,
    },
]

export const languages:ISkill[] =[
    {
        name:'TypeScript',
        level:'40%',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'60%',
        Icon:BsCircleFill
    }, 
    {
        name:'React',
        level:'60%',
        Icon:BsCircleFill
    }, 
    {
        name:'React Native',
        level:'30%',
        Icon:BsCircleFill
    }, 
    {
        name:'Bootstrap',
        level:'30%',
        Icon:BsCircleFill
    },
    {
        name:'HTML,CSS',
        level:'70%',
        Icon:BsCircleFill
    },
]

export const tools:ISkill[] =[
    {
        name:'PhotoShop',
        level:'40%',
        Icon:BsCircleFill
    },
    {
        name:'Figma',
        level:'25%',
        Icon:BsCircleFill
    }, 
    {
        name:'Illustrator',
        level:'25%',
        Icon:BsCircleFill
    }, 
    {
        name:'code Blocks',
        level:'50%',
        Icon:BsCircleFill
    }, 
    {
        name:'Visual Studio',
        level:'65%',
        Icon:BsCircleFill
    }, 
]

// export const projects:IProject[] =[
//     {
//         name:"COVID Tracker",
//         description:"This app shows a statistical view about corona virus over the world",
//         image_path: "/images/covid.jpg",
//         deplayed_url:"https://covid-19-tracker-by-sumit.web.app/",
//         github_url:"https://github.com/Dey-Sumit/covid-19-tracker",
//         category:["react"],
//         key_techs:["React","Chart.js","Material UI"],
//
//     },
//     {
//         name: "Algorithm Visualizer",
//         image_path: "/images/algoVisual.png",
//         deployed_url: "https://visual-algorithm.web.app/",
//         github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
//         category: ["react"],
//         description:
//           "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
//         key_techs: ["React", "firebase", "Framer Motion"],
//       },
//
//       {
//         name: "Dev Talks",
//         image_path: "/images/dev.jpg",
//         deployed_url: "https://dev-talks.herokuapp.com/",
//         github_url: "https://github.com/Dey-Sumit/Dev-talks",
//         category: ["node", "mongo", "react"],
//         description:
//           "Social Media app for developers who can share project,create posts,etc...",
//         key_techs: [
//           "React",
//           "Redux",
//           "Node",
//           "Express",
//           "Mongo",
//           "REST API",
//           "Bootstrap",
//         ],
//       },
//
//       {
//         name: "Realtime Chat App",
//         image_path: "/images/chatapp.jpg",
//         deployed_url: "https://sumit-chat.netlify.app/",
//         github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
//         category: ["node", "react"],
//         description:
//           "Basic Realtime Chat App where one can create a room can talk to each other",
//         key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
//       },
//
//       {
//         name: "Tweeter Clone",
//         image_path: "/images/tweetme.jpg",
//         deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
//         github_url: "https://github.com/Dey-Sumit/tweetme",
//         category: ["django", "react"],
//         description:
//           "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
//         key_techs: ["React", "Django", "Django REST API"],
//       },
//
//       {
//         name: "Color Classification using tf.js",
//         image_path: "/images/color.jpg",
//         deployed_url: "!#",
//         github_url: "https://github.com/Dey-Sumit/color-classification",
//         category: ["express"],
//         description:
//           "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
//         key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
//       },
//       {
//         name: "YouTube using YouTube ",
//         image_path: "/images/youtubeClone.png",
//         deployed_url: "https://not-utube.web.app/",
//         github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
//         category: ["express"],
//         description:
//           'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
//         key_techs: [
//           "React",
//           "Redux",
//           "Firebase Auth",
//           "YouTube API",
//           "Sass",
//           "Bootstrap",
//         ],
//       },
//       {
//         name: "Football App",
//         image_path: "/images/football.png",
//         deployed_url: "https://o-my-goal.web.app/",
//         github_url: "https://github.com/Dey-Sumit/football-app",
//         category: ["react"],
//         description:
//           "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
//         key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
//       },
//     ];
