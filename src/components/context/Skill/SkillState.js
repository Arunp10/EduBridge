import React,{useState} from 'react'
import SkillContext from './SkillContext'

const  SkillState = (props)=> {
    const host = 'http://localhost:8080'
    const initialSkill = []
    const [Skill, setSkill] = useState(initialSkill);
    const [SkillData, setSkillData] = useState(initialSkill)

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

   //Function to get All Skill
 const getSkill = async () => {
  //API Calling:
  const response = await fetch(`${host}/api/SkillRoute/fetchSkill`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
    }
  });
  const json = await response.json();
  setSkill(json)
}
const fetchSkill = async (userId) => {
  //API Calling:
  const response = await fetch(`${host}/api/SkillRoute/fetchSkill/${userId}`, {
    method: "GET",
  });
  const json = await response.json();
  setSkillData(json)
}

  return (
    <SkillContext.Provider value={{Skill, AddSkill,getSkill,fetchSkill,SkillData}}>
        {props.children}
    </SkillContext.Provider>
  )
}
export default SkillState