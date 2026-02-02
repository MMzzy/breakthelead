import { useState, useEffect } from "react";
import Loader from "../components/Loader";


const About = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

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
      .finally(() => setLoading(false));
    }, []
  )
    
  return (
    <>
      {loading && <Loader/>}
      {!loading && page && (
        <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
      )}
    </>
    
  );
};

export default About;
