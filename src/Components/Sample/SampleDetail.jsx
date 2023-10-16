import React, { useEffect, useState } from 'react';
import Form from '../Form';
import {Link, useParams} from 'react-router-dom';

function SampleDetail() {
	const {url} = useParams();
	const [data,setData] = useState({
		Result:[{
			PageName:"",
			SampleCodes:"",
			UniversityName:"",
			SampleContent:"",
			CountryCode:""
		}]
	});

	async function getApiData(){
		 const request = await  fetch(`https://thestudenthelpline.io/sample-detail.php?subjectName=${url}`,{
				method:"GET",
				headers:{
				  'Api-Token':'3773##ssf',
				},
			  })
			  const response = await request.json();
			  setData(response) 
	}
	useEffect(()=>{
		getApiData()
	},[])
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
		  
			  {/* <h2>Introduction - 7MNST004W MSc Project</h2>
<h3>Background</h3>
<p>Online teaching refers to imparting knowledge through electronic means. Video conferencing, online seminars, and online chat rooms are just a few of the online tools used to facilitate live instruction. The intention of these digital aids is to streamline the academic process. Online tutoring is another alternative for earning money from home. Since it is simple to launch an online teaching business; many people are giving it a shot to see if they can make some extra cash. According to Phutela and Dwivedi(2020), it can be said that online learning has been well adopted in India. This adoption has been found to be primarily associated with the increase in diversity of students in the education enrollment. The term â€“ â€œE-learningâ€ has been found to be in presence since 1999, at the time when the word was first in a seminar of CBT systems. (Talesra 2020, p87) However, there are also some other words which spring up with online education, one of those words is â€œvirtual learningâ€. The first online education concept has been brought in India during the years 2004 to 2005 (Nisha and Senthil 2015, p86). During this time, the efforts were mainly made by the governmental organizations including MHRD, ISROU and IGNOU. During this process, they start a dual way video communication. In this process, although the process improved, the expected results were not observed much due to the presence of insufficient advancements of technology (Malik and Rana 2020, p404). Online schooling is proving to be a lifeline in times of crisis, such as the current Covid-19 outbreak, which has almost shut down the whole globe.</p>
<p>The education industry has been severely impacted by the pandemic, which has also hampered the global economy. Millions of students throughout the world have been advised to study online since traditional educational institutions have been shut down indefinitely due to the epidemic(Govindarajan and Srivastava 2020, p6). Due to low network access, it is impossible to hold live sessions and transmit them to children in rural parts of India. Lack of internet network supply is a significant problem even if people in rural regions are learning about and making efforts to acquire new technology like smartphones, laptops, and tablets (Pugalendhi and Mary 2022).Technology has been found to become an integral part of the education system, with a specific introduction of novel age digital platforms which enhances the academic landscape in India. Students, who are at the entry level of education, from professional to pre-K graduate levels, utilize one of more significant means of learning new abilities (Al-Asmari and Rabb Khan 2014, p 2). All students, regardless of their backgrounds, abilities, or learning styles, require equal access to educational technology. Using a platform that incorporates an accessible design from the outset of content production is the most effective technique for establishing a fair technological experience. Under the University Grants Commission (Online Courses), 2018, higher education institutions in India are authorized to provide Certificate, Diploma, and Degree Programs to students entirely online (Govindarajan and Srivastava 2020, p4). By enacting this change, the government has shown that it recognizes the value of online education and is willing to take steps to improve it. Among these specific advances of technology, it has been found that online education has gained significant momentum with its flexibility across edtech companies and several government initiatives. They have been found to make inroads to the education system. Therefore, it can be said that the use of technology and pedagogical evolution in the sector of education, have focused on the market of Indian education. Therefore, it can be stated that Indian education market is the second largest market for e-learning after the United States (US).</p>
<p>Previous online education in India based research studies have talked of the types, progress, advantages, disadvantages and sustainability only. In other words, it can be stated that apart from all these factors, the previous research studies have not talked of any future prospects of online learning (Alhat 2020, p 108). This means that the major research gap existing in the previously researched evidences are needed to be filled by the current research. On performing in-depth research in the selected study topic, it was observed that there are several prospects of online learning, which has still not been researched, or have significantly small number of evidences.</p>
<h3>Rationale</h3>
<p>The future prospects of online learning have become more relevant because of the fact that online learning leads to the elimination of both psychical and social barriers, which means that if the student misses his class, he or she can specifically access the lecture materials if needed. Online learning can also increase the variation of both courses and programs today that offer various options for students (Debnath et al., 2021, p). Flexibility increment in online learning will also allow more students to participate in online learning and enroll for permanent courses. Online learning can also allow an increase in ethnic diversity of students, enrolled in a specific university. Course material has been found to be already accessible to every student, enrolled in the course, without the caveat of out of stocking, as observed in offline education modes. The future prospects of online learning have been found to be associated with the fact that it allows the development of teachers also. This is because of the fact that E learning is both beneficial for teachers as well as students (Dutta 2020, p 609). This is because of the fact that it allows the scope of both learning and teaching consistently for good teachers. Therefore, it can be stated that the conduction of this research study was justified.</p>
<h2>Research Question</h2>
<p><strong>RQ:</strong> â€œWhat are the future prospective of online education in India?â€ However, this question is the primary generalized research question for the study. The specific research question, that can be drawn from this broad research question is â€“</p>
<p><strong>RQ(specific):</strong> â€œWhat are the progresses of technology and teacher developments in terms of online education in India?â€.</p>
<p>This research question is more specific than the previously stated research question because of the fact that two different futureprospects of online learning in India was mainly focused in the research.</p>
<h3>Aim And Objectives</h3>
<p>The aim of this research study was to analyze the future prospects of online learning in India.</p>
<p>The objectives of this research study wereâ€“</p>
<p>1.To analyze how online courses can become more relevant in future.</p>
<ol start="2">
<li>To analyze the role of technology in increasing strength the online education base in India.</li>
<li>To analyze the future career advancements and teacher developments associated with online learning and education in India.</li>
<li>To analyze the barriers of online education, as a major caveat to future prospects of online learning.</li>
</ol>
<h3>Research Contributions</h3>
<p>Since the beginning of the COVID-19 pandemic, UNESCO reports that schools and institutions in 138 countries throughout the world have been forced to close, affecting 1.37 billion children. There are over 60.2 million fewer professors and instructors in the world now than there were a century ago. Due of the nationwide curfew, online courses are the greatest and only alternative for educating the population (Kruszewska, Nazaruk and Szewczyk 2022, p309). University instructors are signing up for video conferencing services like Zoom, Skype, Google Classroom, and Meet to better communicate with their students. These days, digital media is a synthesis of traditional learning tools like books and notebooks with cutting-edge digital resources like eBooks and pdfs (Rao 2011). This research study had several contributions to the future growth of online learning in India. Technology has been found to allow the shifting from static learning materials to more dynamic as well as interactive media content. Students can also be allowed to learn faster as well as engage more when they are not only listening to a lecturer in class or are reading books while participating in academic activities (Phutela and Dwivedi 2020). Since the whole system has been found to be based on online mode, technology has already played a role in increasing the flexibility also. This research has also shown that online learning is also better than offline learning due to various advantages. E learning technological improvements can allow the schools and universities to reach out to the students from remote and distant places. Increase in signal strength inside the remote regions is also effective in opening scopes for these people to participate in education (Kumar 2021). On the other hand, since online learning is more flexible, it allows the teachers to participate in professional development courses while teaching in a specific organizational unit. Therefore, future prospects are also associated with development of teachers also and increasing their <Link title="Study Skills " to="https://thestudenthelpline.com/sample/ed1064-study-skills.php">study skills</Link>. India will see the development of an efficient population of both teacher and students, who will become the backbone of the Indian educational system.</p>
<h3>Research Structure</h3>
<p>The current research study has followed the standardized structure of a qualitative literature review â€“ the paper has started with an introduction section, followed by a methodology section, that was followed by a result and finally the discussion section has been written. The research study has ended with a conclusion section, where the research question has been specifically answered and future recommendations for the study have been provided.</p>
<h2>Literature Review</h2>
<h3>Introduction</h3>
<p>By conducting a literature review of the chosen domains, the current study has shown that it has a solid grasp of the abovementioned superior journal articles. In this section, the researcher reviews the existing literature in the topic to better grasp the theoretical underpinnings and theoretical models supplied by previous researchers that may assist in comprehending the study problem.</p>
<h3>Idea About Online Teaching</h3>
<p>The rise in popularity of e-learning coincides with the improvement in the quality of online education made possible by technical developments (Rahman 2021, p74). More and more people, including online teachers and students, have a solid grasp of the internet and computing. They are implementing it to make their virtual classroom more effective. Smart Class Technology has completely altered the way in which educators provide material to their students (Agarwal and Kaushik 2020, p 554). The extensive use of media like movies, high-end graphics, pictures, and augmented reality technology has made the task of presenting and conveying concepts more difficult. There has been a dramatic improvement in the quality of education as a result of smart courses being integrated within the framework of the conventional curriculum (Rajan 2022, p19). Online teaching apps with a myriad of great features may drastically transform the way that content is presented to students.</p>
<p>The digital resources used by online teachers are accessible to a large audience. It provides a lot of leeway in terms of when, where, and how information may be learned and shared. More time and energy may be spent on each student in this way of teaching (Singh et al., 2021). This allows them to confidently take on more advanced material. Access to consistent internet and computer systems is essential for online learning. As the number of people who own smartphones grows, so does the number of apps available for them. Student enrolment and attendance have both risen as a result of mobile live-teaching applications (Rawal 2021). School districts and individual schools can benefit from Teaching's scalable Integrated School Platform. With this system, institutions may run their day-to-day activities from one centralized location. For instance, ERP software might be used to simplify the process of enrolling students in schools (Gogu and Kumar 2021, p412). The LMS portal offers the same sort of adaptable learning space for teachers and students. India has adopted e-learning in different courses in India.</p>

<p class="text-center">Figure 1: Online courses in India</p>
<p class="text-center">(Source: Today India 2022)</p>
<h3>In The Wake Of The Emergence Of A New Web Platform</h3>
<p>With schools under lockdown and subject to various limitations because to the Covid-19 outbreak, more and more educators and students are resorting to online materials for learning. There is, however, indication that online learning tools are effective, so they must not be dismissed as a fast remedy in the middle of a catastrophe similar to the present pandemic (Jena 2020). Teachers can deliver lessons, and students can study at their individual speed. Courses are dynamic in the sense that new material may be added at any time, and previous material can be revisited at any time (Chinmi et al., 2020). The vast majority of today's college students believe that they can learn more effectively in an online setting (MacIntyreet al., 2020). People in the education sector, including schools and students, are committing to digital tool integration for the long haul. According to GM Insights, the online education market would be worth more than $311 billion by 2027. Between 2017 and 2027, that's a compound annual growth rate of almost 21% (Darby and Lang 2019). Different e-learning tools has emerged in India which is leading the online education market and increasing its prospects in India. Among them Byjus is leading the platform efficinetly (Sun et al., 2020, p687). During the Covid-19 epidemic, an Indian ed-tech company grew rapidly via acquisitions, eventually becoming the largest firm of its kind in the world. With a capitalization of $16.5 billion, Byju's is one of India's largest digital unicorns(Jena 2020). In the past year, it has completed a number of acquisitions that have strengthened its core services and allowed it to penetrate allied markets.</p>

<p class="text-center">Figure 2: E-learning tools in India</p>
<p class="text-center">(Source: India Today 2022)</p>
<h3>The Present State Of Online Education In India</h3>
<p>Since the COVID-19 lockdown has spread across the country, K-12 and higher education institutions everywhere have been forced to cancel classes and release students early. The closure has created significant challenges for governments, organizations, educators, parents, and carers worldwide (Darby and Lang 2019). Numerous countries are adapting to this shift by implementing innovative educational programmes that make use of cutting-edge tools. Live, online classes and MOOCs (Massive Open Online Courses) are encouraged as a way for educators in practically all parts of the world to stay in contact with their students. Since the advent of widespread Internet access, online courses have been widely used by educators at all levels of education, from primary schools to graduate schools (Singh et al., 2020, p678). The online technology stack, which includes tools like Blackboard, Microsoft Teams, Google, Classroom, and Zoom, has been important in making the transition to online learning possible (Taso and Chakrabarty 2020, p719). This is being adopted in most of the region and state in India.</p>

<p class="text-center">Figure 3: Online Education market growth in India</p>
<p class="text-center">(Source: CISION 2022)</p>
<p>The digital gap in India is being both highlighted and bridged by the rapid expansion of online education. The number of students in India is projected to increase by 50% in the coming 15 years, yet only a small fraction of the country's universities and colleges will possess the resources to meet this demand (Sahi et al., 2020, p653). There is hope that the availability of education in this format can help solve this problem. Now that regulations have been loosened, Indian universities may begin providing online programmes alongside their counterparts in other countries. In an effort to increase college access, the enrolment limit for online courses has been lifted from 20% to 100%. As an example of the broad upheaval in the educational system, consider Covid-19's quick, required move to online courses (Pal and Vanijia 2020). Digital education is the way of the future, and if the right systems and rules were in place, kids may be better prepared for it. Projections indicate that by 2021, India's online education market would be worth $1.96 billion, up from $247 million in 2016(Singh et al., 2020, p679). The average annual rate of expansion is now 52%. In 2016, an estimated 1.6 million persons enrolled in online courses; by 2021, that number is expected to have increased to 9.6 million (Jena 2020). As the cost of a traditional university education is expected to rise by as much as 175% over the next decade, the alternative of getting an education online is gaining ground. In India, where over half of the population is under the age of 40 and has both high aspirations and little money, there is a sizable market for online education companies. The use of digital platforms also has strong approval among young people. These statistics emphasise the relevance and potential of distance learning in the country.The companies that have been bought out span the globe, from the augmented reality firm Whodat in Bengaluru to the skill-building platform Great Learning in Singapore to the digital reading platform Epic in the United States. According to Tracxn's records, Byju's has spent over $2.6 billion on purchases since the company's founding in 2011 (Joshi et al., 2020). The Covid-19 epidemic catalysed a dramatic increase in the popularity of online universities, and hence, the vast majority of these transactions particularly the larger ones occurred thereafter.Greater than $1.5 billion has been invested in India's edtech businesses this year alone, surpassing the total amount invested over the previous five years (Mehrotra and Parida 2019). Redseer found that between 2014 and 2019, edtech start-ups in India raised a total of $1.6 billion.Udemy, an online marketplace with more than 30 million students and 42,000 teachers, has announced today that it is expanding its operations into India, with a new staff base located in the city of Gurgaon (Joshi et al., 2020). With both revenue and enrolment expanding year after year in India, the country has become one of the company's most promising emerging markets. Thus, private sector has been playing important role in online education in India.</p>
<p>India's "Digital India" initiative is a major global initiative. Each aspect of health, education, labour, employment, etc. is addressed by a different programme under the initiative (Dwivedi et al., 2020, p1). Through the Digital India initiative, several Indian educational institutions are launching distance learning courses.</p>
<p>According to the KPMG study, the number of students using digital resources to be ready for standardized exams will rise dramatically over the next years (Saiyad et al., 2020). Multiple online platforms may replace or enhance the present offline test prep sector in preparing students for exams like the JEE Main, NEET, CAT, Bank PO, and CLAT(Hasan and Khan 2020, p205). New competitors are entering the market for online test preparation by introducing exam-specific mobile apps. And because there arenot enough good instructors to go around, students in secondary cities are increasingly using the internet to make up for the gap (Tandon 2021). People living in tier 1 cities are more likely to take entrance exams for high-demand fields like as banking, business school, and government. However, students in lower-tier cities are more likely to use online resources to prepare for introductory-level exams in STEM disciplines, the health sciences, and the legal profession.</p>
<h3>Modifications to Online Education in India</h3>
<p>Numerous Indian parents experienced online education for the first time when the COVID-19 pandemic caused the closure of many Indian schools. Some families have found success with online education, while others have been let down by its flaws (Dhawan 2020, p17). In view of the global catastrophe created by the viral epidemic, immediate adjustments needed to be made to the educational system. This abrupt transition from traditional classrooms to online learning presented several unanticipated challenges.</p>
<p>Low student engagement, difficult online programme development and execution, scarce teaching materials, and a lack of technological tools were just some of the obstacles that most teachers had to overcome in order to keep their students' educations afloat (Nambiar 2020, p786). However, the quick expansion of online learning presented significant challenges for many students and teachers, particularly in less-populated areas of India (Muthuprasad et al., 2021). Their lack of computer skills, subject-matter expertise, and time availability made it difficult for them to meet the online learning environment head-on.</p>
<p>Since it is often held that educational resources in India's rural areas are inadequate, many individuals have written off the idea of distance learning completely (Pandit and Agarwal 2022, p265). Although it got off to a shaky start in India, many people now consider this creative media to be a viable choice. The Times of India conducted a survey and found that many people in rural India are interested in taking advantage of online schooling. As for the results, here are two (Kamble et al., 2021, p201). During the school vacation, 11% of rural Indian households purchased a new phone, yet only 2% of rural Indian students used WhatsApp (Shrivastava et al., 2022, p126).The eagerness of rural institutions and colleges to adopt E-learning was also highlighted in articles published by India Today (India Today 2022). As of now, a whole new era has begun. If current trends continue, India will have the second-highest population of internet users in the world in 2019. In February of 2021, it is projected to have 624 million customers, making it the second largest internet market in the world (Kaur et al., 2020, p563). Another indication of the growing demand for online education in India is the popularity of the educational software Byjus. In 2019, sales of this product line increased by three times their 2018 levels. It also has a huge national subscriber base of 2.8 million (Chandra 2020). Health issues took focus away from the shift to virtual learning, thus no one was able to realize the benefits of online education (Hassan and Mirza 2021). It is hard to draw parallels between the chaos of the pandemic and the structure of an online course.</p>
<h3>Benefits Of Online Teaching In India</h3>
<ul>
<li>Online education has several advantages. It is more cost-effective than the conventional system of education, requires less time and effort from the student, and benefits students with a wide range of learning styles and physical limitations. Additionally, it gives students the flexibility to study at their own pace and in their own environments (Pal and Vanijia 2020).</li>
<li>In India, where a lack of transportation is a major barrier to attending school, online education has the ability to level the playing field. The programme may modify its lessons to accommodate the individual learning styles of each student, keeping in mind the paramount necessity of putting the child's needs first. This benefit raises the possibility of academic achievement (Shenoy et al., 2020, p699). Improvements in self-discipline are another benefit of independent study methods including journaling, meditation, and journaling.</li>
<li>Self-discipline is one of the benefits of learning online. It is not only about making healthy changes to their routine; it extends to their professional life and interpersonal relationships as well (Tripathy an Devarapalli 2021). As a general rule of thumb, when people have a lot going on, their personal connections might take a back seat. However, because of the flexibility of online learning, students may devote more time to outside interests (Ware 2023, p1873). The mental and emotional well-being of an individual can benefit from time spent with loved ones.</li>
<li>It is possible to include several non-traditional teaching and learning strategies into online courses. Included in this category are video and audio recordings, interesting writings, animated examples, and online lessons (Chatterjee 2020, p82). Synchronous learning allows students to communicate with teachers in real time. Online learning has the ability to exceed more traditional approaches to education when utilised to its utmost degree. It's engaging, informative, and individualised to each student's needs.</li>
<li>India's educational system has progressed beyond its lecture-hall roots. In its place, modern education places a premium on personalised and flexible learning. Despite many efforts and shifts in policy, it has been challenging to meet the educational requirements of children with special needs in India (Lall and Singh 2020, p51).</li>
</ul>
<h3>Limitations Of Online Education In India</h3>
<ul>
<li>Many of today's online students experience isolation, loneliness, and reflection as a result of their studies. Because of the long hours spent online, many students and teachers may be at risk for developing signs of social isolation (Gurung 2021, p13). Isolation and loneliness are linked to a host of unfavourable mental health outcomes, including but not limited to increased stress, anxiety, and negative thinking.</li>
<li>Using E-Learning techniques is a terrific way to help students learn (Saiyad et al. 2020). Communication skills, however, are rarely stressed in virtual schools. Because of the impossibility of reading body language online, students may struggle to collaborate effectively in virtual groups. According to Sathyan and Krishna Prasad (2021, p77) there will be many graduates who excel in their theoretical subjects but are unable to successfully teach it to others if professors do not place enough focus on students' abilities to transfer their knowledge to others.</li>
<li>In a traditional classroom, teachers may provide pupils immediate, in-person feedback. Professors are always accessible to aid students who are experiencing trouble with the content, both during class and office hours (Hassan and Mirza 2021). Individual remarks from teachers boost student motivation and simplify, enhance, and elevate the value of the learning process.</li>
</ul>
<h3>Problem-solving Measures Must Be Used For Limitations Of Online Classroom</h3>
<ul>
<li>Students still benefit from face-to-face meetings and discussions, even in an online classroom (Shenoy et al., 2020, p 700). This way, even if lessons are taken online, students are still given the opportunity to develop the kinds of communication skills they'll need to succeed in the profession.</li>
<li>To prevent students from plagiarising their work, any respectable online institution will employ anti-cheating measures (Gaur et al., 2020). Today, the most widely-used anti-cheating technology in e-learning is online testing platforms like Examity, which use a variety of methods to detect and eliminate dishonest test-takers, such as automated Proof of identity and machine learning.</li>
<li>Being able to motivate and discipline oneself independently is crucial in an online learning environment (Nambiar 2020, p789). Internet contact with teachers may stand in for face-to-face dialogue, and peer-to-peer activities among online students should be promoted in the same way they might be in traditional classrooms.</li>
</ul>
<h3>Literature Gap</h3>
<p>The study's author has recognized a void in the existing literature. Researchers noted that while they conducted secondary research the real-life experience of teachers about their experiences with online education, along with the students, whose ideas about the subject matter are also important in assessing the degree to which the online education has influenced the education in India was limited. In addition, this study did not account for the impact of online education in rural locations with weak Internet connectivity, where such courses would be impractical.</p>
<h3>Chapter Summary</h3>
<p>"Online teaching" refers to any type of instruction that is delivered only through electronic means. Online video conferencing, virtual seminars, and real-time text chat rooms are all instances of live online pedagogical tools. These technology aids are designed to facilitate learning and assessment. It's also worth looking into the lucrative market of online tutoring. The integration of intelligent courses into the foundation of the established educational system has made learning easier and more enjoyable for a wider range of people. With so many exciting opportunities, online teaching technologies have the potential to significantly alter the way information is conveyed to students.</p>
<h2>Discussion</h2>
<p>From above analysis and findings, it was seen that four themes had been generated which were Relevance of online courses in future, Role of technology in online education, Integration of teachers and future career advancements as well as challenges of implementing online education in India.</p>
<p>From the aspect of online education relevance in India it was seen that e-learning, also known as online learning, is rapidly growing into one of the most important methods that are used to educate students at all levels, including elementary school, middle school, high school, and university (Martin, Collie and Nagy 2021). Students all throughout India have noticed an upsurge in the number of online courses and e-learning tools that help in student engagement and involvement since the onset of the COVID-19 epidemic. These developments came about as a direct response to the pandemic. The findings of a media report indicated that the format of an online education course is significantly more convenient than the structure of a traditional education course (The Statesman 2023). For instance, when education is provided through the medium of the internet (e.g., e-education), students have the ability to obtain it from any location, including bypassing the traditional method of attending a traditional school. Under this theme it was also found that with the added benefit of giving everyone concerned the opportunity to set up a schedule that works for them, online education allows both teachers and students to choose their own learning pace. For supporting this theme one portion of the research of Al Rawashdeh et al.,(2021, p 112) could be mentioned which entailed that, it is not necessary to give up anything in order to make use of an educational platform that can be accessed online because doing so enables a better balance to be struck between one's professional and academic responsibilities. Users are free to learn at their own speed and enjoy the total freedom that e-Learning provides. This makes it easier for the students to schedule their study time for the amount of time that they are able to focus for. In addition to being flexible, students who pursue their education online benefit from individualised instruction that is tailored to their specific needs and current levels of expertise (Ametova and Mustafoeva 2020, p 62). From the report of The Statesmen (2022) it was also seen that in recent years, there has been a significant amount of progress made in online education. It features an intuitive and straightforward user interface. Students are able to replicate the environment of a traditional classroom without leaving the comfort of their own homes. Due to the effectiveness of the online testing mechanism, most tests are developed and delivered in an online manner these days. E-learning gets students used to an environment that is very similar to that of an exam, which speeds up their reaction time and improves their chances of doing well. The happiness of the student is always put first, and this is made possible by the abundance of different educators and classes that may be taken, along with free trials and generous return policies.</p>
<p>The following theme that was identified in the findings indicated about role of technology in online education in India which is one of the major and crucial part. The whole educational system has been fundamentally reimagined as a result of the rise of modern technologies. Students now have more control over when and where they learn, turning the traditional idea of a classroom on its head thanks to advancements in technology. Students now have the ability to learn at their own speed thanks to media such as video lectures, audio recordings, as well as digital resources (Martin, Collie and Nagy 2021). In addition, the use of technology helps to keep students' attention, which results in improved information retention among the student body. The use of technology has transformed certain aspects of teaching more efficient and straightforward (Costley 2014). A good example of this would be a teacher setting up an online quiz for their class, which would provide the students fast results and comments on their performance.</p>
<h2>Conclusion</h2>
<p>COVID 19 has changed the education system of the entire world and not only India. Online education system has already been found to be relevant in all the states of India. This is because of the fact that all the states of India did suffer from COVID 19. In other words, it can be said that online education system has been implemented in all the states of India during and after the pandemic. The current research study has filled the existing research gap, associated with the future prospects of online learning or education in India. Online courses have been found to be relevant in the future of education in India. The online education approach has been found to be beneficial for the students since it is specifically providing them the scope of reading and writing and the same time, along with simultaneous doubt clearing process. Online learning has also been found to increase the diversity of students in Indian education system. The future prospects of online education have also been found to be linked to including more and more students from remote places, where the offline modes of education cannot reach. Another research objective was completed where the technological prospective of future of online education in India was analyzed. There are various technological prospective of online education in India. Education sectors were found to implement stronger signal receivers and transmitters, which can allow a smooth running of online classes in remote areas. Ed-techn foundations have been found to be associated with one such approach, which is focussed on the progression of digital education in India. Another objective regarding the integration of teachers as well as future career advancements was achieved. The future of online education platforms allows both the teachers as well as their students to complete their professional developments. Teachers can also participate in online courses as students, in order to learn something new.</p>
<h2>References</h2>
<p>Agarwal, S. and Kaushik, J.S (2020). Studentâ€™s perception of online learning during COVID pandemic. The Indian Journal of Pediatrics, 87(7), pp.554-554.https://link.springer.com/article/10.1007/s12098-020-03327-7</p>
<p>Al Rawashdeh, A.Z., Mohammed, E.Y., Al Arab, A.R., Alara, M. and Al-Rawashdeh, B (2021). Advantages and disadvantages of using e-learning in university education: Analyzing studentsâ€™ perspectives. Electronic Journal of e-Learning, 19(3), pp.107-117.https://academic-publishing.org/index.php/ejel/article/view/2168</p>
<p>Al-Asmari, A.M. and Rabb Khan, M.S (2014). E-learning in Saudi Arabia: Past, present and future. Near and Middle Eastern Journal of Research in Education, 2014(1), p.2.https://www.qscience.com/content/journals/10.5339/nmejre.2014.2</p>
<p>Alhat, S (2020). Virtual Classroom: A Future of Education Post-COVID-19. Shanlax International Journal of Education, 8(4), pp.101-104.https://eric.ed.gov/?id=EJ1267937</p>
<p>Ametova, O.R. and Mustafoeva, N.I. (2020). The benefits and drawbacks of online education for law students in higher educational institutions. ISJ Theoretical &amp; Applied Science, 12(92), pp.61-63.https://api.scienceweb.uz/storage/publication_files/290/120/c8d5270aadd3___290-full-61024f400611c.pdf</p>
<p>Basar, Z.M., Mansor, A.N., Jamaludin, K.A. and Alias, B.S(2021). The Effectiveness and Challenges of Online Learning for Secondary School Studentsâ€“A Case Study. Asian Journal of University Education, 17(3), pp.119-129.https://ieeexplore.ieee.org/abstract/document/9930444/</p>
<p>Beck, C.T(2019). Secondary qualitative data analysis in the health and social sciences. Routledge.</p>
<p>Castleberry, A. and Nolen, A., 2018. Thematic analysis of qualitative research data: Is it as easy as it sounds?. Currents in pharmacy teaching and learning, 10(6), pp.807-815.https://www.sciencedirect.com/science/article/pii/S1877129717300606</p>
<p><strong>Must Also Read:- <Link title="Digital Media Major Project" to="https://thestudenthelpline.com/sample/comm2585-digital-media-major-project.php">Digital Media Major Project</Link></strong></p>
<h3>List Of Some More Management Assignment Samples For Students</h3>
<table>
<tbody>
<tr>
<td>LE5102 Event Operations Management</td>
<td>MG411 Introduction to People Management</td>
<td>SUM304 Sustainable Development</td>
</tr>
<tr>
<td>ENTP40075 Management Skills</td>
<td>HM604 Food and Beverage Management</td>
<td>MG629 Developing Leadership and Management Skills</td>
</tr>
<tr>
<td>MGT5182 International Strategic Management</td>
<td>KMGT604 Strategic Operations Management</td>
<td>SHR043-6 Integrated Management Project</td>
</tr>
<tr>
<td>MOD001115 <Link title="Strategic Management Assignment Help UK" to="https://thestudenthelpline.com/uk/strategic-management-assignment-help.php">Strategic Management</Link></td>
<td>254SAM <Link title="Business Management Assignment Help" to="https://thestudenthelpline.com/uk/business-management-assignment-help.php">Business Management</Link></td>
<td>MAR4006-N Management Research</td>
</tr>
</tbody>
</table> */}
<br/>		  </div>
		  
		  
		
			<div class="free-mambership" id="mambership">

			      <div class="form-section">
				   <h3>Free Membership To World's <br/>
					   Largest Sample Bank</h3>
					  <h4>To View this &amp; another 55555+ free samples.<br/> Please put your valid email id.</h4>
					   
					  
           

			
        <form name="sample_page_form" id="sample_page_form" method="POST">
            

                            <div class="row from-main">
							 <div class="col-12 col-sm-12 form-group">
								<input type="text" id="emailid" placeholder="Email*" name="emailid" class="from-control" autocomplete="off"/> 
								<input type="hidden" id="sample_pid" name="sample_pid" value="18"/>
							 </div>
							  <div class="col-md-12 row">
								<div class="captcha-main col-md-12">
									<span>
									<img id="captcha" src="https://thestudenthelpline.io/captcha.php" alt=''/>
									{/* <small><Link to="javascript:void(0)" onclick="
									document.getElementById('captcha').src = 'https://thestudenthelpline.io/captcha.php?' + Math.random();
									document.getElementById('captcha_code_input').value = '';
									return false;
									">refresh</Link></small> */}
									</span>
								  <span>
									 <input type="text" placeholder="Enter Captcha" size="6" maxlength="5" name="captcha" value="" class="captch from-control"/> 
								  </span>
								  <p id="alertBoxsd"></p>
								</div>
							 </div>
							 
							
				
							 <div class="col-md-12">
								 <div class="form-group terms-c">
									  <input type="checkbox" checked="" id="tems" name="terms" value="Yes"/>
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
   

    <form>
    <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1"/> 
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone"/>
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
                                 <Form/>
                                 </div>

                                 <div class="course__sidebar-widget-2 white-bg mb-20"><div class="course__sidebar-course"><h3 class="course__sidebar-title">Recent Post</h3>
                                 <div class="blog-cat2">
			     <ul class="cat-list2">
				 				   <li><span class="imgb"> <img src="assets/img/sample/FINM4100-assessment-answer.webp" alt='p1'/></span><Link to="https://thestudenthelpline.io/blog/how-to-write-finm4100-assessment-answer.php">How To Write FINM4100 Assessment Answer</Link><span>2023-10-06</span></li>
				   				   <li><span class="imgb"> <img src="assets/img/sample/Ai-in-Education.webp" alt='p2'/></span><Link to="https://thestudenthelpline.io/blog/role-of-ai-in-education.php">Role Of Ai In Education</Link><span>2023-04-15</span></li>
				   				   <li><span class="imgb"> <img src="assets/img/sample/Tips-To-Memories-Multiplication-Chart.webp" alt='p3'/></span><Link to="https://thestudenthelpline.io/blog/tips-to-memorize-multiplication-chart.php">Tips To Memorize Multiplication Chart</Link><span>2023-04-10</span></li>
				   				   <li><span class="imgb"> <img src="assets/img/sample/Excuse-For-Not-Doing-Homework.webp" alt='p4'/></span><Link to="https://thestudenthelpline.io/blog/excuses-for-not-doing-homework.php">Excuses For Not Doing Homework</Link><span>2023-04-10</span></li>
				   				   <li><span class="imgb"> <img src="assets/img/sample/tips-that-will-help-you-draft-the-best-reflection-paragraphs.webp" alt='p5'/></span><Link to="https://thestudenthelpline.io/blog/tips-that-will-help-you-draft-the-best-reflection-paragraphs.php">Tips That Will Help You Draft The Best Reflection Paragraphs</Link><span>2023-03-25</span></li>
				   				 </ul>
			   </div>
                                 </div></div>
                
                                 <div class="row sample2">
					 <div class="col-sm-6">
					   <div class="ord-b"> 
						<img src="assets/img/sample/order-1.webp" alt=''/>
						<h4>21 Step Quality Check</h4>
					   </div>	
					 </div>
					<div class="col-sm-6">
					   <div class="ord-b"> 
						<img src="assets/img/sample/order-2.webp" alt=''/>
						<h4>2000+ Ph.D Experts</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
						 <div class="ord-b">
							<img src="assets/img/sample/order-3.webp" alt=''/>
							<h4>Earn while you Learn with us</h4>
						</div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="assets/img/sample/order-4.webp" alt=''/>
						  <h4>Confidentiality Agreement</h4>
						</div>
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						<img src="assets/img/sample/order-5.webp" alt=''/>
						<h4>Live Expert Sessions</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="assets/img/sample/order-6.webp" alt=''/>
						  <h4>Dedicated App</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="assets/img/sample/order-7.webp" alt=''/>
						  <h4>Money Back Guarantee</h4>
						</div>	
					 </div>
					  <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="assets/img/sample/order-8.webp" alt=''/>
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