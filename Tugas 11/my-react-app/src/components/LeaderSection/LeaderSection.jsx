import './LeaderSection.css'
import LeaderCard from './LeaderCard/LeaderCard'

const leaders = [
   {
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2DFkEQQFyU0vPOZoUP4mMyMGEjYycTfb3A&s",
     name: "Larry F. Burnett",
     role: "CEO"
   },
   {
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s",
     name: "Meghan J. Webb",
     role: "CTO"
   },
   {
     image: "https://thumbs.dreamstime.com/b/image-cheerful-businessman-showing-ok-sign-taking-selfie-photo-isolated-over-grey-background-image-cheerful-181487668.jpg",
     name: "Yvonne J. Cullum",
     role: "CFO"
   },
   {
     image: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
     name: "Diana H. Williams",
     role: "COO"
   }
];

export default function LeaderSection() {
   return <>

   <section className="leader">
      <div className="leader-title">
         <h2>\ Team \</h2>
         <h3>Our Leader</h3>
      </div>

      <div className="leader-content">
         {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} />
         ))}

         {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} />
         ))}
      </div>
   </section>
   </>
}