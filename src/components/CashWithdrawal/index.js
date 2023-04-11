// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="con">
        <div className="card">
          <div className="sec-1">
            <div className="user">
              <p>S</p>
            </div>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="sec-2">
            <p>Your Balance</p>
            <div className="balance">
              <p className="amount">{amount}</p>
              <p className="down">in Rupees</p>
            </div>
          </div>
          <div className="sec-3">
            <p className="amount">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <ul className="amount-con">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  value={each.value}
                  withdraw={this.withdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
