import React from 'react'
import { AtmScreenInitialView } from './initialView'
import { Outlet, Route, Routes } from 'react-router-dom'
import { AccountDetails } from './accountDetails'
import { ProtectedRoute } from '../protectedRoute'
import { Balance } from './balance'
import { Withdraw } from './withdraw'
import { Deposit } from './deposit'
import { WithdrawConfirm } from './withdrawConfirm'
import { WithdrawCustomAmount } from './withdrawCustomAmount'
import { DepositConfirm } from './depositConfirm'
import { DepositCustomAmount } from './depositCustomAmount'

export const Screen: React.FC<{ onUpdatePin: (pin: string) => void }> = ({ onUpdatePin }) => {
  return (
    <div className="atm-screen">
      <Routes>
        <Route path="/" element={<AtmScreenInitialView onUpdatePin={onUpdatePin} />} />
        <Route path="account-details" element={
          <ProtectedRoute>
            <AccountDetails />
          </ProtectedRoute>
        } />
        <Route path="balance" element={
          <ProtectedRoute>
            <Balance />
          </ProtectedRoute>
        } />
        <Route path="withdraw" element={<Outlet />}>
          <Route index element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>} />
          <Route path="confirm" element={
            <ProtectedRoute>
              <WithdrawConfirm />
            </ProtectedRoute>
          } />
          <Route path="custom-amount" element={
            <ProtectedRoute>
              <WithdrawCustomAmount />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="deposit" element={<Outlet />}>
          <Route index element={
            <ProtectedRoute>
              <Deposit />
            </ProtectedRoute>            
          } />
          <Route path="confirm" element={
          <ProtectedRoute>
            <DepositConfirm />
          </ProtectedRoute>
        } />
        <Route path="custom-amount" element={
          <ProtectedRoute>
            <DepositCustomAmount />
          </ProtectedRoute>
        } />
        </Route>        
      </Routes>
    </div>
  )
}
