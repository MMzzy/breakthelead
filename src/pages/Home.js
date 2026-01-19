import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container home-naslov ">
          <h1>BreakTheLeads</h1>
        </div>
      </section>
      <hr className="razdijelnik" />
      <section className="uvod d-flex align-items-center">
        <div className="container home-uvod">
          <p className="uvod-1">
            LET'S BREAK SOME LEADS - JER SE IZA SVAKOG KVALITETNOG LEADA KRIJE PRILIKA KOJA ČEKA DA SE OTVORI, ISKORISTI I PRETVORI U PROFIT!
          </p>
          <p className="citat-1">
            “Leads are the lifeblood of any business.” - Everyone, ever. 
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
