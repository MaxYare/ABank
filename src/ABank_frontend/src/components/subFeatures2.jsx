import React from "react";
import Card from "./Card";



const freedom = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Freedom-Summary-Solution:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"  allowFullScreen></iframe>,    
    name: "Freedom-proposal",
    meaning: "tech's shiny perks clash with privacy concerns, but solutions exist",
  },
  
];

function CardsField() {
  const handle = useFullScreenHandle();
  
  const createCard = (props) => {
    return (
      <Card
        key={props.id}
        video={props.video}
        name={props.name}
        description={props.meaning}
        ID={props.id}
        link={props.link}

      />
    );
  };

  return (
    <div>
      <dl className="dictionary">{freedom.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
