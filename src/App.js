import './App.css';
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import FlashcardList from './FlashcardList'

const App = () => {

  const categoryEl = useRef()

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10&category=9')
    .then(res => {
        let cleanedData = res.data.results.map((questionItem, index) => {
          const answer = decoder(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map(a => decoder(a)), 
           answer
          ]
          return {
            id: `${index}-${Date.now()}`,
            question: decoder(questionItem.question),
            answer: answer,
            // sort the incorrect answers and the correct answer into one array randomly
            options: options.sort(() => Math.random() - .5)
          }
        })
        console.log('cleaned Data', cleanedData)
        setFlashcards(cleanedData)
    })
  },[])

  useEffect(()=> {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => setCategories(res.data.trivia_categories))
  },[])

  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  // hack to get rid of HTML encoded characters
  const decoder = (str) => {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str;
    return textArea.value;
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('https://opentdb.com/api.php?amount=10', {
      params: {
        category: categoryEl.current.value
      }
    })
    .then(res => {
      let cleanedData = res.data.results.map((questionItem, index) => {
        const answer = decoder(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a => decoder(a)), 
         answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decoder(questionItem.question),
          answer: answer,
          // sort the incorrect answers and the correct answer into one array randomly
          options: options.sort(() => Math.random() - .5)
        }
      })
      console.log('cleaned Data', cleanedData)
      setFlashcards(cleanedData)
  })
  }
  return (
    <>
    <header className="header">
        <h1 className="title">Trivia Flashcard App</h1>
        <form onSubmit={handleSubmit}>
        <div className="flex-row">
            <div className="form-group">
              <label htmlFor="category">Category: </label>
              <select id="category" ref={categoryEl}>
                {categories.map(category => {
                  return <option key={category.id} value={category.id}>{category.name}</option>
                })}
              </select>
            </div>
            <div className="form-group">
              <button className="btn" type="submit">Generate Quiz</button>
            </div>
          </div>
        </form>
      </header>
      <div className="container">
        {flashcards.length > 0 && <FlashcardList flashcards={flashcards} />}
      </div>
    </>
  );
}



export default App;
