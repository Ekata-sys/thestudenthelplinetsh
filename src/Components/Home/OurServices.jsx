import React from 'react'

function OurServices() {
  return (
   <>
   <div className='container'>
    <div className="course-details__content">
                         
                           <div className="course__tab-2 mb-45">
                              <ul className="nav nav-tabs" id="courseTab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"> <i className="icon_ribbon_alt"></i> <span>Discription</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"> <i className="icon_book_alt"></i> <span>Curriculum</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i className="icon_star_alt"></i> <span>Reviews</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Members</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="member-tab5" data-bs-toggle="tab" data-bs-target="#member5" type="button" role="tab" aria-controls="member5" aria-selected="false"> <i className="fal fa-user"></i> <span>Members</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="member-tab6" data-bs-toggle="tab" data-bs-target="#member6" type="button" role="tab" aria-controls="member6" aria-selected="false"> <i className="fal fa-user"></i> <span>Members</span> </button>
                                 </li>
                               </ul>
                           </div>
                        </div>
                        <div className="course__tab-content mb-95">
                           <div className="tab-content" id="courseTabContent">
                              <div className="tab-pane fade active show" id="description" role="tabpanel" aria-labelledby="description-tab">
                                1
                              </div>
                              <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                2
                              </div>
                              <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                 3
                              </div>
                              <div className="tab-pane fade" id="member" role="tabpanel" aria-labelledby="member-tab">
                                 4
                              </div>
                              <div className="tab-pane fade" id="member5" role="tabpanel" aria-labelledby="member-tab5">
                                 5
                              </div>
                              <div className="tab-pane fade" id="member6" role="tabpanel" aria-labelledby="member-tab6">
                                 6
                              </div>
                            
                            </div>
                        </div>
                        </div>
   </>
  )
}

export default OurServices