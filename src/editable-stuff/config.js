// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Amit",
  middleName: "",
  lastName: "Kumar",
  message: "Competitive Programmer | Full Stack Developer | DS-Algo Expert",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/amit-kumar-azadi/",
    },
    {
      image: "fa-github",
      url: "https://github.com/amitazadi",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/amitazadi/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100007123728707",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/amitazadi/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/amit.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/amit.png"),
  imageSize: 350,
  message:
    "Hi! I'm Amit Kumar, pursuing my graduation from IIIT Gwalior with a degree IPG-MTech in Information Technology.  I'm most passionate about solving real life problems through programming and I aim to pursue this passion in the field of software engineering. In my free time, I like to do Comptitive Coding and to learn new algorithms.",
  resume:
    "https://drive.google.com/file/d/1_ksiGUCmNaUVI40Ifykkb5OQTb2SUHvJ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "amitazadi", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
  //"Colorhub", "Keeper-app", "tindog", "Portfolio"
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/amit.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/amit.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 90 },
    { name: "Python", value: 60 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 80 },
    { name: "Node", value: 75 },
    { name: "HTML/CSS", value: 70 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 75 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering Internship or MERN Stack opportunities! If you know any available positions, please feel free to email me at",
  email: "khurjaamit@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
