import React from 'react'

export const AtmOptionsText: React.FC<{ isRight: boolean, optionText: string }> =
 ({ isRight, optionText }) => {
  return (
    <div className="atm-option-container">
      {!isRight && <div className="atm-option-decoration" />}
      <div className="atm-option-text">{optionText}</div>
      {isRight && <div className="atm-option-decoration" />}
    </div>
  )
}
