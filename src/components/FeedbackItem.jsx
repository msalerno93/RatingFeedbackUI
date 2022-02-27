function FeedbackItem({item}) {

  return (
    <div className="card">
        <div className="num-display" style={{backgroundColor: "#6a5acd"}}>{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </div>
  )

}

export default FeedbackItem