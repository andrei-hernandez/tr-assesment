import { useContext } from 'react'
import { CardContext } from '../../context/cardContext'
import { AtmOptionsText } from '../optionsText'
import { OwnerNameText } from '../ownerNameText'
import { AtmOptionsTextSides } from '../../types'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'

export const AccountDetails = () => {

  const cardContext = useContext(CardContext) 
  return (
    <div className="atm-screen-details-container">
      <OwnerNameText 
      ownerName={cardContext.card?.ownerName ?? ""}
      additionalText='Please make a choice...'/>
      <div className="atm-actions">
        <AtmSideActionsLayout side={AtmOptionsTextSides.left}>
          <AtmOptionsText isRight={false} optionText='Withdraw'/>
          <AtmOptionsText isRight={false} optionText='Deposit'/>
        </AtmSideActionsLayout>
        <AtmSideActionsLayout side={AtmOptionsTextSides.right}>
          <AtmOptionsText isRight={true} optionText='Exit'/>
          <AtmOptionsText isRight={true} optionText='Balance'/>
          <AtmOptionsText isRight={true} optionText='Re-enter PIN'/>          
        </AtmSideActionsLayout>
      </div>
    </div>
  )
}
