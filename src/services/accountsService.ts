import { Card } from "../types"

const authenticateCard = (cardNumber: string, pin: string): Card | undefined => {
  const accounts: Array<Card> = JSON.parse(localStorage.getItem("accounts")!)
  const card = accounts.find((account: Card) => account.cardNumber === cardNumber && account.pin === pin)
  if (card) {
    return card
  }
}

const withdraw = (cardNumber: string, amount: number) => {
  const accounts: Array<Card> = JSON.parse(localStorage.getItem("accounts")!)
  const account = accounts.find((account: Card) => account.cardNumber === cardNumber)
  if (account) {
    account.balance -= amount
    localStorage.setItem("accounts", JSON.stringify(accounts))
  }
}

const deposit = (cardNumber: string, amount: number) => {
  const accounts: Array<Card> = JSON.parse(localStorage.getItem("accounts")!)
  const account = accounts.find((account: Card) => account.cardNumber === cardNumber)
  if (account) {
    account.balance += amount
    localStorage.setItem("accounts", JSON.stringify(accounts))
  }
}

const getAllAccounts = (): Array<Card> => {
  return JSON.parse(localStorage.getItem("accounts")!)
}

export const accountsService = () => {
  return {
    authenticateCard,
    withdraw,
    deposit,
    getAllAccounts,
    getAccount: () => { },
  }
}