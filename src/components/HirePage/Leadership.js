import React, {useEffect} from "react";
import "./Leadership.css";
function Leadership(){
  useEffect(() => {
    const cards = document.querySelectorAll(".leadership-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="leadership">
      <h1 className="leadership-heading">Our Leadership.</h1>
      <div className="leadership-container">
        <div className="leadership-card">
          <img src="./images/leadership/CEO.jpg" alt="" />
          <h2>Chief Executive Officer (CEO)</h2>
          <p>AKSHAY KUMAR At the helm of Engineers World is our esteemed founder, Akshay Kumar, a visionary with profound expertise in the realms of cybersecurity, cloud computing, and web development. Akshay’s extensive knowledge and hands-on experience have been the cornerstone of our company’s success. His leadership is driven by a passion for innovation and a commitment to excellence, which has propelled Engineers World to the forefront of the tech industry. Under Akshay’s guidance, we continue to push the boundaries of what’s possible, creating a legacy of empowerment and advancement in the digital world.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/cofounder.png" alt="" />
          <h2>Co-Founder</h2>
          <p>Mohammad Akheel is the co-founder of Engineers World and a driving force behind our innovative solutions. With a robust skill set in Networking, Linux, Dockers, Kubernetes, Ansible, and Terraform, Akheel brings a wealth of technical expertise to our team. His advanced knowledge in AI/ML and data science further enhances our capabilities, enabling us to develop cutting-edge technologies that address complex challenges. Akheel's dedication to excellence and continuous learning ensures that Engineers World remains at the forefront of technological innovation. His leadership and vision are instrumental in guiding our projects and delivering top-notch solutions to our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/uiuxdesigner.png" alt="" />
          <h2>UI/UX Designer</h2>
          <p>Shivansh Bhardwaj is our talented UI/UX Designer at Engineers World. With a keen eye for design and a passion for creating intuitive user experiences, Shivansh plays a crucial role in shaping the visual and interactive aspects of our projects. His expertise extends to Data Analysis and Web Designing, allowing him to blend aesthetic appeal with functional design seamlessly. Shivansh's dedication to user-centric design ensures that our products are not only visually appealing but also highly user-friendly. His innovative approach and attention to detail help us deliver exceptional digital experiences that meet the needs of our clients and users alike.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/androidDeveloper.png" alt="" />
          <h2>Android Developer</h2>
          <p>Juvvala Shiva Kesava Rao is a skilled Android Developer at Engineers World, bringing a wealth of expertise in mobile application development. His proficiency extends beyond Android development to include React.js, Spring Boot, and SQL, making him a versatile and valuable member of our team.Shiva's comprehensive skill set allows him to create robust and efficient mobile applications while also contributing to web development and backend solutions. His dedication to staying updated with the latest technologies ensures that our projects are built using the best practices and cutting-edge tools.Shiva's innovative approach and technical acumen play a crucial role in delivering high-quality solutions that meet the diverse needs of our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/marketing.jpg" alt="" />
          <h2>Managing Director</h2>
          <p>Yeshwanth is the Managing Director at Engineers World, leading the company with a blend of technical expertise and strategic vision. He has a strong background in frontend development, ensuring that web applications are not only functional but also user-friendly. Additionally, Yeshwanth is skilled in cybersecurity, safeguarding the company’s digital assets and protecting sensitive information.

          Under Yeshwanth’s leadership, Engineers World has thrived, combining innovation in web development with robust security practices. His dual expertise in frontend development and cybersecurity makes him a pivotal figure in the company's ongoing success.
          </p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/softwaretester.png" alt="" />
          <h2>Software Tester</h2>
          <p>Karthik Boosa is a proficient Software Tester at Engineers World, bringing a meticulous approach to ensuring the quality and reliability of our software products. In addition to his expertise in software testing, Karthik is skilled in *Java* and *Android development*, making him a versatile member of our team.Karthik's comprehensive understanding of both development and testing processes allows him to identify and resolve issues efficiently, ensuring that our applications meet the highest standards of performance and user satisfaction. His dedication to excellence and continuous improvement is instrumental in delivering robust and reliable solutions to our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/cyberAnalyst.jpg" alt="" />
          <h2>Cyber Security Analyst</h2>
          <p>Sujith is a dedicated cybersecurity analyst at Engineers World, bringing a wealth of expertise to the company's security initiatives. With a strong foundation in Java programming, he seamlessly integrates security protocols within application development. Sujith is proficient in using digital forensic tools like Autopsy and FTK Imager, enabling him to effectively investigate and secure digital environments. Additionally, his skills in penetration testing ensure that systems are robustly protected against vulnerabilities.

          Sujith's comprehensive skill set in cybersecurity and programming makes him a vital asset to Engineers World. His meticulous approach and proficiency in advanced forensic tools contribute significantly to safeguarding the company’s digital infrastructure.</p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/developer.jpg" alt="" />
          <h2>Frontend Developer</h2>
          <p>Surya Narendra is a skilled frontend developer at Engineers World. He specializes in creating user-friendly web applications using React.js, ensuring that users have a smooth and enjoyable experience. Surya is also proficient in Core Java, allowing him to work on both the frontend and backend of applications, and he is experienced with MongoDB for efficient data management.

          At Engineers World, Surya's dedication to his craft helps the company innovate and improve its technology. His expertise in React.js, Core Java, and MongoDB makes him a valuable team member, contributing to the development of high-quality, reliable web applications.
          </p>
        </div>
        <div className="leadership-card">
          <img src="./images/leadership/HR.jpg" alt="" />
          <h2>Frontend Developer</h2>
          <p>Likitha is a dedicated frontend developer at Engineers World, known for her expertise in crafting seamless and interactive user interfaces. She excels in frontend development, bringing ideas to life with her deep understanding of web technologies and user experience. Likitha is also skilled in Core Java, allowing her to effectively integrate frontend and backend functionalities.

          Her passion for creating intuitive and efficient web applications makes her a valuable asset to the Engineers World team. Likitha’s ability to blend frontend development with Core Java ensures the delivery of high-quality, reliable web solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Leadership;