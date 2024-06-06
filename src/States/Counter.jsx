import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    // const Countervalue = () => {

    //     setCounter(counter + 1)
    // }
    return (
        <>
            <div className=' p-4 my-3 rounded-5  shadow mx-auto col-lg-5'>
                <h2 className='text-center text-info'>Counter Using States</h2>
                <h1 className='text-center'>{counter}</h1>
                <div className='d-flex flex-row'>
                    <button className='d-block my-3 mx-auto  btn btn-info' onClick={() => (setCounter(counter - 1))} >Minus</button>
                    <button className='d-block my-3 mx-auto  btn btn-danger' onClick={() => (0)}  >Reset</button>
                    <button className='d-block my-3 mx-auto  btn btn-success' onClick={() => (setCounter(counter + 1))

                    }  >Add</button>
                </div>


            </div >
        </>

    )
}

export default Counter