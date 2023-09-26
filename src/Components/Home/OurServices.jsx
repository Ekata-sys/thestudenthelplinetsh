import React from 'react'
import {Link} from 'react-router-dom'
function OurServices() {
  return (
   <>
   <section>
   <div className='container'>
   <div className="text-center mb-4">
                <h3 className='text-black'>Our Services</h3>
                </div>
    <div className="course-details__content">
                         
                           <div className="course__tab-2 mb-45">
                              <ul className="nav nav-tabs" id="courseTab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link active" id="assignment-tab" data-bs-toggle="tab" data-bs-target="#assignment" type="button" role="tab" aria-controls="assignment" aria-selected="true"> <i className="icon_ribbon_alt"></i> <span>Assignment</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="essay-tab" data-bs-toggle="tab" data-bs-target="#essay" type="button" role="tab" aria-controls="essay" aria-selected="false"> <i className="icon_book_alt"></i> <span>Essay</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="sop-tab" data-bs-toggle="tab" data-bs-target="#sop" type="button" role="tab" aria-controls="sop" aria-selected="false"> <i className="icon_star_alt"></i> <span>SOP</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="dissertation-tab" data-bs-toggle="tab" data-bs-target="#dissertation" type="button" role="tab" aria-controls="dissertation" aria-selected="false"> <i className="fal fa-file"></i> <span>Dissertation</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="homework-tab" data-bs-toggle="tab" data-bs-target="#homework" type="button" role="tab" aria-controls="homework" aria-selected="false"> <i className="fa-solid fa-pen-nib"></i><span>Homework</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="thesis-tab" data-bs-toggle="tab" data-bs-target="#thesis" type="button" role="tab" aria-controls="thesis" aria-selected="false"> <i className="fal fa-user"></i> <span>Thesis</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="coursework-tab" data-bs-toggle="tab" data-bs-target="#coursework" type="button" role="tab" aria-controls="coursework" aria-selected="false"> <i className="fal fa-user"></i> <span>Coursework</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="resumewriting-tab" data-bs-toggle="tab" data-bs-target="#resumewriting" type="button" role="tab" aria-controls="resumewriting" aria-selected="false"> <i className="fa-solid fa-pen"></i> <span>Resume Writing</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="research-tab" data-bs-toggle="tab" data-bs-target="#research" type="button" role="tab" aria-controls="research" aria-selected="false"> <i className="fa-solid fa-book"></i><span>Research Proposal</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="casestudy-tab" data-bs-toggle="tab" data-bs-target="#casestudy" type="button" role="tab" aria-controls="casestudy" aria-selected="false"> <i className="fal fa-user"></i> <span>Case Study</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="quiz-tab" data-bs-toggle="tab" data-bs-target="#quiz" type="button" role="tab" aria-controls="quiz" aria-selected="false"> <i className="fa-brands fa-teamspeak"></i> <span>Quiz & Exam</span> </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="rstyle" data-bs-toggle="tab" data-bs-target="#quiz" type="button" role="tab" aria-controls="quiz" aria-selected="false"> <i className="fa-brands fa-teamspeak"></i> <span>Referencing Style</span> </button>
                                 </li>
                               </ul>
                           </div>
                        </div>
                        <div className="course__tab-content mb-95">
                           <div className="tab-content" id="courseTabContent">
                              <div className="tab-pane fade active show" id="assignment" role="tabpanel" aria-labelledby="assignment-tab">
                               <div>
                               <h3>Assignment Help</h3>
                  <p>Assignments have become an intrinsic part of assessing a student’s academic knowledge. Losing marks in assignments can negatively affect your academic records, which sometimes would cost you an arm and a leg, keeping your career life at stake. However, it can sometimes be stressful as students these days are endowed with an array of works to meet the curricular demands and in some cases, the students might lack the knack of creating a work from scratch. If you are one among them, you have reached the right place! Leave your burden on us and relax! Our team of writers is specialises in writing quality assignments, and no student who took our<Link to="https://thestudenthelpline.io/au/">assignment help</Link> was disappointed indeed, had fallen short of words to thank us.</p>					   <div className="text-end text-center py-2">						<Link  className="btn-prm" to="/order">Order Now</Link>			</div>
                               </div>
                              </div>
                              <div className="tab-pane fade" id="essay" role="tabpanel" aria-labelledby="essay-tab">
                                <div>
                              <h3>Essay Help </h3>
                     <p>Essays are considered one of the best ways to test a person’s knowledge about a subject and competence in the language. Unquestionably, it can even be the primary determinant of your legitimacy. Hence, it is not something that can be taken lightly. Why take the tension of losing an opportunity for writing an essay when you are unsure of giving your best to it? We have experienced writers in our team who could lighten up the lives of many by writing extraordinary essays, which sometimes helped meeting one of the admission criteria or recruitment criteria. We as a firm, have lost the count of essays we have written over time.</p>
                       <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>						 	</div>
                              </div>
                              </div>
                              <div className="tab-pane fade" id="sop" role="tabpanel" aria-labelledby="sop-tab">
                                <div>
                              <h3>SOP Services</h3>
                     <p>SOPs or Statements of Purpose mirror a person’s credibility. Admittedly, the selection committee does not know you in person, and this is the primary means to draw a picture of you. Failing in it might also mean throwing your dreams down the drain. That is the last thing anyone would want to happen. Having delivered countless SOPs, helping millions of aspiring individuals to realize their dreams, we would doubtlessly ask you to trust us blindfolded! We are experts at curating SOPs maintaining a balance between narrative and factual styles of writing, with a tint of creativity, that the officer will surely be carried away.</p>                           <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>	</div>
                     </div>
                              </div>
                              <div className="tab-pane fade" id="dissertation" role="tabpanel" aria-labelledby="dissertation-tab">
                                 <div>
                                 <h3>Dissertation Help</h3>
                     <p>Dissertation work is an indicator of a student’s expertise at researching and it has a tremendous impact on their final grades. Obviously, securing low marks is not so appealing at any stage, however, if it is in the initial semesters, the students still have got time to cover up by zealously working in coming terms. However, in most cases,<Link to="https://thestudenthelpline.io/uk/">dissertation</Link> works come towards the end of the course, leaving the student no option but to be content with what they get. Further, it is important to take care of the basics and cover all the areas. Missing out on even something so trivial would affect your grades. Hence to ensure you are on track, avail our expert help for carrying out your dissertations.</p>                          <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>			</div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="homework" role="tabpanel" aria-labelledby="homework-tab">
                               <div>
                               <h3>Homework Help</h3>
                     <p>Students these days don’t have much social life or practical skills. But we really doubt if it is the students to be blamed for! Students are kept busy throughout the day by attending classes, coaching, homework, and whatnot. Sometimes, it can even be detrimental to their mental health. Yet, as a curricular demand, students have no option to not do their<Link to="https://thestudenthelpline.io/ca/">homework</Link>. Isn’t it wise to give them a break to breathe in between their busy schedule by taking expert help to do their homework? It will not spoil them, rather will help them take some time for themselves to rejuvenate which would indeed help in better brain functioning.</p>                        <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>					</div>
                               </div>
                              </div>
                              <div className="tab-pane fade" id="thesis" role="tabpanel" aria-labelledby="thesis-tab">
                              <div>
                              <h3>Thesis Help</h3>
                     <p>In some cases, howbeit we break our heads it will be hard to get through work, leaving you perplexed. There are two options before you, either leave it at the cost of your grades or leave it to an expert and get praiseworthy scores. Our experts help you broaden your perspectives and look at things from a new lens, that you will be amazed by the unending possibilities of a single topic. Be it editing, reviewing, or creating a whole new work, we are here!</p>                       <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>											</div>
                              </div>
                              </div>
                              <div className="tab-pane fade" id="coursework" role="tabpanel" aria-labelledby="coursework-tab">
                               <div>
                               <h3>Coursework Writing</h3>
                     <p>Joining an institute by its name or choosing a random place to study are things of the past. Now students scrutinize the curriculum to see if its holistic, all-encompassing, meets all the industrial needs and if they are regularly re-equipped to fit in all the recent studies and developments. Quite a task! Fret not, we have got you covered.</p>                       <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>						</div>
                               </div>
                              </div>
                              <div className="tab-pane fade" id="resumewriting" role="tabpanel" aria-labelledby="resumewriting-tab">
                              <div>
                              <h3>Coursework Writing</h3>
                     <p>Joining an institute by its name or choosing a random place to study are things of the past. Now students scrutinize the curriculum to see if its holistic, all-encompassing, meets all the industrial needs and if they are regularly re-equipped to fit in all the recent studies and developments. Quite a task! Fret not, we have got you covered.</p>                       <div className="text-end text-center py-2">						<Link className="btn-prm" to="/order">Order Now</Link>					</div>
                              </div>
                              </div>
                              <div className="tab-pane fade" id="research" role="tabpanel" aria-labelledby="research-tab">
                                <div>
                                <h3>Research Proposal</h3>
                     <p>Research proposals are the first step towards your capstone project. It is crucial to get it checked and sanctioned by your mentor to carry out your research work, otherwise, you would end up losing your chance to do the project as well as getting a degree. You might have planned a lot of things in your head to do the research and you would be sure about it. Yet, it is important to convince the professor about the potential of the topic and your capability to explore the same. Stressed? Worry not, we can help you.</p>                               <div className="text-end text-center py-2">								<Link className="btn-prm" to="/order">Order Now</Link>										</div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="casestudy" role="tabpanel" aria-labelledby="casestudy-tab">
                               <div>
                               <h3>Case Study</h3>         
                     <p>Case studies demand both subject knowledge and analytical skills, and not everyone will have a forte in the same. However, we are fortunate to have few exceptionally good writers who are experts in drawing in an array of perspectives and theories to analyze a given scenario. Trust us and you will be surprised by the results.</p>                           <div className="text-end text-center py-2">								<Link className="btn-prm" to="/order">Order Now</Link>						</div>
                               </div>
                              </div>
                              <div className="tab-pane fade" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">
                               <div>
                               <h3>Quiz &amp; Exam</h3>         
                     <p>Are you on the lookout to find good quiz support service providers? Feel free to reach out to us. Get training to perform in a quiz competition, curate cutting-edge quiz questions, or even take your part in an online quiz– believe us we can bring in magic!</p>
					 <p>In this era of online classes and exams, there is a skyrocketing demand for exam help services. Our subject experts are on their toes to take your role, take the test and help you pass the exam meritoriously. How much better that can be! We are sure that you will agree with us when we say certificates matter!</p>                            <div className="text-end text-center py-2">								<Link className="btn-prm" to="/order">Order Now</Link>					</div>
                               </div>
                              </div>
                              <div className="tab-pane fade" id="rstyle" role="tabpanel" aria-labelledby="quiz-tab">
                               <div>
                               <h3>Refrencing &amp; Style</h3>         
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					 <p>In this era of online classes and exams, there is a skyrocketing demand for exam help services. Our subject experts are on their toes to take your role, take the test and help you pass the exam meritoriously. How much better that can be! We are sure that you will agree with us when we say certificates matter!</p>                           
            <div className="text-end text-center py-2">								<Link className="btn-prm" to="/order">Order Now</Link>					</div>
                               </div>
                              </div>
                            </div>
                        </div>
                        </div>
   </section>
   </>
  )
}

export default OurServices