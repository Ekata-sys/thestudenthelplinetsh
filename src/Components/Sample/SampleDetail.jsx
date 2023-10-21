import React, { useEffect, useState } from 'react';
import Form from '../Form';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SampleDetail() {
	const { url } = useParams();
	const [data, setData] = useState({
		Result: [{
			PageName: "",
			SampleCodes: "",
			UniversityName: "",
			SampleContent: "",
			CountryCode: "",
			SamplePdf: ""
		}]
	});
	const navigate =  useNavigate();
	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
		mobile: "",
	})
	async function getApiData() {
		const request = await fetch(`https://thestudenthelpline.io/sample-detail.php?subjectName=${url}`, {
			method: "GET",
			headers: {
				'Api-Token': '3773##ssf',
			},
		})
		const response = await request.json();
		setData(response)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const request = await fetch("https://thestudenthelpline.io/api.php",{
			method:"POST",
			headers:{
				'Api-Token':'3773##ssf',
			},
			body:JSON.stringify({...formData,samplePdf:data.Result[0].SamplePdf})
		})
		const response = await request.json();
		if(response.status==='200'){
			window.open(response.StatusMessage, '_blank');
		} 
	}
	useEffect(() => {
		getApiData()
	}, [])
	return (
		<>

			<div className="breadcrumb__area include-bg pt-50 pb-50 breadcrumb__overlay"
				data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="breadcrumb__content p-relative z-index-1">
								<h3 className="breadcrumb__title">{data.Result[0].PageName}</h3>
								<div className="breadcrumb__list">
									<span><Link to="/">Home</Link></span>
									<span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
									<span>{data.Result[0].PageName}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='pt-50 pb-50'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-7'>
							<div className='position-relative'>
								<div class="row">
									<div class="col-sm-4">
										<div class="in-smp">
											<h4>Course Code</h4>
											<p>{data.Result[0].SampleCodes}</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="in-smp">
											<h4>University</h4>
											<p>{data.Result[0].UniversityName}</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="in-smp">
											<h4>Country</h4>
											<p>{data.Result[0].CountryCode.toUpperCase()}</p>
										</div>
									</div>
								</div>


								<div class="sample-t">
									<div dangerouslySetInnerHTML={{ __html: data.Result[0].SampleContent }} />


									<br />		  </div>



								<div class="free-mambership" id="mambership">

									<div class="form-section">
										<h3>Free Membership To World's <br />
											Largest Sample Bank</h3>
										<h4>To View this &amp; another 55555+ free samples.<br /> Please put your valid email id.</h4>





										<form name="sample_page_form" id="sample_page_form" method="POST">


											<div class="row from-main">
												<div class="col-12 col-sm-12 form-group">
													<input type="text" id="emailid" placeholder="Email*" name="emailid" class="from-control" autocomplete="off" />
													<input type="hidden" id="sample_pid" name="sample_pid" value="18" />
												</div>
												<div class="col-md-12 row">
													<div class="captcha-main col-md-12">
														<span>
															<img id="captcha" src="https://thestudenthelpline.io/captcha.php" alt='' />
															{/* <small><Link to="javascript:void(0)" onclick="
									document.getElementById('captcha').src = 'https://thestudenthelpline.io/captcha.php?' + Math.random();
									document.getElementById('captcha_code_input').value = '';
									return false;
									">refresh</Link></small> */}
														</span>
														<span>
															<input type="text" placeholder="Enter Captcha" size="6" maxlength="5" name="captcha" value="" class="captch from-control" />
														</span>
														<p id="alertBoxsd"></p>
													</div>
												</div>



												<div class="col-md-12">
													<div class="form-group terms-c">
														<input type="checkbox" checked="" id="tems" name="terms" value="Yes" />
														<label for="html">Yes, alert me for offers and important updates</label>
													</div>
												</div>

												<button class="order-now" type="submit" name="submit" onclick="floatingBtn()">Submit</button>

											</div>
										</form>

									</div>
								</div>


								<div className='pt-60'>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
								</div>
								<div id="overlay" className="cover blur-in">
									<div className="content">
										<h1>The history or Lorem Ipsum</h1>
										<span>
											Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
										</span>
										<span>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus viverra porta. Pellentesque scelerisque eros quis dignissim semper. Nulla ut justo a sapien lobortis posuere. Maecenas scelerisque justo eleifend risus dapibus, id bibendum tellus placerat. Sed massa diam, ornare ut varius ut, auctor non arcu. Cras rutrum tortor eu diam feugiat aliquam. Suspendisse rutrum pretium pretium.
											</p>
										</span>
										<span>
											It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
										</span>
									</div>
								</div>
								<div className="row pop-up">
									<div className="sample-box small-6 large-centered">
										<button className="close-button">&#10006;</button>
										<div className='text-center'>
											<h3>lorem ipsum</h3>
											<p>Integer non odio id ante rutrum dictum. Nam ac dapibus felis, at pharetra sapien. </p>
										</div>


										<form onSubmit={handleSubmit}>
											<div className="mb-3">
												<label for="name" className="form-label">Name</label>
												<input type="text" name="full_name" className="form-control" id="name" value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
											</div>
											<div className="mb-3">
												<label for="email" className="form-label">Email</label>
												<input type="email" name="email" className="form-control" id="exampleInputEmail1" value={formData.email}
													onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
											</div>
											<div className="mb-3">
												<label for="phone" className="form-label">Phone Number</label>
												<input type="number" name="mobile" className="form-control" id="phone" value={formData.mobile}
													onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
											</div>
											<div className='text-center'>
												<button type="submit" className="btn btn-primary button">Submit</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-5 col-xl-5 col-lg-5">
							<div className='formback'>
								<Form />
							</div>

							<div class="course__sidebar-widget-2 white-bg mb-20"><div class="course__sidebar-course"><h3 class="course__sidebar-title">Recent Post</h3>
								<div class="blog-cat2">
									<ul class="cat-list2">
										<li><span class="imgb"> <img src="assets/img/sample/FINM4100-assessment-answer.webp" alt='p1' /></span><Link to="https://thestudenthelpline.io/blog/how-to-write-finm4100-assessment-answer.php">How To Write FINM4100 Assessment Answer</Link><span>2023-10-06</span></li>
										<li><span class="imgb"> <img src="assets/img/sample/Ai-in-Education.webp" alt='p2' /></span><Link to="https://thestudenthelpline.io/blog/role-of-ai-in-education.php">Role Of Ai In Education</Link><span>2023-04-15</span></li>
										<li><span class="imgb"> <img src="assets/img/sample/Tips-To-Memories-Multiplication-Chart.webp" alt='p3' /></span><Link to="https://thestudenthelpline.io/blog/tips-to-memorize-multiplication-chart.php">Tips To Memorize Multiplication Chart</Link><span>2023-04-10</span></li>
										<li><span class="imgb"> <img src="assets/img/sample/Excuse-For-Not-Doing-Homework.webp" alt='p4' /></span><Link to="https://thestudenthelpline.io/blog/excuses-for-not-doing-homework.php">Excuses For Not Doing Homework</Link><span>2023-04-10</span></li>
										<li><span class="imgb"> <img src="assets/img/sample/tips-that-will-help-you-draft-the-best-reflection-paragraphs.webp" alt='p5' /></span><Link to="https://thestudenthelpline.io/blog/tips-that-will-help-you-draft-the-best-reflection-paragraphs.php">Tips That Will Help You Draft The Best Reflection Paragraphs</Link><span>2023-03-25</span></li>
									</ul>
								</div>
							</div></div>

							<div class="row sample2">
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-1.webp" alt='' />
										<h4>21 Step Quality Check</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-2.webp" alt='' />
										<h4>2000+ Ph.D Experts</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-3.webp" alt='' />
										<h4>Earn while you Learn with us</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-4.webp" alt='' />
										<h4>Confidentiality Agreement</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-5.webp" alt='' />
										<h4>Live Expert Sessions</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-6.webp" alt='' />
										<h4>Dedicated App</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-7.webp" alt='' />
										<h4>Money Back Guarantee</h4>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="ord-b">
										<img src="assets/img/sample/order-8.webp" alt='' />
										<h4>Customer Feedback</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default SampleDetail