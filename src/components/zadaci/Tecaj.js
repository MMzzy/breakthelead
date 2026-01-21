import tecaj from './data/tecaj.json';

const Tecaj = () => {
  return (
    <div className='container'>
      <h1>Tečaj</h1>

      <table className='table mt-3 mb-5'>
        
        <thead>
          <tr>
            <th>Država</th>
            <th>Država ISO</th>
            <th>Valuta</th>
            <th>Šifra Valute</th>
            <th>Kupovni Tečaj</th>
            <th>Prodajni Tečaj</th>
            <th>Srednji Tečaj</th>
            <th>Datum Primjene</th>
          </tr>
        </thead>

        <tbody>
          {tecaj.map((tecaj) => (
            <tr>
                
                <td>{tecaj.drzava}</td>
                <td>{tecaj.drzava_iso}</td>
                <td>{tecaj.valuta}</td>
                <td>{tecaj.sifra_valute}</td>
                <td>{tecaj.kupovni_tecaj}</td>
                <td>{tecaj.prodajni_tecaj}</td>
                <td>{tecaj.srednji_tecaj}</td>
                <td>{tecaj.datum_primjene}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tecaj;

