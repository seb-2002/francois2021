import './credits.scss'

function Credits({credits}) {
  const formattedCredits = credits.map((credit) => {
    return (
      <span><span className="role">{credit[0]}:</span> <span className="collaborator"> {credit[1]}</span> </span>
    )
  })
  
  

  return (
    <p className="credits">
      {formattedCredits}
    </p>
  )
 
}

export default Credits;