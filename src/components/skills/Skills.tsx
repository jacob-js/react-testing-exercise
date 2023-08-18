import { SkillsProps } from "./skills.types";

const Skills = (props: SkillsProps) => {
    const { skills } = props;

  return (
    <>
    <ul>
        {
            skills.map(skill => <li key={skill}>{skill}</li>)
        }
    </ul>
    </>
  )
}

export default Skills