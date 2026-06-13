import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import f1car from "../assets/images/MBAMGFoneCar.jpg"

const Template = ({title,desc1,desc2,formType}) => {
  return (
    <div className="auth-page">
        <div className="auth-form-section">
            <div className="auth-content">
                <h1>{title}</h1>
                <p>{desc1}</p>
                <p className="text-grey" style={{marginBottom: '2rem'}}>{desc2}</p>

                <div className="form-wrapper">
                    {
                        formType === "signup"? (<SignUpForm/>) : (<LoginForm />)
                    }
                </div>
            </div>
        </div>
        <div className="auth-image-section">
            <div className="auth-image-overlay"></div>
            <img src={f1car} alt="mercedes benz f1 car" loading="lazy" />
        </div>
    </div>
  )
}

export default Template