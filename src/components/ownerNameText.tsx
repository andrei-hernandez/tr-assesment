import React from 'react'

interface OwnerNameTextProps {
  ownerName: string
  additionalText?: string
}

export const OwnerNameText: React.FC<OwnerNameTextProps> = ({ ownerName, additionalText }) => {
  return (
    <div className="atm-owner-name-text">
      <div>Hi {ownerName}!</div>
      <div>{additionalText}</div>
    </div>
  )
}
