import { useState, useEffect } from "react";


const About = () => {
  const [page, setPage] = useState(null);

  useEffect(

    () => {
      fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/pages/783') /* kopiramo link i stavljamo ID stranice koji pročitamo kad stisnemo u wordpressu na nju */
      .then(response => response.json())
      .then(
        (data) => {
          setPage(data);
          console.log(data)
        }
      )
    }, []
  )
  


  if(!page) return <p>Učitavanje....</p>;

  
  return (
    <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
  );
};

export default About;
