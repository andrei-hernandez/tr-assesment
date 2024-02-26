import React, { ButtonHTMLAttributes } from 'react'

export const AtmButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { isRight: boolean }> = ({isRight, ...props}) => {
  return (
    <div className="atm-button-container">
      {isRight && <div className="atm-button-decoration"/>}
      <button {...props} />
      {!isRight && <div className="atm-button-decoration"/>}
    </div>
  )
}
