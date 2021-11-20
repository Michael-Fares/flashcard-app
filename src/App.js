import './App.css';
import React, { useState } from 'react'

import FlashcardList from './FlashcardList'

const sampleFlashcards = [
  {
    id: 1,
    question: 'بصل',
    answer: 'onion',
    category: 'Food'
  },
  {
    id: 2,
    question: 'تفاحة',
    answer: 'apple',
    category: 'Food'
  },
  {
    id: 3,
    question: 'باذنجان',
    answer: 'eggplant',
    category: 'Food'
  },
  {
    id: 4,
    question: 'حب',
    answer: 'love',
    category: 'Feelings'
  },
  {
    id: 5,
    question: 'أمل',
    answer: 'hope',
    category: 'Feelings'
  },
  {
    id: 6,
    question: 'تردّد',
    answer: 'hesitation',
    category: 'Feelings'
  },
  {
    id: 7,
    question: 'أخ',
    answer: 'brother',
    category: 'Family'
  },
  {
    id: 8,
    question: 'أخت',
    answer: 'sister',
    category: 'Family'
  },
  {
    id: 9,
    question: 'أمّ',
    answer: 'mother',
    category: 'Family'
  }
]

const App = () => {

  const [flashcards, setFlashcards] = useState(sampleFlashcards)

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}



export default App;
