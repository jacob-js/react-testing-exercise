import { useState } from "react";
import { SkillsProps } from "./skills.types";

const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <ul>
        {
            skills.map(skill => <li key={skill}>{skill}</li>)
        }
    </ul>
    {isLoggedIn ? (
        <button>Start learning</button>
    ): (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
    )}
    </>
  )
}

export default Skills