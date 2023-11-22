import "./Skills.css";

function Skill({ skill }) {
  return <div className="skill">{skill}</div>;
}

function Skills() {
  return (
    <div className="skills">
      <p className="skills-title">My tech skills</p>
      <div className="skills-list">
        <Skill skill="JavaScript" />
        <Skill skill="React" />
        <Skill skill="HTML" />
        <Skill skill="CSS/SCSS" />
        <Skill skill="TypeScript" />
        <Skill skill="Git" />
        <Skill skill="Redux" />
        <Skill skill="Jest" />
      </div>
    </div>
  );
}

export default Skills;
