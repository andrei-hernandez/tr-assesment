export const seedDataService = (): void => {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify([
      {
        id: "1",
        cardNumber: "1234567890123456",
        cardType: "STAR",
        ownerName: "Peter Parker",
        pin: "1234",
        balance: 2600,        
      },
      {
        id: "2",
        cardNumber: "2345678901234567",
        pin: "2345",
        ownerName: "Peter Parker",
        cardType: "PULSE",
        balance: 160,        
      },
      {
        id: "3",
        cardNumber: "3456789012345678",
        pin: "3456",
        ownerName: "Peter Parker",
        balance: 1300,
        cardType: "MAESTRO",        
      },
      {
        id: "4",
        cardNumber: "4567890123456789",
        pin: "4567",
        ownerName: "Peter Parker",
        balance: 1030,
        cardType: "MASTERCARD",
      },
      {
        id: "5",
        cardNumber: "5678901234567890",
        pin: "2345",
        ownerName: "Peter Parker",
        cardType: "PLUS",
        balance: 160,        
      },
      {
        id: "6",
        cardNumber: "8901234567890123",
        pin: "2345",
        ownerName: "Peter Parker",
        cardType: "VISA",
        balance: 160,
      },
    ]))
  }
}

export const validateData = (): boolean => !localStorage.getItem("accounts")