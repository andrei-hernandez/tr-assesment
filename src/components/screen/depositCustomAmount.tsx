import { OwnerNameText } from '../ownerNameText'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'
import { AtmOptionsText } from '../optionsText'
import { AtmOptionsTextSides, OnHoldBalanceTypes } from '../../types'
import { CustomAmountBody } from '../customAmountBody'
import { useContext } from 'react'
import { CardContext } from '../../context/cardContext'

export const DepositCustomAmount = () => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-screen-details-container">
      <OwnerNameText
        ownerName={cardContext.card?.ownerName ?? ""}
        additionalText="Please enter the amount" />
      <CustomAmountBody mode={OnHoldBalanceTypes.deposit}/>
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
