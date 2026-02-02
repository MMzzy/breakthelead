import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Contact = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1102')
      .then(response => response.json())
      .then(
        (data) => {
          setPage(data);
          console.log(data)
        }
      )
      .finally(() => setLoading(false));
    },[]
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

export default Contact;
