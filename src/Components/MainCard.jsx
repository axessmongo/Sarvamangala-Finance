import React from 'react'

export default function MainCard() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row align-items-center justify-content-center gx-2 main-card">
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                            <p className='bg-no'>01</p>
                            <p className=' text-white'>Private FInance & Business</p>
                            <h1 className=' text-danger'>Services</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                        <p className='bg-no'>02</p>
                            <p className='text-white'>Private Investment Data</p>
                            <h1 className='text-white'>Analysis</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="normal-card d-flex flex-column rounded-0">
                            <p className='bg-no'>03</p>
                            <p className='text-dark'>Custom Strategy &</p>
                            <h1 className='text-danger'>Marketing</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
