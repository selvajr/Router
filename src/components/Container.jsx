import React from "react";
import Card from "./Card";
import "./Container.css";
const Container = ({ select = "all" }) => {
  const data = [
    {
      id: "full-stack-development",
      title: "Best Full-Stack Development Project Ideas in 2024",
      img: "person-front-computer-working-html-1200x801.jpg",
      creater: "Isha Sharma",
    },
    {
      id: "full-stack-development",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      img:
        "how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      creater: "Meghana D",
    },
    {
      id: "full-stack-development",
      title: "How does Apache work? A detailed introduction to Apache",
      img: "1_6rDcIgFJQldloIERiUSmzw.webp ",
      creater: "Tushar Vinocha",
    },
    {
      id: "full-stack-development",
      title: "10 Best Database Management Systems",
      img: "DBMS1.webp",
      creater: "Isha Sharma",
    },
    {
      id: "full-stack-development",
      title: `Hot Topics That You Need To Know Syllabus`,
      img: "Full-Stack-Developer-course-syllabus.webp",
      creater: "Archana",
    },
    {
      id: "full-stack-development",
      title: "6 Essential Prerequisites For Learning ReactJS",
      img: "react-2048x1072.jpg",
      creater: "Ramkumar",
    },
    {
      id: "full-stack-development",
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      img: "html-css-collage-concept-with-person.jpg ",
      creater: "Isha Sharma",
    },
    {
      id: "full-stack-development",
      title: "Best Web Development Roadmap for Beginners 2024",
      img: "1.jpg",
      creater: "Isha Sharma",
    },
    {
      id: "full-stack-development",
      title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
      img: "full_stack_developer_roadmap_in_2024.webp  ",
      creater: "Meghana D",
    },
    {
      id: "data-science",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      img: "Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      creater: "Isha Sharma",
    },
    {
      id: "data-science",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      img: "Real-World-Data-Science-Examples-1200x628.webp ",
      creater: "Lukesh S",
    },
    {
      id: "data-science",
      title: " Can A Commerce Student Do Data Science?",
      img: "5.webp ",
      creater: "Saakshi Priyadarshini",
    },
    {
      id: "data-science",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      img:
        "Feature-image-Top-Product-Based-Companies-for-Data-Scientists-768x480.webp",
      creater: "Jaishree Tomar",
    },
    {
      id: "data-science",
      title: "How to become a Data Scientist after Mechanical Engineering?",
      img: "paper-analysis-2-768x512.jpg ",
      creater: "Lahari Chandana",
    },
    {
      id: "data-science",
      title: "Roles and Responsibilities of a Data Scientist",
      img: "image-4-1200x676.webp",
      creater: "Jaishree Tomar",
    },
    {
      id: "data-science",
      title: "How Long Would It Take to Learn Data Science?",
      img: "How-Long-Would-It-Take-to-Learn-Data-Science-768x402.webp ",
      creater: "Meghana D",
    },
    {
      id: "data-science",
      title: "10 Best Data Science Online Courses for Beginners | 2024 ",
      img:
        "feature-image-Best-Data-Science-Online-Courses-for-Beginners-768x384.webp",
      creater: "Srinithi Sankar",
    },
    {
      id: "data-science",
      title: " Everything about Data Scientist Salary in India | 2024",
      img: "Everything-about-Data-Scientist-Salary-in-India-2023-768x402.png ",
      creater: "Srinithi Sankar",
    },{
      id: "cyber-security",
      title: " Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      img: "Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.webp",
      creater: "Tushar Vinocha",
    },{
      id: "cyber-security",
      title: " Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      img: "Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      creater: "Jaishree Tomar",
    },{
      id: "cyber-security",
      title: "What Is Hacking? Types of Hacking &amp; More ",
      img: "Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      creater: "Meghana D",
    },{
      id: "cyber-security",
      title: "8 Different Types of Cybersecurity and Threats Involved ",
      img: "Teal-Illustration-Digital-Business-Blog-Banner-1-1200x675.webp ",
      creater: "Tushar Vinocha",
    },{
      id: "cyber-security",
      title: "What is Cybersecurity? Importance and its uses",
      img: "cybersecuity-.gif",
      creater: "Tushar Vinocha",
    },{
      id: "cyber-security",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb... ",
      img: "8bfd01c18be1b5059bc0d7770d9dabf1.webp",
      creater: "Tushar Vinocha",
    },{
      id: "cyber-security",
      title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications! ",
      img: "Blog-9-768x402.webp",
      creater: "Tushar Vinocha",
    },{
      id: "cyber-security",
      title: " The Ultimate Cybersecurity Roadmap for Beginners",
      img: "The-Ultimate- Cybersecurity-Roadmap-for-Beginners.webp",
      creater: "Srinithi Sankar",
    },
  ];

  if (select == "all") {
    return (
      <div className="cardnew">
        {data.map(
          (data, ind) =>
            data.id && (
              <Card
                key={ind}
                title={data.title}
                img={data.img}
                creater={data.creater}
              />
            )
        )}
      </div>
    );
  } else {
    return (
      <div className="cardnew">
        {data.map(
          (data, ind) =>
            select == data.id && (
              <Card
                key={ind}
                title={data.title}
                img={data.img}
                creater={data.creater}
              />
            )
        )}
      </div>
    );
  }
};

export default Container;
