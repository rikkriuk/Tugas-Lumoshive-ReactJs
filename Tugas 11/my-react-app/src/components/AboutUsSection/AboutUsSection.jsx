import './AboutUsSection.css'

export default function AboutUsSection() {
   return <>
   <section className="about-us">
      <div className="about-us-image">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXkZX2o7F05mcBGUtKuOXFkDwME3TAnuZmQ&s" alt="about-us" />
      </div>

      <div className="about-us-content">
         <div className="about-us-detail">
            <h2>\ About us \</h2>
            <h3>One of the Fastest Way to Business Growth</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo praesentium, ea quo officiis earum amet ratione cumque! Culpa, consectetur? Molestiae quasi neque quos distinctio nostrum! Nulla, atque natus. Sunt!</p>
         </div>

         <div className="about-us-contact">
            <i className="bi bi-person-fill-add"></i>
            <div>
               <h3>Get Instant Professional Advice</h3>
               <p>Ready to Help: <span>+1356 678 7897</span></p>
            </div>
         </div>
      </div>
   </section>
   </>
}