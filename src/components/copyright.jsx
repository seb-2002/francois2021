import './copyright.scss'

function Copyright() {
  return (
    <div className="copyright">
      <p className="copyright--text">
      <span className="copyright--text-bold">codage -- code + design: </span><a className="copyright--link" href="https://github.com/seb-2002" rel="noreferrer" target="_blank">Sebastian Kann</a><span className="separator">&nbsp;||&nbsp;</span></p>
     <p className="copyright--text copyright--text2">
      <a className="copyright--link"  rel="noreferrer" target="_blank" href="https://icons8.com/icons/set/circus-tent"><span className="copyright--text-bold"> icône chapiteau -- tent icon:</span></a> <a className="copyright--link"  rel="noreferrer" target="_blank" href="https://icons8.com">Icons8</a>
      </p>
    </div>
  )
}

export default Copyright;