import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
function CheeryBye() {
//    function counter(){
//    $('.counter').counterUp({
// 		delay: 10,
// 		time: 1000
// 	});counter()
// }
   const cherry = {
      loop:true,
      margin:20,
      responsiveClass:true,
      responsive:{
         0:{
            items:1,
            nav:false,
            loop:false
         },
         600:{
            items:3,
            nav:false,
            loop:false
         },
         1000:{
            items:4,
            nav:true,
             loop:false
         }
      }
  };

  return (
    <>



   <section className="online-help pad60">
	   <div className="container">
      <div className="text-center mb-4 py-5"><h3 className='text-white'>It Is Time To Say Cheery-bye To Your Citation Difficulties. No More Waiting!</h3></div>
		   
	       {/* <div id="owl-demo" className="owl-carousel owl-theme owl2"> */}
          <OwlCarousel className='owl-theme owl2' {...cherry}>
			   <div className="item bg1">
				  <h5>Harvard</h5>
				  <p>Your lecturers may prefer to go down to the original sources to understand more about the subject. As a result, while referencing in Harvard style, you must adhere to the correct rules, style, and structure. <span id="cd1"><b>Read More...</b></span> <span id="cd_one">Examine the Harvard reference structure for various sources such as books, ebooks, websites, journals, dissertations, etc. with the help of thestudenthelpline.io.</span> <span id="sd1"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg2">
				  <h5>MLA</h5>
				  <p>The Modern Language Association Style, or MLA, is intended to mention sources in language, liberal arts, literature, and other humanities-related topics. The style includes a cross-referencing method <span id="cd2"><b>Read More...</b></span> <span id="cd_two">that allows readers to find the publication information of a source. Better understand how to cite appropriately in MLA style with guidance from thestudenthelpline.io Professionals.</span> <span id="sd2"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg3">
				  <h5>Chicago</h5>
				  <p>The Chicago referencing style is widely applied in arts, social sciences, and humanities fields. The Chicago manual referencing style is sometimes referred to as the "writer's holy book." The style applies to a wide <span id="cd3"><b>Read More...</b></span> <span id="cd_three"> range of disciplines, from documenting to article publication. When required to cite sources in the Chicago referencing style, students frequently become overwhelmed as they must remember the remarks and bibliographies, notes, and author-date norms. If you are facing a hard time comprehending this referencing style, we are happy to help.</span> <span id="sd3"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg4">
				  <h5>Deakin</h5>
				  <p>Deakin University in the United Kingdom is well-known for providing students with many of the finest diverse programs across several fields. It has been using the standard Harvard and Oxford reference <span id="cd4"><b>Read More...</b></span> <span id="cd_four">styles, etc, for academic referencing. The importance is that the University has rebuilt several of the citation foundations of popular styles, giving rise to Deakin referencing. Our writers are skilled in Deakin referencing and are ready to alleviate any citations and references concerns. Give it a shot right now!</span> <span id="sd4"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg5">
				  <h5>APA</h5>
				  <p>The American Psychological Association created the APA format style (APA). The style standard was created to make it simpler to understand articles on social and behavioral sciences subjects. The <span id="cd5"><b>Read More...</b></span> <span id="cd_five">APA Publication Manual also makes it simple to track sources and reduces linguistic prejudice. The lengthy number of restrictions laid out in the APA guideline manual is what makes applying the APA reference style so difficult. But for our experts, it is nothing but another referencing style.</span> <span id="sd5"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg4">
				  <h5>Vancouver</h5>
				  <p>The Vancouver citation style, which is widely used in the fields of Science and Medicine, differs slightly from others. Do you realize that incorrect citation and failure to follow the method as directed might <span id="cdd1"><b>Read More...</b></span> <span id="cdd_one">put you in serious problems for both intentional and unintentional plagiarism? There is no purpose in jeopardizing your research and getting caught with an incorrectly referenced document. Our professionals understand how to utilize Vancouver citation and provide a guarantee of authentic citation and reference construction.</span> <span id="sdd1"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg5">
				  <h5>Oxford</h5>
				  <p>While referencing publications in Oxford Referencing style, you must utilize in-text citations as well as a reference list. In-text citations or footnotes are placed amid a paragraph at the conclusion of the <span id="cdd2"><b>Read More...</b></span> <span id="cdd_two">blog content that you have gathered. In contrast, a reference list is presented at the conclusion of your document. Based on your professor's requirements, you can also put it on a different page. </span><span id="sdd2"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg1">
				  <h5>Swinburne</h5>
				  <p>Swinburne Harvard referencing style is an author-date reference format that consists of two sections: “in-text citations” in the body of the article and “a list of references” at the conclusion. You may also come <span id="cdd3"><b>Read More...</b></span> <span id="cdd_three">across the word ‘bibliography,' which is comparable to a reference list but also contains any background materials that you may have examined but did not credit in your work. If you are unfamiliar with Swinburne Harvard referencing tool, you may be perplexed. But do not worry, because you may take our writer’s help to prepare assignments in this referencing style.</span> <span id="sdd3"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg2">
				  <h5>UTS</h5>
				  <p>The UTS Referencing Style is based on the Australian Government's Style Manual for Authors, Editors, and Printers, which is followed by governments and universities throughout Australia. Though it <span id="cdd4"><b>Read More...</b></span> <span id="cdd_four"> is being phased out at UTS in favor of the APA referencing style, UTS referencing is still utilized for a variety of reasons. Some of you may be international students, in which case you should comprehend the UTS referencing style and our experts will help you do that achieve high marks.</span> <span id="sdd4"><b>Read Less</b></span></p>
			    </div>
				<div className="item bg3">
					<h5>OSCOLA</h5>
				  <p>The Oxford University Standard for Citation of Legal Authorities (OSCOLA) is intended to assist authors in achieving uniformity while also making life simpler for readers. OSCOLA does not claim to be exhaustive, but <span id="cdd5"><b>Read More...</b></span> <span id="cdd_five"> it provides guidelines and instances for the key UK legal primary sources as well as many other types of secondary sources. To the greatest extent feasible, OSCOLA's rules are based on customary practice in UK legal citation, though with a limitation of punctuation. When mentioning texts that are not listed in OSCOLA, utilize the basic principles in OSCOLA as a basis and strive for consistency. Still, if you find it overwhelming, a helping hand is always in reach at thestudenthelpline.io.</span> <span id="sdd5"><b>Read Less</b></span></p>
			    </div>
             </OwlCarousel>				
	   </div>

      <div className="mt-5 p-3 counter-back">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-3 col-6 my-2 d-flex align-items-center">
                     <img src="assets/img/counter/satish.webp" width="80" alt="Globecont"/>
                        <div className="ms-3">
                            <p className="mb-1 fs-2 fw-bold" id="number1">500K+
</p><span>Satisfied Students</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 my-2 d-flex align-items-center">
                     <img src="assets/img/counter/rated.webp" width="80" alt="Campuscont"/>
                        <div className="ms-3">
                            <p className="mb-1 fs-2 fw-bold" id="number2">4.95/5
</p><span>Rated</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 my-2 d-flex align-items-center">
                     <img src="assets/img/counter/thumps.webp" width="80" alt="Certificatecont"/>
                        <div className="ms-3">
                            <p className="mb-1 fs-2 fw-bold" id="number3">75</p><span>Reviews</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 my-2 d-flex align-items-center">
                    
                        <div className="ms-3">
                        <a className="tp-btn" href="/"><span>Order Now<i className="fa-regular fa-arrow-right"></i> </span><div className="transition"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
       

    </>
  )
}

export default CheeryBye