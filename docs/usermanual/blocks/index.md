# Blocchi di Programmazione

CoderBot è programmabile tramite un linguaggio di programmazione basato su blocchi.

Ogni blocco rappresenta una istruzione che viene eseguita da CoderBot quando si attiva il programma con il bottone "Avvia".

I blocchi possono essere combinati insieme formando programmi complessi, eseguiti da CoderBot in base all'ordine nei quali appaiono e ai legami tra blocco e blocco.

L'ambiente di programmazione ed esecuzione è basato su [Blockly], al quale sono stati aggiunti alcuni blocchi speciali, che interagiscono con caratteristiche specifiche di CoderBot.

I blocchi sono divisi in categorie, di seguito l'elenco di tutti i blocchi speciali a disposizione del programmatore di CoderBot.

## Movimento

Blocchi per il controllo dei motori che permettono a CoderBot di spostarsi e controllare i due servomotori (opzionali).

### Muovi avanti

Muove CoderBot in avanti, con velocità e tempo in base a quanto definito nelle impostazioni.

### Muovi indietro

Muove CoderBot in indietro, con velocità e tempo in base a quanto definito nelle impostazioni.

### Muovi a destra

Fa girare CoderBot sul posto verso destra, con velocità e tempo in base a quanto definito nelle impostazioni.

### Muovi a sinistra

Fa girare CoderBot sul posto verso sinistra, con velocità e tempo in base a quanto definito nelle impostazioni.

### Muovi bot (motion)

Muove bot in avanti per la distanza indicata (espressa in cm.). La distanza è calcolata tramite visione artificale e può non essere molto affidabile.

### Gira bot (motion)

a girare CoderBot sul posto per i gradi indicati (espressa in gradi °). La rotazione è calcolata tramite visione artificale e può non essere molto affidabile.

### Muovi bot (tempo)

Attiva i motori di CoderBot per la potenza (da 0 al 100%) e il tempo (in secondi) indicati.

Se il tempo è "-1" allora i motori sono attivati fino a nuova istruzione.

### Muovi bot (distanza)

Muove bot in avanti per la distanza indicata (espressa in mm.). La distanza è calcolata tramite gli encoder montati sui motori.

### Muovi servo

Imposta l'angolo obiettivo per i servomotori.

### Stop

Arresta entrambi i motori

### Attendi

Attende (pausa l'esecuzione del programma) il tempo indicato, espresso in secondi.

## Camera

### Scatta foto

Scatta una foto con la telecamera integrata e la salva nella Galleria.

### Registra video

Avvia la registrazione di un video, che sarà poi salvato nella Galleria.

La registrazione può essere interrotta tramite il blocco [Stop video](#stop-video) ed è comunque interrotta al termine dell'esecuzione del programma.

### Stop video

Termina la registrazione di un video, che sarà poi salvato nella Galleria.

## Visione

### Valore medio immagine

Calcola il valore medio di una caratteristica dell'immagine:
- Luminosità
- Tinta (quale colore)
- Saturazione (colore-bianco e nero)
- HSV (Hue Saturation Lightness)

Può essere usato per valutare la presenza di luce o di uno specifico colore nell'immagine.

### Spazio libero

Determina la presenza di spazio "libero" davanti al robot.

Ritorna un valore numerico, che rappresenta lo spazio libero davanti al robot, espresso in cm.

Utilizza la visione artificiale per determinare l'assenza di ostacoli nella parte di piano davanti al robot stesso, entro 30 cm dal robot stesso.

La funzione è basata sul contrasto, quindi è sensibile a cambi di colore o intensità della superficie.

### Trova linea

Determina la presenza di una linea davanti al robot.

Ritorna una lista di tre elementi, ognuno dei quali nmerico e corrispondente alla posizione della linea rispetto al campo visivo del robot, dove:
- 0 è il lato sinistro
- 100 è il lato destro
- 50 è il centro del campo visivo

Il blocco utilizza la visione artificiale per determinare la presenza di una linea nella parte inferiore del campo visivo del robot, che è a sua volta diviso in tre settori orizzontali, corrispondenti a tre aree rettangolari ordinate dal basso verso l'alto.

### Trova faccia

Determina la presenza di un volto nel campo visivo del robot.

Ritorna una delle misure specificate oppure una lista con tutte, in ordine:
- ascissa (posizione orizzontale rispetto al centro)
- ordinata (posizione verticale rispetto al centro)
- dimensione (grandezza del volto, quindi inversamente proporzionale alla distanza del volto dal robot)

Utilizza la visione artificiale per determinare la presenza di uno o più volti nel campo visivo.

### Trova distanza da colore

Determina la presenza di un oggetto del colore definito nel campo visivo del robot.

Ritorna una delle misure specificate oppure una lista con tutte:
- distanza (posizione dell'oggetto rispetto al robot)
- angolo (angolo rispetto alla verticale, espresso in gradi, 0° = centro)

Utilizza la visione artificiale per determinare la presenza di un oggetto del colore specificato.

Per ottenere un buon risultato si consiglia di scattare una foto all'oggetto, direttamente con CoderBot, e di rilevare il colore dell'oggetto direttamente dall'immagine, tramite la funzione disponibile nella Galleria delle immagini.

### Trova testo

Riconosce il testo nel campo visivo del robot.

Ritorna una stringa di caratteri corrispondente al testo riconosciuto nell'immagine, se presente.

### Leggi Bar / QRCode

Legge un codice a barre o un QR code nel campo visivo del robot.

Ritorna una stringa di caratteri corrispondente al codice a barre, oppure al codice codificato nel QR code, se presente.

### Leggi AR Code

Legge un codice di tipo AR code nel campo visivo del robot.

Ritorna il codice numerico corrispondente al codice AR code, se presente.

### Trova classe

Determina la classe dell'oggetto presente nel campo visivo del robot.

Ritorna una stringa di testo corrispondente alla classe dell'oggetto rilevato dalla rete neurale.

[A questo link l'elenco completo delle classi riconosciute](https://github.com/CoderBotOrg/net-models/blob/master/cnn_models/generic_fast_low.txt).

### Trova oggetti

Riconosce gli oggetti presenti nel campo visivo del robot.

Ritorna lista con i primi 3 oggetti riconosciuti, ordinata per confidenza del riconoscimento.

Ogni elemento della lista contiene:
- classe: stringa di caratteri corrispondenti al nome della classe dell'oggetto riconosciuto;
- accuratezza del riconoscimento: 0 minima, 100 massima;
- lista di quattro elementi corrispondenti alle coordinate X1, Y1, X2, Y2 del rettangolo che contiene l'oggetto;

[A questo link l'elenco completo delle classi riconosciute](https://github.com/CoderBotOrg/net-models/blob/master/cnn_models/generic_object_detect.txt).

## Sensori

### Leggi distanza con sonar

Determina la distanza da oggetti davanti (o ai lati, a seconda del sensore utilizzato) di CoderBot.

Ritorna un valore numerico corrispondente alla distanza, espressa in cm, tra il robot e il primo oggetto davanti al sensore sonar a ultrasuoni.

La lettura va da 0 a 340 centimetri, ha una precisione intorno al 2-3% ma può essere instabile (valori che oscillano anche di 50-100cm) se l'oggetto misurato presenta una superficie non piatta e non perpendicolare rispetto al terreno.

### Giroscopio

Ritorna la lettura del giroscopio (se presente) sui tre assi.

### Accelerometro

Ritorna la lettura dell'accelerometro (se presente) sui tre assi.

### Bussola

Ritorna la lettura della bussola (se presente).

### Temperatura

Ritorna la lettura del termometro (se presente).

## Suono

### Pronuncia

Emette un suono di sintesi vocale del testo specificato, nella lingua specificata.

### Registra audio

Registra il suono percepito dal microfono, per il tempo indicato, nel file indicato.

### Riproduci file audio

Riproduce il suono indicato (precedentemente registrato, o presente tra i suoni predefiniti).

### Ascolta suono

Determina la presenza di suoni oltre la soglia indicata, per il tempo indicato.

Ritorana un booleano, "true" se il suono è sopra la soglia e oltre la durata stabilita, altrimenti "false";

### Riconosci parlato

Interpreta il suono come parlato.

Ritorna una stringa di caratteri corrispondente al testo riconosciuto.

## Estensioni I/O

### Leggi input

Ritorna un valore numerico corrispondete al valore letto dall'ingresso analogico (se presente).

### Scrivi Digital Output

Attiva l'uscita digitale specificata (se presente).

### Controlla led

Controlla una striscia di led pilotata da un chip di tipo WS2812B (se presente).

## Musica

### Suona nota

Emette il suono corrispondente alla nota specificata, con lo strumento specificato.

### Strumento (strumento)

Selezione lo strumento specificato.

### Strumento (animale)

Selezione il suono dell'animale specificato come strumento.

### Pausa

Attende per il tempo specificato.