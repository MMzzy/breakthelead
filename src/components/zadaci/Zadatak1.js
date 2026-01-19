import korisnici from './data/korisnici.json';

const Zadatak1 = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Korisnici</h1>

      <table
        border="1"
        cellPadding="5"
        style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Username</th>
            <th>Email</th>
            <th>Adresa</th>
            <th>Telefon</th>
            <th>Website</th>
            <th>Firma</th>
          </tr>
        </thead>

        <tbody>
          {korisnici.map((korisnik) => {
            // Složimo adresu u više redova unutar iste ćelije
            const adresa = (
              <>
                {korisnik.address.street}<br />
                {korisnik.address.suite}<br />
                {korisnik.address.city}<br />
                {korisnik.address.zipcode}
              </>
            );

            return (
              <tr key={korisnik.id}>
                <td>{korisnik.id}</td>
                <td>{korisnik.name}</td>
                <td>{korisnik.username}</td>
                <td>{korisnik.email}</td>
                <td>{adresa}</td>
                <td>{korisnik.phone}</td>
                <td>{korisnik.website}</td>
                <td>{korisnik.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Zadatak1;

