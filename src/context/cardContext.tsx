import React, { createContext, useCallback, useMemo, useState } from "react"
import { Card, OnHoldBalanceTypes } from "../types"
import { accountsService } from "../services/accountsService"

export interface CardContextType {
  card?: Card
  authenticateCard: (cardNumber: string, pin: string) => void
  onHoldBalance: (amount: number, mode: OnHoldBalanceTypes) => void,
  heldBalance?: HeldBalance,
  onConfirmWithdraw: () => void
  onConfirmDeposit: () => void
  exit: () => void
}

interface HeldBalance {
  amount: number
  mode: OnHoldBalanceTypes
}

export const CardContext = createContext<CardContextType>(null!);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [card, setCard] = useState<Card>(null!)
  const [heldBalance, setHeldBalance] = useState<HeldBalance>(null!)

  const authenticateCard = (cardNumber: string, pin: string) => {
    const card = accountsService().authenticateCard(cardNumber, pin)
    if (!card) return alert("Card not found")
    return setCard(card)
  }
  
  const onHoldBalance = (amount: number, mode: OnHoldBalanceTypes) => {
    setHeldBalance({ amount, mode })
  }

  const onConfirmWithdraw = useCallback(() => {
    if (heldBalance?.mode === OnHoldBalanceTypes.withdraw) {
      card.balance -= heldBalance.amount;
      accountsService().withdraw(card.cardNumber, heldBalance.amount);
      setHeldBalance(null!);
    }
  }, [card, heldBalance])
  
  const exit = () => setCard(null!)

  const onConfirmDeposit = useCallback(() => {
    if (heldBalance?.mode === OnHoldBalanceTypes.deposit) {
      card.balance += heldBalance.amount;
      accountsService().deposit(card.cardNumber, heldBalance.amount);
      setHeldBalance(null!);
    }
  }, [card, heldBalance])

  const value = useMemo(() => (
    {
      card,
      heldBalance,
      onHoldBalance,
      authenticateCard,
      onConfirmWithdraw,
      onConfirmDeposit,
      exit,
    }), [card, heldBalance, onConfirmWithdraw, onConfirmDeposit])

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}