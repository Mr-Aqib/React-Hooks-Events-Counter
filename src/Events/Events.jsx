import React, { useState } from 'react'

const Events = () => {
    const alertt = () => {
        alert('helo')
    }
    return (
        <>
            <div className=' p-4 rounded-5  shadow mx-auto col-lg-5'>
                <h3 className='text-center'>inline and External Events</h3>
                <button className='d-block my-3 mx-auto  btn btn-danger' onClick={() => alert("Helo")}>Inine event</button>
                <button className='d-block mx-auto btn btn-success' onClick={alertt}>External</button>
            </div>
        </>

    )
}

export default Events