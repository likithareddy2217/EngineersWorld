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
          <img src="/leadership/CEO.jpg" alt="" />
          <h2>Chief Executive Officer (CEO)</h2>
          <p>AKSHAY KUMAR At the helm of Engineers World is our esteemed founder, Akshay Kumar, a visionary with profound expertise in the realms of cybersecurity, cloud computing, and web development. Akshay’s extensive knowledge and hands-on experience have been the cornerstone of our company’s success. His leadership is driven by a passion for innovation and a commitment to excellence, which has propelled Engineers World to the forefront of the tech industry. Under Akshay’s guidance, we continue to push the boundaries of what’s possible, creating a legacy of empowerment and advancement in the digital world.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/cofounder.png" alt="" />
          <h2>Co-Founder</h2>
          <p>Mohammad Akheel is the co-founder of Engineers World and a driving force behind our innovative solutions. With a robust skill set in Networking, Linux, Dockers, Kubernetes, Ansible, and Terraform, Akheel brings a wealth of technical expertise to our team. His advanced knowledge in AI/ML and data science further enhances our capabilities, enabling us to develop cutting-edge technologies that address complex challenges. Akheel's dedication to excellence and continuous learning ensures that Engineers World remains at the forefront of technological innovation. His leadership and vision are instrumental in guiding our projects and delivering top-notch solutions to our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/uiuxdesigner.png" alt="" />
          <h2>UI/UX Designer</h2>
          <p>Shivansh Bhardwaj is our talented UI/UX Designer at Engineers World. With a keen eye for design and a passion for creating intuitive user experiences, Shivansh plays a crucial role in shaping the visual and interactive aspects of our projects. His expertise extends to Data Analysis and Web Designing, allowing him to blend aesthetic appeal with functional design seamlessly. Shivansh's dedication to user-centric design ensures that our products are not only visually appealing but also highly user-friendly. His innovative approach and attention to detail help us deliver exceptional digital experiences that meet the needs of our clients and users alike.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/androidDeveloper.png" alt="" />
          <h2>Android Developer</h2>
          <p>Juvvala Shiva Kesava Rao is a skilled Android Developer at Engineers World, bringing a wealth of expertise in mobile application development. His proficiency extends beyond Android development to include **React.js, Spring Boot, and SQL, making him a versatile and valuable member of our team.Shiva's comprehensive skill set allows him to create robust and efficient mobile applications while also contributing to web development and backend solutions. His dedication to staying updated with the latest technologies ensures that our projects are built using the best practices and cutting-edge tools.Shiva's innovative approach and technical acumen play a crucial role in delivering high-quality solutions that meet the diverse needs of our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/marketing.jpg" alt="" />
          <h2>Marketing Executive</h2>
          <p>Yeshwanth is our dynamic Marketing Executive at Engineers World. With a strategic mindset and a passion for driving growth, Yeshwanth plays a pivotal role in promoting our brand and expanding our reach. His expertise in marketing strategies, campaign management, and customer engagement ensures that our message resonates with our target audience.Yeshwanth's innovative approach and keen understanding of market trends help us stay ahead in the competitive tech landscape. His dedication to excellence and ability to connect with clients and partners make him an invaluable asset to our team.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/softwaretester.png" alt="" />
          <h2>Software Tester</h2>
          <p>Karthik Boosa is a proficient Software Tester at Engineers World, bringing a meticulous approach to ensuring the quality and reliability of our software products. In addition to his expertise in software testing, Karthik is skilled in *Java* and *Android development*, making him a versatile member of our team.Karthik's comprehensive understanding of both development and testing processes allows him to identify and resolve issues efficiently, ensuring that our applications meet the highest standards of performance and user satisfaction. His dedication to excellence and continuous improvement is instrumental in delivering robust and reliable solutions to our clients.</p>
        </div>
        <div className="leadership-card">
          <img src="/leadership/cyberAnalyst.jpg" alt="" />
          <h2>Cyber Security Analyst</h2>
          <p>Mendru Sai Sujith is a proficient Cyber Security Analyst at Engineers World , Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id optio dolorem vel tempora soluta excepturi quos nisi maxime, voluptates earum cupiditate, repudiandae non aperiam! Ullam officiis impedit quos incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat iure neque itaque dolor voluptate officiis autem blanditiis. Temporibus deserunt nostrum assumenda odio dolores voluptatibus asperiores? Atque dolore omnis ducimus.</p>
        </div>
        <div className="leadership-card">
          <img src="" alt="" />
          <h2>Frontend Developer</h2>
          <p>Muli Surya Narendra Reddy is a proficient Frontend Developer at Engineers World , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam deserunt distinctio delectus! Quod mollitia at ex blanditiis porro. Reiciendis quam dolorum excepturi non nesciunt illum, perspiciatis id consequatur cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa esse odit quidem ea neque dicta illo nam assumenda minima voluptatibus inventore repudiandae, et quasi asperiores provident. Tenetur, corrupti ea.</p>
        </div>
        <div className="leadership-card">
          <img src="" alt="" />
          <h2>Frontend Developer</h2>
          <p>Satti Likitha Reddy is a proficient Frontend Developer at Engineers World , Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, provident deserunt, labore earum ex eum odio unde similique perferendis minus nam iure quod? Et, maiores debitis error ad aspernatur ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate placeat facilis beatae blanditiis illo cupiditate sequi, atque voluptas, labore, nam at. Sunt numquam perferendis quidem molestiae aliquid facere reprehenderit dolore?</p>
        </div>
      </div>
    </section>
  )
}

export default Leadership;