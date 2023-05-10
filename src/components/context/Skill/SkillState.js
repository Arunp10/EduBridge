import React,{useState} from 'react'
import SkillContext from './SkillContext'

const  SkillState = (props)=> {
    const host = 'http://localhost:8080'
    const initialSkill = []
    const [Skill, setSkill] = useState(initialSkill);

     //Add Education
  const AddSkill = async (skillName) => {

    // API Call 
    const response = await fetch(`${host}/api/SkillRoute/AddSkill`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYWQwZTcyZTFiMGU1MzMxNmUxNDIyIn0sImlhdCI6MTY4Mjc3NDIxNH0.7f6pttRqof4lnCHStZqmr5q9twXtNwQEoP2py6_tWd4"
      },
      //Sending Json in form of Data in Body
      body: JSON.stringify({skillName})
    });

    const skill = await response.json();
    console.log(skill);
    setSkill(Skill.concat(skill))
  }

  return (
    <SkillContext.Provider value={{Skill, AddSkill}}>
        {props.children}
    </SkillContext.Provider>
  )
}
export default SkillState