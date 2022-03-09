import Chef from "../images/sous-chef.PNG";
import Fitness from "../images/fitness_tracker.PNG";
import Employee from "../images/employee_tracker.gif";
import Note from "../images/note_taker.gif";
import Nphase from "../images/nphase3.png";
import Pet from "../images/pet-seeker.PNG";
import PortfolioGen from "../images/portfolioGenerator.PNG";


export const JSArray = [
  
  {
    cardImg: Pet,
    cardTitle: "Pet Seeker",
    cardDescription:
    "Pet Seeker is a user-friendly website that can help you find your new four-legged friend! Imports data from PetFinder The Dog APIs",
    link: (
      <a href="https://brandonnorsworthy.github.io/pet-seeker/"><button className=".link">Deployed App</button></a>
    ),
    repo: <a href="https://github.com/mwallis5110/pet-seeker"><button>Repository</button></a>,
  },
  {
    cardImg: Note,
    cardTitle: "ExpressJS Note Taker",
    cardDescription: "A note taking app built using ExpressJS.",
    repo: (
      
        <a href="https://github.com/mwallis5110/Note_Taker_HW11"><button>Repository</button></a>
      
    ),
  },
];

export const ReactArray = [
  {
    cardImg: Nphase,
    cardTitle: "NPhase Records Portfolio",
    cardDescription:
      "A ReactJS-based portfolio website created for NPhase Records. **Under Construction**",
    link: <a href="https://music-portfolio-20.herokuapp.com/"><button>Deployed App</button></a>,
    repo: <a href="https://github.com/mwallis5110/Music_Portfolio"><button>Repository</button></a>,
  },
  {
    cardImg: "",
    cardTitle: "My Portfolio",
    cardDescription:
      "My personal portfolio, the website you're on right now. Built with ReactJS and NodeJS.",
    link: <a href="https://www.masonwallisatx.com/"><button>Deployed App</button></a>,
    repo: <a href="https://github.com/mwallis5110/My_Portfolio"><button>Repository</button></a>,
  },
];

export const RelationalArray = [
  {
    cardImg: Employee,
    cardTitle: "Employee Database",
    cardDescription:
      "Using Node.js, MYSQL, and InquirerJS, this program manages a company's employee database via a command-line interface.",
    repo: <a href="https://github.com/mwallis5110/Employee_Tracker_HW12"><button>Repository</button></a>,
  },
  {
    cardImg: Chef,
    cardTitle: "Sous Chef",
    cardDescription:
      "A full-stack web application that allows a user to browse a recipe library and save recipes to their own user homepage/dashboard. Uses NodeJS, Express.js, Handlebars, MySQL, and Sequelize.",
    link: <a href="https://sous-chef-project-2.herokuapp.com/"><button>Deployed App</button></a>,
    repo: <a href="https://github.com/mwallis5110/Sous-Chef"><button>Repository</button></a>,
  },
];

export const NonRelationalArray = [
  {
    cardImg: Fitness,
    cardTitle: "Fitness Tracker",
    cardDescription:
      "This program uses NoSQL and MongoDB to input and track your workout stats.",
    link: <a href="https://fitness-tracker-hw-15.herokuapp.com/"><button>Deployed App</button></a>,
    repo: <a href="https://github.com/mwallis5110/Fitness_Tracker_HW_15"><button>Repository</button></a>,
  },
  {
    cardImg: PortfolioGen,
    cardTitle: "Portfolio Generator",
    cardDescription:
      "An application that utilizes GraphQL, React, and MongoDB to generate a detailed and shareable portfolio based on user inputs.",
    link: <a href="https://react-portfolio-generator-uta.herokuapp.com/"><button>Deployed App</button></a>,
    repo: <a href="https://github.com/mwallis5110/React_Portfolio_Generator"><button>Repository</button></a>,
  },
];

export const JavaArray = [];
