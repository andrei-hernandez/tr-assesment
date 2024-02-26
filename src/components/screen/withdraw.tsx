import { useContext } from 'react'
import { OwnerNameText } from '../ownerNameText'
import { CardContext } from '../../context/cardContext'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'
import { AtmOptionsTextSides } from '../../types'
import { AtmOptionsText } from '../optionsText'

export const Withdraw = () => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-screen-details-container">      
      <OwnerNameText 
      ownerName={cardContext.card?.ownerName ?? ""}
      additionalText='Please specify a quantity' />
      <span>
        Available balance: {cardContext.card?.balance ?? 0}
      </span>
      <div className="atm-actions">
        <AtmSideActionsLayout side={AtmOptionsTextSides.left}>
          <AtmOptionsText isRight={false} optionText="Back"/>
        </AtmSideActionsLayout>
        <AtmSideActionsLayout side={AtmOptionsTextSides.right}>
          <AtmOptionsText isRight={true} optionText="$50"/>
          <AtmOptionsText isRight={true} optionText="$100"/>
          <AtmOptionsText isRight={true} optionText="$200"/>
          <AtmOptionsText isRight={true} optionText="Other"/>
        </AtmSideActionsLayout>
      </div>      
    </div>
  )
}