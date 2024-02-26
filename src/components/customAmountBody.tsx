import { useContext } from 'react'
import { CardContext } from '../context/cardContext';
import { OnHoldBalanceTypes } from '../types';

export const CustomAmountBody: React.FC<{ mode: OnHoldBalanceTypes }> = ({ mode }) => {

  const cardContext = useContext(CardContext)

  return (
    <div className="atm-custom-amount-body">
      <div className="atm-custom-amount-available">
        Available balance: {cardContext.card?.balance ?? 0}
      </div>
      <input
        className="atm-custom-amount-input"
        type='number'
        title='custom-amount'
        min={0}
        onChange={(e) => 
          cardContext.onHoldBalance(Number(e.target.value), mode)}
        max={cardContext.card?.balance} />      
    </div>
  )
}