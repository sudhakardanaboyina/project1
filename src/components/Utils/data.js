import frontImg from '../../assets/front.png';
import packageBoxImg from '../../assets/package-box.png';
import personalGrowthImg from '../../assets/personal-growth.png';
import development from '../../assets/development.png';
const SKILLS = [
    {
        title: "Frontend",
        icon: frontImg, // Use the imported image as the icon
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "80%" },
            { skill: "Bootstrap5", percentage: "75%" },
            { skill: "Javascript", percentage: "75%" },
            { skill: "React.js", percentage: "80%" },
        ]
    },
    {
        title: "Tools",
        icon: packageBoxImg, // Use the imported image as the icon
        skills: [
            { skill: "GitHub", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Responsive Design", percentage: "75%" },
            { skill: "Jira Tool", percentage: "75%" },
        ],
    },

    {
        title: "Soft Skills",
        icon: personalGrowthImg, // Use the imported image as the icon
        skills: [
            { skill: "Problem-Solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "80%" },
            { skill: "Smart thinking", percentage: "75%" },
        ],
    },
    {
        title: "Learning Skills",
        icon: development, // Use the imported image as the icon
        skills: [
            { skill: "Python", percentage: "70%" },
            { skill: "Django", percentage: "60%" },
            { skill: "Sql", percentage: "50%" },
        ],
    },

];

export default SKILLS;



export const WORK_EXPERIENCE=[
    {
        title:"Software Engineer at Aptsol Global Tech Private Limited",
        date:"May 2022 - Present",
        responsibilities:[
            "Frontend developers are responsible for implementing user interfaces (UI) based on design specifications.",
            "Write clean and maintainable code using HTML, CSS, and JavaScript.",
            "Ensure that the UI is responsive and works well across different devices and screen sizes.",
            "Optimize frontend code and assets to improve website performance and loading times.",
            "Ensure that the UI functions correctly and looks consistent across different web browsers.",
            "Frontend developers collaborate with UX/UI designers to implement design mockups and prototypes.",

        ],
    },

];