import React, { useEffect, useState } from "react";

import { getCards } from "../foundation/getCards";
import { ICard } from "../foundation/ICard";

export const Card = () => {
  const cardId: number = 1;
  const [toDoCard, setToDoCard] = useState<ICard>({});

  useEffect(() => {
    getCards(cardId).then((response: ICard) => {
      setToDoCard(response);
    });
  }, []);

  return (
    <div
      style={{ border: "2px dotted red", padding: 20 }}
      data-e2e="REMOTE_COMPONENT_INFO"
    >
      Id: {toDoCard.id}
      Name: {toDoCard.name}
    </div>
  );
};

export default Card;
