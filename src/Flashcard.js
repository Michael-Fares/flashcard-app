import React, { useState } from 'react';

const Flashcard = (props) => {
  console.log(props.flashcard.options)
  const [flip, setFlip] = useState(false)
  return (
    <div className={`flashcard ${flip ? 'flip' : ''}`} onClick = {() => setFlip(!flip)} >
      {!flip ? 
      <div className="front">{props.flashcard.question}
        <div className="flashcard-options">
          {props.flashcard.options.map(option => {
            return <div className="flashcard-option" key={option}>{option}</div>
          })}
        </div>
      </div> : 
      <div className="back">{props.flashcard.answer}</div>}
    </div>
  )

}

export default Flashcard;