import { useState } from 'react'

function FeedbackItem() {

  return (
    <div className="card">
        <div className="num-display" style={{backgroundColor: "#6a5acd"}}>10</div>
        <div className="text-display" style={{color: "black"}}>
            This is an example of feedback item
        </div>
    </div>
  )

}

export default FeedbackItem