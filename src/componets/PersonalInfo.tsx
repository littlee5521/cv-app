import React, { useState } from "react";

function PersonalInfo() {
  const [currentField, setcurrentField] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentField(e.target.value)
    console.log(currentField)
  }
  return (
    <form className="personalInfo">
      <input value={currentField} className="personalInfo__input" placeholder="What is your first Name?" onChange={onChangeName} />
      <p>{currentField}</p>
    </form>
  )
}

interface PersonalInfoProps {
  firstName: string
  lastName: string
}

export default PersonalInfo
