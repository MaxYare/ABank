import React from 'react';
import Card from './Card';



const cases = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Inflation:5?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"  allowFullScreen></iframe>,    
    name: "Inflation",
    meaning: "inflation explained with apples",
    link: "http://youtube.com",
  },
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Pollution:b?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowfullscreen></iframe>,
    name: "Pollution",
    meaning: "printing money boosts consumption, production, and pollution",
  },
  {
    id: 3,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-War:b?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "Warfare",
    meaning:
      "evading tax uproar, igniting inflation and boosting USD value",
  },

];


function CardsField() {
  
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
      <dl className="dictionary">{cases.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
