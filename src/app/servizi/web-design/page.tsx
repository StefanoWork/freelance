import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import HeroWeb from "../../../components/HeroWeb/HeroWeb";
import ServiceFor from "../../../components/ServiceFor/ServiceFor";
import Strategy from "../../../components/Strategy/Strategy";

import check from "../../../Images/check.png";
import Laptop from  "../../../Images/Laptop.png";
import Laptop1 from "../../../Images/Laptop1.png";
import Laptop2 from "../../../Images/Laptop2.png";
import Laptop3 from "../../../Images/Laptop3.png";
import Laptop4 from "../../../Images/Laptop4.png";

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <HeroWeb />
      <ServiceFor
        image={Laptop}
        secondaDescrizione="Oltre a funzionare come biglietto da visita, è uno strumento
            strategico per raggiungere i tuoi obiettivi di business. <br/>Immaginalo
            come una tela bianca, pronta a ospitare la tua storia, i tuoi
            prodotti e i tuoi servizi e a comunicare con il tuo pubblico. <br/><br/>Inoltre ti permette di essere trovato online molto più facilmente. 
            <br/><br/>Ecco come può aiutarti:
            "
        icona1={check}
        titolo1="Ampliare l’autorità della tua attività"
        titolo2="Attrarre nuovi clienti interessati"
        titolo3="Migliorare la tua posizione nei risultati di ricerca di Google"
        titolo4="Migliorare la visibilità online"
        titolo5="Valorizzare il tuo prodotto o servizio"
      />
      <Strategy
        currentPage="Web"
        mItems={[
          { href: "#Ricerca", number: "01.", description: "Ricerca e Analisi" },
          { href: "#Design", number: "02.", description: "Design" },
          { href: "#Sviluppo", number: "03.", description: "Sviluppo" },
          { href: "#Lancio", number: "04.", description: "Lancio" },
        ]}
        image1={Laptop1}
        image2={Laptop2}
        image3={Laptop3}
        image4={Laptop4}
        descrizione1={`Nel primo step individuerò le <span <span style="color: #2176ff">strategie</span> per aiutarti a raggiungere i tuoi
                      obiettivi tramite una ricerca di mercato, analizzando anche i tuoi concorrenti.<br/><br/>
                      Creo tramite wireframe la struttura del sito
                      per identificare come l’utente interagirà con essa.`}
        descrizione2={`Definisco gli<span style="color: #2176ff"> stili, la color palette e la tipografia</span> necessari per rendere unico il tuo sito e per farlo emergere rispetto ai competitor.
                      <br/><br/>Ti fornirò un prototipo che ti consentirà di individuare eventuali modifiche da effettuare. 
                      Successivamente svilupperò il testo necessario per dare forma a tutti i contenuti.
                      `}
        descrizione3={`Svilluperò il tuo sito mettendo come priorità la <span style="color: #2176ff">stabilità e prestazioni</span>, rendendolo compatibile con tutti i device. 
                      Sarà arricchito da eleganti animazioni per far colpo sull'utente.<br/><br/>
                      Verrà ottimizzato per i motori di ricerca per garantire un buon posizionamento 
                      nei risultari. <br/></br/>Infine verrà configurato un <span style="color: #2176ff">Sistema di Gestione Contenuti (CMS)</span> 
                      semplice ed intuitivo per permettere a te o ai tuoi collaboratori di aggiungere e modificare alcuni elementi facilmente e in maniera sicura
                      `}
        descrizione4={`Una volta sviluppato il tuo sito sarà <span style="color: #2176ff">pronto per essere lanciato!</span> <br/>
                      Mi occuperò di tutto e ti procurerò un <span style="color: #2176ff">dominio personalizzato</span> e dei nuovi indirizzi 
                       mail professionali. <br/><br/>Inoltre, il sito sarà adeguato tecnicamente alle normative Europee per 
                       la privacy online. <br/><br/>Infine non voglio lasciarti solo! Ti fornirò <span style="color: #2176ff">supporto continuativo</span> nel tempo e ti assisterò per interventi di manutenzione e aggiornamenti e condividerò le analisi periodiche del rendimento del tuo sito sui motori di ricerca.
                      `}
      />
      <Footer />
    </>
  );
}
