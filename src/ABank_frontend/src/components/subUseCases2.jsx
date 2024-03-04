import React from 'react';
import Card from './Card';



const money = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Inflation-solution:4?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowFullScreen></iframe>,    
    name: "Inflation-proposal",
    meaning: "individual currencies: decentralized exchange, automated pricing, financial autonomy",
    link: "http://youtube.com",
  },
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-Pollution-solution:1?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowfullscreen></iframe>,
    name: "Pollution-proposal",
    meaning: "save the planet one dollar at a time",
    link: "http://google.com",
  },
  {
    id: 3,
    video: <iframe src="https://odysee.com/$/embed/@myState:b/Money-War-solution:a?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowFullScreen></iframe>,
    name: "War-proposal",
    meaning:
      "printing money? Citizens want to know! Let's vote on it!",
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
      <dl className="dictionary">{money.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
