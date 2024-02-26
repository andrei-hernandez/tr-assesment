import {
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  TabList,
  Tab,
} from "@fluentui/react-components";
import { Card } from "../types";
import { useState } from "react";

interface SelectCardDialogProps {
  cardsData: Array<Card>
  onSubmit: (card: Card) => void
}

export const SelectCardDialog: React.FC<SelectCardDialogProps> = ({ cardsData, onSubmit }) => {

  const [currentCard, setCurrentCard] = useState<Card>(cardsData[0])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(currentCard)
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <DialogSurface>
      <form onSubmit={handleSubmit}>
        <DialogBody>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <TabList defaultSelectedValue={currentCard.cardNumber} vertical>              
              {
                cardsData.map((card: Card) => (
                  <Tab key={card.cardNumber} value={card.cardNumber} onClick={() => setCurrentCard(card)}>
                    Type: {capitalizeFirstLetter(card.cardType.toLowerCase())} - Number: {card.cardNumber} - PIN: {card.pin}
                  </Tab>
                ))
              }
            </TabList>
          </DialogContent>
          <DialogActions>            
            <Button type="submit" appearance="primary">Do Something</Button>
          </DialogActions>
        </DialogBody>
      </form>
    </DialogSurface>
  );
};