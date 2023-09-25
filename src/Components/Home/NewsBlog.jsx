import React from 'react'
import {Link} from 'react-router-dom'
function NewsBlog() {
  return (
   <>
      <section className="latest-blog pad60">
	   <div className="container">
	      <center>
		  <h3>News and Blogs</h3>
	   <p>Read latest updates and information about education, university, lifestyle, assignment writing skills &amp; tips from Experts.</p>
	   <p>&nbsp;</p>
		</center>
	       <div className="row">
		     <div className="col-md-6 aos-init aos-animate" data-aos="fade-right">
			 			    <div className="blog-left_sec d-none d-sm-none d-md-block d-lg-block">
				   <p>Role Of Ai In Education</p>
				    <Link to="https://thestudenthelpline.io/blog/role-of-ai-in-education.php"><img src="https://thestudenthelpline.io/images/blog-arrow-right.png" alt="Assignment Blog"/></Link>
				</div>
			 </div>
			 <div className="col-md-6 aos-init aos-animate" data-aos="fade-left">
			   <div className="blog-righ__sec">
				   
				   <ul>
				 				   <li> <Link to="https://thestudenthelpline.io/blog/tips-to-memorize-multiplication-chart.php" className="bloglinks">Tips To Memorize Multiplication Chart</Link></li>
				   				   <li> <Link to="https://thestudenthelpline.io/blog/excuses-for-not-doing-homework.php" className="bloglinks">Excuses For Not Doing Homework</Link></li>
				   				   <li> <Link to="https://thestudenthelpline.io/blog/tips-that-will-help-you-draft-the-best-reflection-paragraphs.php" className="bloglinks">Tips That Will Help You Draft The Best Reflection Paragraphs</Link></li>
				   				   <li> <Link to="https://thestudenthelpline.io/blog/role-of-spatial-order-and-chronology-in-an-essay.php" className="bloglinks">Role Of Spatial Order And Chronology In An Essay</Link></li>
				   				   </ul>
				</div>
			 </div>
		   </div>
		    <div className="read-more text-center"><Link className="btn-prm bg-black text-white" to="https://thestudenthelpline.io/blog.php">View All</Link></div>
	   </div>
	</section>
   </>
  )
}

export default NewsBlog