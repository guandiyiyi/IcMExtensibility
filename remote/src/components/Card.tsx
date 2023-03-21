import { useEffect, useState } from "react";

import { getCards } from "../foundation/getCards";
import { ICard } from "../foundation/ICard";

interface IProps {
  incident: any;
  token: string;
}

export const Card = ({ incident, token }: IProps) => {
  const [toDoCard, setToDoCard] = useState<ICard>({});

  useEffect(() => {
    if (incident) {
      getCards(incident.Id, token).then((response: ICard) => {
        setToDoCard(response);
      });
    }
  }, [incident, token]);

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
