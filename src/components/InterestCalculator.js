/* Requirement Statement:The page should ask the user for their shopping total, and the number of months
over which they’d like to pay back said amount. Use a non-compounding interest rate of 20% to calculate 
their monthly payments as well as the total they will have paid over all the months.

Note: I am using 'form' to collect inforamation from user about 'shopping total' and 'months'. 
Since, a 'form' is a 'controlled compoment' in React, I am using useState react hook to capture user inputs.
(otherwise, ideally 'states' are defined and managed at the top level component e.g. App.js)
Reference: https://reactjs.org/docs/forms.html
*/
import React from "react"

class InterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            months: '',
            rate: 20,
            interestAmt: '',
            monthlyPayment: ''
        }
        this.userName = ''
    }
    // const [total, setTotal] = useState('')
    // const [months, setMonths] = useState('')

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.total) {                                                   // field level validation
            alert('Please enter your shopping total amount.')
            return
        }

        if (!this.state.months) {
            alert('Please enter number of months for pay back.')        // field level validation
            return
        }

        this.calculateInterest(this.state.total, this.state.months)                            // calculateInterest() is defined in the parent compement- App.js

        this.setState({
            total: ''
        })

        this.setState({
            months: ''
        })
        // setTotal('')
        // setMonths('')
    }

    // Calculate total interest and monthly payment for given shopping total and number of months
    calculateInterest = (total, months) => {
        total = Number(total)
        months = Number(months)
        let interest = total * (this.state.rate / 100) * (months / 12)
        let monthlyPayment = (Math.round(((total + interest) / months) * 100) / 100).toFixed(2)     // two decimal places
        interest = (Math.round(interest * 100) / 100).toFixed(2)                                    // two decimal places

        this.setState({
            interestAmt: interest
        })

        this.setState({
            monthlyPayment: monthlyPayment
        })
    }


    // Created two sections - one for 'Calculator' (for user inputs) and other for 'Results'
    render() {
        return <div className='interest-cal-container'>
            <section className='interest-cal-section'>
                <h4>Calculator</h4>
                <form className='interest-cal-control' onSubmit={this.onSubmit}>
                    <label>Total Shopping Amount: </label>
                    <input
                        className='interest-cal-control'
                        type="text"
                        size={10}
                        value={this.state.total}
                        onChange={(e) => this.setState({ total: e.target.value })}
                    />
                    <br />
                    <label>Number of Months: </label>
                    <input
                        className='interest-cal-control'
                        type="text"
                        size={5}
                        value={this.state.months}
                        onChange={(e) => this.setState({ months: e.target.value })}
                    />
                    <br />
                    <label>Interest Rate: </label>
                    <input
                        className='interest-cal-control'
                        type="text"
                        size={5}
                        value={`${this.state.rate}%`}
                        readOnly={true}
                    // onChange={(e) => setMonths(e.target.value)}
                    />
                    <br />
                    <input className='btn' type="submit" value='Calculate' />
                </form>
            </section>
            <section className='interest-cal-section'>
                <h4 >Results</h4>
                <p className='interest-cal-control'>Total Interest:
                    <span style={{ fontWeight: 'normal' }}>{this.state.interestAmt && `GBP ${this.state.interestAmt}`}</span>
                </p>
                <p className='interest-cal-control'>Monthly Payment:
                    <span style={{ fontWeight: 'normal' }}>{this.state.monthlyPayment && `GBP ${this.state.monthlyPayment}`}</span>
                </p>
            </section>
        </div >;
    }
};

export default InterestCalculator;
