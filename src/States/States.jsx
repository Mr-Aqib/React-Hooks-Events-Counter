import React, { useState } from 'react'

const States = () => {
    const [title, setTitle] = useState('Hey')
    const ChangingTitle = () => {
        if (title == 'Hey') {
            setTitle('SUP??')
        }
        else {
            setTitle('Hey')
        }
    }
    return (
        <>
            <div className=' p-4 my-3 rounded-5  shadow mx-auto col-lg-5'>
                <h2 className='text-center'>Changing Title Using State</h2>
                <h2 className='text-center'>{title}</h2>
                <button className='d-block my-3 mx-auto  btn btn-danger' onClick={ChangingTitle}>Lets Chnage</button>

            </div>
        </>
    )
}

export default States