import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
   
   
    const Changingcounter = (e) => {
        if (e.target.innerHTML == "Increase") {
            setCounter(counter + 1)
        }
        else if (e.target.innerHTML == 'Reset') {
            setCounter(0)
         
        }
        else if (e.target.innerHTML == "Decrease") {
            setCounter(counter - 1)
            if (counter <= 0) {
                setCounter(0)
            }

        }

    }
    return (
        <>
            <div className=' p-4 rounded-5 bg-dark  shadow mx-auto col-lg-5'>
                <h2 className='text-center text-info'>Counter Using States</h2>
                <h2 className='text-center text-info'>Short Circuit</h2>
                <h1 className='text-center text-white'>{counter}</h1>
                <div className='d-flex flex-row'>
                    <button className='d-block my-3 mx-auto  btn btn-info' onClick={Changingcounter} >Decrease</button>
                    <button className='d-block my-3 mx-auto  btn btn-danger' onClick={Changingcounter} >{ counter ==0 ? 'Reseted' : 'Reset' }</button>
                    <button className='d-block my-3 mx-auto  btn btn-success' onClick={Changingcounter}>Increase</button>
                </div>
            </div >
        </>

    )
}

export default Counter