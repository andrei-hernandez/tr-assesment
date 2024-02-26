import { OwnerNameText } from '../ownerNameText'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'
import { AtmOptionsText } from '../optionsText'
import { AtmOptionsTextSides, OnHoldBalanceTypes } from '../../types'
import { CustomAmountBody } from '../customAmountBody'
import { CardContext } from '../../context/cardContext'
import { useContext } from 'react'

export const WithdrawCustomAmount = () => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-screen-details-container">
      <OwnerNameText
        ownerName={cardContext.card?.ownerName ?? ""}
        additionalText="Please enter the amount" />
      <CustomAmountBody mode={OnHoldBalanceTypes.withdraw} />
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
