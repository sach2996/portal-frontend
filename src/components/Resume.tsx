import "./../App.css";
export default function Resume() {
  const experienceDetails = [
    {
      id: 1,
      type: "Work",
      details: {
        company: "Infosys Ltd - Canada",
        designation: "Specialist Programmer",
        year: "Oct 2019 - Now",
        description: `Successfully managed team of developers and delivered complex full-stack web applications, 
        meeting tight deadlines and exceeding client expectations while following agile methodologies.
        Guided architectural decisions, emphasizing scalability and adherence to best practices.
        Applied deep knowledge of Angular, Node.js, MongoDB, and Express.js to develop scalable and efficient solutions.
        Ensured adherence to security standards and implemented measures to protect sensitive data.`,
      },
    },
    {
      id: 2,
      type: "Work",
      details: {
        company: "Infosys Ltd - India",
        designation: "Systems Engineer",
        year: "Aug 2017 - Sept 2019",
        description: `Collaborated with business teams to comprehend requirements and developed efficient solutions, 
        showcasing a deep understanding of business needs.
        Proficient in full-stack development with expertise in front-end technologies such as Angular, 
        React and back-end technologies like Node.js.
        Extensive experience in database management, including design, implementation, and optimization, using technologies like MongoDB and MySQL.
        Demonstrated agility in crafting fast and optimized solutions to address complex technical challenges.
        Contributed to the seamless integration of technology into business processes, ensuring the alignment of solutions
        with organizational objectives.`,
      },
    },
    {
      id: 3,
      type: "Work",
      details: {
        company: "Infosys Ltd - India",
        designation: "Intern",
        year: "Jan 2017 - May 2017",
        description: `Successfully completed a software development internship, where I gained hands-on experience with Python and 
        the MEAN stack. Applied my skills to create a comprehensive travel destination guide for cities, showcasing my ability to develop
         web applications using modern technologies.`,
      },
    },
  ];

  const skills = [
    {
      name: "Languages",
      description: "JavaScript, TypeScript, Python, HTML/CSS, ES6",
    },
    {
      name: "Frameworks/Libraries",
      description:
        "ReactJS, Angular, Node.js, NPM, Webpack, ExpressJS, NestJS, Jest, Mongoose, JWT, RestAPI, Prisma, Zod",
    },
    {
      name: "Database",
      description: "SQL (Postgres, MSSql, Oracle), NoSQL (Mongo, Cosmos)",
    },
    {
      name: "Developer Tools",
      description:
        "Git, Azure DevOps, AWS, Docker, Jira, Rancher, VS Code, SonarQube, RabbitMQ, PostMan, Insomnia, Nginx",
    },
    {
      name: "Certifications",
      description: `MTA: Introduction to Programming Using Python, 
      Microsoft Azure Fundamentals,
       Developing Solutions for Microsoft Azure, 
       AWS Certified Cloud Practitioner`,
    },
  ];
  return (
    <div className="resume-container">
      <div className="resume-items">
        <div className="left-section">
          <h4 style={{ borderBottom: "3px solid #11ABB0" }}>Work</h4>
        </div>

        <div className="right-section">
          {experienceDetails.map((item) => (
            <div id="item.id">
              <h3>{item.details.company}</h3>
              <p className="item-designation">
                {item.details.designation}
                <span> • </span>
                <em>{item.details.year}</em>
              </p>
              <div>{item.details.description}</div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      {skills.map((item) => (
        <div id="item.name" className="resume-items">
          <div className="left-section">
            <h4 style={{ borderBottom: "3px solid #11ABB0" }}>{item.name}</h4>
          </div>
          <div className="right-section">
            <div style={{ padding: "10px" }}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
