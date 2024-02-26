import React from 'react'
import { AtmOptionsTextSides } from '../types'

interface AtmOptionsTextProps {
  side: AtmOptionsTextSides
  children: React.ReactNode
}

export const AtmSideActionsLayout: React.FC<AtmOptionsTextProps> =
  ({ children, side }) => {    
    return (
      <div className={`atm-actions-${side}`}>
        {children}
      </div>
    )
  }
