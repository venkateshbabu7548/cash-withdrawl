// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, withdraw} = props

  const onClicked = () => {
    withdraw(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClicked}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
