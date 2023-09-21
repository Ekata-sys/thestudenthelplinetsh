import React from 'react'
import { Link } from 'react-router-dom'

export default function ExpertCard({data}) {
  return (
        <div className='border rounded p-30'>
            <div className="card-header px-30 pt-10 d-flex align-items-center justify-content-between">
                <div className='d-flex'>
                    <img src="https://placehold.co/80" className='rounded-circle me-3 d-inline' alt="" />
                    <div className='mt-10 ms-2'>
                    <h3 className='mb-0'>{data.name}</h3>
                    <p>
                        {
                            data.stars.map((data,index)=>(
                                <span className='text-warning'><i className='fa fa-star'></i></span>
                            ))
                        }
                        <span className='bg-success rounded text-white ms-2' style={{padding:"5px"}}>{data.rating}/5</span>
                    </p>
                    </div>
                </div>
                <div>
                    <Link className="btn btn-warning" to="/order-now">Hire Me</Link>
                </div>
            </div>
            <hr className='m-0'/>
            <div className="card-footer d-flex justify-content-between">
                <p className='m-0'>
                <i class="text-info fa-sharp fa-light fa-location-dot"></i>
                <span className='text-secondary'> Location:</span>
                <span>{data.country}</span>
                </p>
                <p className='m-0'>
                <i class="text-primary fa-sharp fa-solid fa-book"></i>
                <span className='text-secondary'> Subject:</span>
                <span>{data.subject}</span>
                </p>
                <p className='m-0'>
                <i class="text-success fa-sharp fa-light fa-shield-check"></i>
                <span className='text-secondary'> Completed Orders:</span>
                <span>{data.orders}</span>
                </p>
            </div>
        </div>
    )
}
