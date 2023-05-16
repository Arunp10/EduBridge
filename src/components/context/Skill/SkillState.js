import React,{useState} from 'react'
import SkillContext from './SkillContext'

const  SkillState = (props)=> {
    const host = 'http://localhost:8080'
    const initialSkill = []
    const [Skill, setSkill] = useState(initialSkill);

  //Add Skill Function
  const AddSkill = async (skillName) => {

    // API Call 
    const response = await fetch(`${host}/api/SkillRoute/AddSkill`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
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