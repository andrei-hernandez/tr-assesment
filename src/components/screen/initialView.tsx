import React from 'react'
import { AtmInitialViewProps } from '../../types'

export const AtmScreenInitialView: React.FC<AtmInitialViewProps> = ({ onUpdatePin }) => {
  return (
    <div className="atm-initial-screen-container">
      <h2>Welcome to the ATM</h2>
      <div className="atm-card-pin-input">
        <input
          size={2}
          maxLength={4}
          autoFocus={true}
          type='password'
          title="card-pin"
          onChange={({ target: { value } }) => onUpdatePin(value)}
        />
      </div>
      <div className="atm-enter-pin-text">
        <div className="atm-enter-pin-text-content">Enter PIN</div>
        <div className="atm-pin-text-decoration" />
      </div>
    </div>
  )
}