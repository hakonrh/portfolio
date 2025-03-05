<p>
                <h2>Features:</h2>
                Prosjektet ble laget med MERN stacken, altså MongoDB, Express.js, React, og Node.js.
                Siden hadde mange forskjellige features, blant annet et trygt login system med bruk av json web tokens.
                Det var to mulige roller for registrerte brukere, vanlige brukere og admins.
                Adminbrukere hadde flere eksklusive evner, som å redigere og lage nye kort med bruk av REST API-en vi lagde.
                Vi hadde protected routes med react router for å forhindre at ukvalifiserte brukere skulle få tilgang til sider de ikke skulle.
                Vanlige brukere kunne spille spillet for å lage assessment schemes, som andre brukere kunne se, gi rating, eller bookmarke.
            </p>
            <p>
                <h2>Planlegging:</h2>
                Hele prosjektet ble fullført på omtrent en måned, siden det var eksamensperioden.
                Adminsidene var lagd tidligere som del av et arbeidskrav.
                Starten av eksamensarbeidet var å lage figmaprototyper av grensesnittet for vanlige brukere.
                Som en del av oppgaveteksten fikk vi vite hvordan det originale, fysiske Super Assessor spillet fungerte, med et eksempel for hvordan den digitale versjonen skulle se ut.
                En 100% gjenskaping av det fysiske spillet ville ikke vært realistisk å få til på tiden vi hadde, og vi mente heller ikke at det ville funke særlig bra som et digitalt spill heller.
                Derfor gjorde vi noen endringer på spillereglene sånn at det ville være mer realistisk å få lagd, i tillegg til at det er et bedre spill å spille på datamaskin.
                <br /><br />
                <img src={example} alt="example of the game board provided in exam text" /><br />
                Her er eksempelet vi fikk i eksamensteksten for hvordan spillet kunne se ut. Oppdragskortene skulle her bli lagt i midten av brettet.
                Det er mange problemer her, hvor det største er hvor sammenklemt og vanskelig alt er å lese. Hver spiller har seks kort på hånden, og kan erstatte et kort de velger på sin tur.
                Med seks kort på hånden, seks kort på bordet, og tre oppdragskort i tillegg synlig på skjermen til alle tider blir alt ekstremt sammenklemt og vanskelig å forstå
                I tillegg er det altfor vanskelig å lese kortene på bordet når de ligger på vinkel som det.
                <br /><br />
                <img src={figma1} alt="our figma prototype of the game board" /><br />
                Dette er vår figmaprototype av brettet.
            </p>