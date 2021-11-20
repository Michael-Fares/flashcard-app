import React from 'react';
import Flashcard from './Flashcard'

const FlashcardList = (props) => {
  return (
    <div className="card-flexbox">
      {props.flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id}/>
      })}
    </div>
  )

}

export default FlashcardList;
