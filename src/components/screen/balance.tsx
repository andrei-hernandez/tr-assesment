import { useContext } from 'react'
import { OwnerNameText } from '../ownerNameText'
import { CardContext } from '../../context/cardContext'
import { AtmSideActionsLayout } from '../atmSideActionsLayout'
import { AtmOptionsTextSides } from '../../types'
import { AtmOptionsText } from '../optionsText'

export const Balance = () => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-screen-details-container">
      <OwnerNameText ownerName={cardContext.card?.ownerName ?? ""} />
      <div className='atm-balance'>
        Total Balance: {cardContext.card?.balance ?? 0}
      </div>
      <div className="atm-actions">
        <AtmSideActionsLayout side={AtmOptionsTextSides.left}>
          <AtmOptionsText isRight={false} optionText='Back' />
        </AtmSideActionsLayout>        
      </div>
    </div>
  )
}
