import React from "react";
import Card from "./Card";


const listFeatures = [
  {
    id: 1,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/features-3min:b?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ" allowFullScreen></iframe>,    
    name: "3-Min Money",
    meaning: "set up your e-money faster than your gmail account!",
  },
  {
    id: 2,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/features-USSD:8?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "No Web Needed",
    meaning: "No internet? No problem! Send coins with the power of texting.",
  },
  {
    id: 3,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/features-send-FB:e?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "Send Coins to Your FB Friend",
    meaning:
      "Send coins to your pals via mobile number, email, or give Mark Zuckerberg a nudge on Facebook.",
  },
  {
    id: 4,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/dispute-transaction:d?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "Dispute Transaction",
    meaning: "Oops, sent coins to the wrong address? No worries, hit the 'Undo' button and blame it on your cat.",
  },
  {
    id: 5,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/features-shakePay:9?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "Shake&Pay in Store",
    meaning:
      "Shake your phones like you're in a dance-off and watch the magic of payment happen.",
  },
  {
    id: 6,
    video: <iframe src="https://odysee.com/$/embed/@AceBank:6/features-rewards:e?r=4Y7sLYA5dojVnUcyqFt2648Ki2BayUeQ"></iframe>,
    name: "Reward Your Holders",
    meaning:
      "Customize rewards for your business coins, because who doesn't want a free pet unicorn.",
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
      <br />
      <dl className="dictionary">{listFeatures.map(createCard)}</dl>
    </div>
  );
}

export default CardsField;
