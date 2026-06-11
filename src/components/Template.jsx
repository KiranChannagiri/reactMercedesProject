import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import f1car from "../assets/images/MBAMGFoneCar.jpg"
const Template = ({title,desc1,desc2,formType}) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>{desc1}</p>
            <p>{desc2}</p>

            {
                formType === "signup"? (<SignUpForm/>) : (<LoginForm />)
            }
        </div>
        <div>
            <img src={f1car} alt="mercedes benz f1 car" loading="lazy" width={300} height={300}/>
        </div>
    </div>
  )
}

export default Template