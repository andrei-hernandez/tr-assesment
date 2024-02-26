export enum ScreenViews {
  initial = 'initial',
  accountDetails = 'accountDetails',
  balance = 'balance',
  withdraw = 'withdraw',
  withdrawConfirm = 'withdrawConfirm',
  withdrawCustomAmount = 'withdrawCustomAmount',
  confirm = 'confirm',
  deposit = 'deposit',
  depositConfirm = 'depositConfirm',
  depositCustomAmount = 'depositCustomAmount'
}

export interface AtmViewProps extends AtmInitialViewProps {}

export interface AtmInitialViewProps {
  onUpdatePin: (pin: string) => void  
}

export interface Card {
  id: string
  cardNumber: string
  ownerName: string
  pin: string
  cardType: CardType
  balance: number  
}

enum CardType {
  STAR = 'STAR',
  PULSE = 'PULSE',
  MAESTRO = 'MAESTRO',
  MASTERCARD = 'MASTERCARD',
  PLUS = 'PLUS',
  VISA = 'VISA',
}

export enum AtmOptionsTextSides {
  left = 'left',
  right = 'right'
}

export enum OnHoldBalanceTypes {
  withdraw = "withdraw",
  deposit = "deposit"
}