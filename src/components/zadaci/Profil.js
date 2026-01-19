import Korisnik from "./data/korisnik.json";
//Funkcija za prikaz korisnika
const Profil = () => {
    /*
    //vitičaste zagrade označavaju objekt
    const Korisnik = {
        //Javascript objekt se sastoji od "key" : "value" parova
        "ime" : "Maj", //ovo su stringovi 
        "prezime" : "Mezić",
        "godine" : 27, //bez navodnika znamo da se radi o broju
        "vozacka" : true, 
        "vjestine" : [
            "HTML", 
            "CSS", 
            "React"
        ], 

        "adresa" : {
            "ulica" : "Vrhovec 6",
            "grad" : "Zagreb",
            "pbroj" : 1000
        }

    } 
    */

    const KorisnikJSON = '{ "ime" : "Maj", "prezime" : "Mezić", "godine" : 27, "vozacka" : true, "vjestine" : [ "HTML", "CSS", "React" ], "adresa" : { "ulica" : "Vrhovec 6", "grad" : "Zagreb", "pbroj" : 1000 }}'

    const Korisnik = JSON.parse(KorisnikJSON);

    
    //Ova komponenta vraća informacije od korisnika
    return (
        <div>
            <h1>Profil korisnika</h1>
            <p>Ime: {Korisnik.ime}</p>
            <p>Prezime: {Korisnik.prezime}</p>
            <p>Godine: {Korisnik.godine}</p>
            <div>
                vještine:
                <ul>
                    
                    {
                        Korisnik.vjestine.map(
                            (vjestina, index) => (  //tu smo rekli da je svaki redak jedna vjestina 
                                <li>{index+1}.{vjestina}</li> //ispisuje vjestinu po vjestinu
                            )
                        )
                        
                    }

                </ul>
            </div>
            <p>Ulica: {Korisnik.adresa.ulica}</p>
            <p>Grad: {Korisnik.adresa.grad}</p> 
            <p>Poštanski broj: {Korisnik.adresa.pbroj}</p> 
        </div>
    )
};

export default Profil;