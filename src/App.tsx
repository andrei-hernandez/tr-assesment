import { useContext, useEffect, useState } from 'react'
import atmSign from './assets/atm_sign.png'
import './App.css'
import { AtmButton } from './components/atmButton'
import { Card, OnHoldBalanceTypes, ScreenViews } from './types'
import { Screen } from './components/screen'
import { seedDataService, validateData } from './services/seedDataService'
import { useNavigate } from 'react-router-dom'
import { CardContext } from './context/cardContext'
import cardsBanner from './assets/creditcard_sprite.png'
import { Dialog, FluentProvider, webLightTheme } from '@fluentui/react-components'
import { SelectCardDialog } from './components/cardSelectorDialog'
import systems from "./assets/systems.png"
import graffiti from "./assets/graffiti.png"
import stickerGraffiti from "./assets/sticker_graf.png"

export default function App() {
  useEffect(() => {
    validateData() && seedDataService()
  }, [])

  const card = useContext(CardContext)
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState<ScreenViews>(ScreenViews.initial)
  const [pin, setPin] = useState<string>("")// Re-render the entire page when the pin is updated
  const [selectedCard, setSelectedCard] = useState<Card>(null!)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  interface Actions {
    [key: number]: {
      [key: string]: () => void
    }
  }

  const actions: Actions = {
    3: {
      [ScreenViews.accountDetails]: () => {
        setCurrentView(ScreenViews.withdraw)
        navigate('/withdraw')
      }
    },
    4: {
      [ScreenViews.accountDetails]: () => {
        setCurrentView(ScreenViews.deposit)
        navigate('/deposit')
      },
      backButton: () => {
        setCurrentView(ScreenViews.accountDetails)
        navigate('/account-details')
      }
    },
    5: {
      [ScreenViews.withdraw]: () => {
        card.onHoldBalance(50, OnHoldBalanceTypes.withdraw)
        navigate('/withdraw/confirm')
        setCurrentView(ScreenViews.withdrawConfirm)
      },
      [ScreenViews.deposit]: () => {
        card.onHoldBalance(50, OnHoldBalanceTypes.deposit)
        navigate('/deposit/confirm')
        setCurrentView(ScreenViews.depositConfirm)
      }
    },
    6: {
      [ScreenViews.withdraw]: () => {
        card.onHoldBalance(100, OnHoldBalanceTypes.withdraw)
        navigate('/withdraw/confirm')
        setCurrentView(ScreenViews.withdrawConfirm)
      },
      [ScreenViews.deposit]: () => {
        card.onHoldBalance(100, OnHoldBalanceTypes.deposit)
        navigate('/deposit/confirm')
        setCurrentView(ScreenViews.depositConfirm)
      },
      [ScreenViews.accountDetails]: () => {
        card.exit()
        setCurrentView(ScreenViews.initial)
        navigate('/')
        alert('Re-enter PIN')
      }
    },
    7: {
      [ScreenViews.withdraw]: () => {
        card.onHoldBalance(200, OnHoldBalanceTypes.withdraw)
        navigate('/withdraw/confirm')
        setCurrentView(ScreenViews.withdrawConfirm)
      },
      [ScreenViews.deposit]: () => {
        card.onHoldBalance(200, OnHoldBalanceTypes.deposit)
        navigate('/deposit/confirm')
        setCurrentView(ScreenViews.depositConfirm)
      },
      [ScreenViews.accountDetails]: () => {
        setCurrentView(ScreenViews.balance)
        navigate('/balance')
      }
    },
    8: {
      [ScreenViews.initial]: () => {
        card.authenticateCard(selectedCard.cardNumber, pin)
        setCurrentView(ScreenViews.accountDetails)
        navigate('/account-details')
        alert('Authenticated')
      },
      [ScreenViews.withdraw]: () => {
        navigate('withdraw/custom-amount')
        setCurrentView(ScreenViews.withdrawCustomAmount)
      },
      [ScreenViews.deposit]: () => {
        navigate('deposit/custom-amount')
        setCurrentView(ScreenViews.depositCustomAmount)
      },
      [ScreenViews.withdrawConfirm]: () => {
        setTimeout(() => {
          card.onConfirmWithdraw()
          alert('Withdrawal successful, please take your money')
          navigate('/account-details')
          setCurrentView(ScreenViews.accountDetails)
        }, 1500)
      },
      [ScreenViews.depositConfirm]: () => {
        alert('Insert your money please')
        setTimeout(() => {
          card.onConfirmDeposit()
          alert('Deposit successful')
          navigate('/account-details')
          setCurrentView(ScreenViews.accountDetails)
        }, 1500)
      },
      [ScreenViews.withdrawCustomAmount]: () => {
        setTimeout(() => {
          card.onConfirmWithdraw()
          alert('Withdrawal successful, please take your money')
          navigate('/account-details')
          setCurrentView(ScreenViews.accountDetails)
        }, 1500)
      },
      [ScreenViews.depositCustomAmount]: () => {
        alert('Insert your money please')
        setTimeout(() => {
          card.onConfirmDeposit()
          alert('Deposit successful')
          navigate('/account-details')
          setCurrentView(ScreenViews.accountDetails)
        }, 1500)
      },
      [ScreenViews.accountDetails]: () => {
        card.exit()
        setCurrentView(ScreenViews.initial)
        navigate('/')
        alert('Re-enter PIN')
      }
    }
  }

  const handlePinUpdate = (pin: string) => {
    setPin(pin)
  }

  const onSelectCard = (card: Card) => {
    setSelectedCard(card)
    setIsDialogOpen(false)
  }

  useEffect(() => {
    if (!selectedCard) {
      setIsDialogOpen(true)
    }
  }, [selectedCard])

  return (
    <div className="container">
      <FluentProvider theme={webLightTheme}>
        <Dialog open={isDialogOpen}
          onOpenChange={(_, data) => {
            if (data.type === "backdropClick") return
            if (data.type === "escapeKeyDown") return
            setIsDialogOpen(data.open)
          }}
        >
          <SelectCardDialog cardsData={card.getAllAccounts()} onSubmit={onSelectCard} />
        </Dialog>
      </FluentProvider>
      <div className="atm-sign">
        <img alt="grafiti" className="atm-sign-grafiti" src={graffiti}/>
        <img src={atmSign} alt="atm-sign" className='atm-sign' />
      </div>
      <div className="atm-body">
        <div className='atm-header'>
          <img src={cardsBanner} alt="cards-banner" className='atm-cards-banner' />
          <div className={`atm-card-element ${selectedCard?.cardType === "STAR" && "active"}`} />
          <div className={`atm-card-element ${selectedCard?.cardType === "PULSE" && "active"}`} />
          <div className={`atm-card-element ${selectedCard?.cardType === "MAESTRO" && "active"}`} />
          <div className={`atm-card-element ${selectedCard?.cardType === "MASTERCARD" && "active"}`} />
          <div className={`atm-card-element ${selectedCard?.cardType === "PLUS" && "active"}`} />
          <div className={`atm-card-element ${selectedCard?.cardType === "VISA" && "active"}`} />
        </div>
        <div className="atm-user-interface">
          <div className="atm-button-list-left">
            <AtmButton title="1" type="button" className="atm-button" isRight={false} />
            <AtmButton title="2" type="button" className="atm-button" isRight={false} />
            <AtmButton title="3" type="button" className="atm-button" isRight={false} onClick={() => actions[3][currentView]()} />
            <AtmButton title="4" type="button" className="atm-button" isRight={false} onClick={() => {
              //This could be a litte bit tricky but it avoids write the same function for the 4 button in the deposit, withdraw and balance views
              //A better approach could be extract the logic from actions[4].backButton() to a function and call it here as the same way of the other buttons
              //Or move the buttons dictionary object to a Map like actionsMap.get(4)[currentView](), could be more readable, but i think it's not necessary at all
              (currentView !== ScreenViews.initial && currentView !== ScreenViews.accountDetails)
                ? actions[4].backButton() : actions[4][currentView]()
            }} />
          </div>
          <Screen onUpdatePin={handlePinUpdate} />
          <div className="atm-button-list-right">
            <AtmButton title="5" type="button" className="atm-button" isRight={true} onClick={() => actions[5][currentView]()} />
            <AtmButton title="6" type="button" className="atm-button" isRight={true} onClick={() => actions[6][currentView]()} />
            <AtmButton title="7" type="button" className="atm-button" isRight={true} onClick={() => actions[7][currentView]()} />
            <AtmButton title="8" type="button" className="atm-button" isRight={true} onClick={() => actions[8][currentView]()} />
          </div>
        </div>
        <div className="atm-systems-logo">
          <img alt='systems' src={systems} />
        </div>
        <div className='atm-sticker-graffiti'>
          <img alt="grafiti" src={stickerGraffiti}/>
        </div>
        <button
          className="atm-select-card-button"
          type='button'
          onClick={() => {
            setSelectedCard(null!)
            setIsDialogOpen(true)
          }}>Select another card</button>
      </div>
    </div>
  )
}