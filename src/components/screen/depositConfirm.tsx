import { useContext } from 'react'
import { OwnerNameText } from '../ownerNameText'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'
import { AtmOptionsTextSides } from '../../types'
import { AtmOptionsText } from '../optionsText'
import { CardContext } from '../../context/cardContext'

export const DepositConfirm = () => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-screen-details-container">
      <OwnerNameText ownerName={cardContext.card?.ownerName ?? ""} additionalText="Please confirm the amount" />
      <div className="confirm-amount-text">
        {cardContext.heldBalance?.amount ? `Amount: $${cardContext.heldBalance.amount}` : ""}
      </div>
      <div className="atm-actions">
        <AtmSideActionsLayout side={AtmOptionsTextSides.left}>
          <AtmOptionsText isRight={false} optionText="Back" />
        </AtmSideActionsLayout>
        <AtmSideActionsLayout side={AtmOptionsTextSides.right}>
          <AtmOptionsText isRight={true} optionText="Confirm" />
        </AtmSideActionsLayout>
      </div>
    </div>
  )
}
