/* Requirement Statement:The page should ask the user for their shopping total, and the number of months
over which they’d like to pay back said amount. Use a non-compounding interest rate of 20% to calculate 
their monthly payments as well as the total they will have paid over all the months.

Note: I am using 'form' to collect inforamation from user about 'shopping total' and 'months'. 
Since, a 'form' is a 'controlled compoment' in React, I am using useState react hook to capture user inputs.
(otherwise, ideally 'states' are defined and managed at the top level component e.g. App.js)
Reference: https://reactjs.org/docs/forms.html
*/
import { useState } from 'react'

const InterestCalculator = ({ rate, interestAmt, monthlyPayment, calculateInterest }) => {
    const [total, setTotal] = useState('')
    const [months, setMonths] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!total) {                                                   // field level validation
            alert('Please enter your shopping total amount.')
            return
        }

        if (!months) {
            alert('Please enter number of months for pay back.')        // field level validation
            return
        }

        calculateInterest({ total, months })                            // calculateInterest() is defined in the parent compement- App.js

        setTotal('')
        setMonths('')
    }
    // Created two sections - one for 'Calculator' (for user inputs) and other for 'Results'
    return <div className='interest-cal-container'>
        <section className='interest-cal-section'>
            <h4>Calculator</h4>
            <form className='interest-cal-control' onSubmit={onSubmit}>
                <label>Total Shopping Amount: </label>
                <input
                    className='interest-cal-control'
                    type="text"
                    size={10}
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
                <br />
                <label>Number of Months: </label>
                <input
                    className='interest-cal-control'
                    type="text"
                    size={5}
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                />
                <br />
                <label>Interest Rate: </label>
                <input
                    className='interest-cal-control'
                    type="text"
                    size={5}
                    value={`${rate}%`}
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
                <span style={{ fontWeight: 'normal' }}>{interestAmt && `GBP ${interestAmt}`}</span>
            </p>
            <p className='interest-cal-control'>Monthly Payment:
                <span style={{ fontWeight: 'normal' }}>{monthlyPayment && `GBP ${monthlyPayment}`}</span>
            </p>
        </section>
    </div >;
};

export default InterestCalculator;
