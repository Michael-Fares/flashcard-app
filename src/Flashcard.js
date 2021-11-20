import React, { useState } from 'react';

const Flashcard = (props) => {
  const [flip, setFlip] = useState(false)
  return (
    <div className={`flashcard ${flip ? 'flip' : ''}`} onClick = {() => setFlip(!flip)} >
      {!flip ? 
      <div className="front">{props.flashcard.question}</div> : 
      <div className="back">{props.flashcard.answer}</div>}
    </div>
  )

}

export default Flashcard;