import { useState } from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of feedback item')


  return (
    <div className="card">
        <div className="num-display" style={{backgroundColor: "#6a5acd"}}>{rating}</div>
        <div className="text-display">{text}</div>
    </div>
  )

}

export default FeedbackItem