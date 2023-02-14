# Programmi predefiniti

CoderBot è predisposto con alcuni programmi pronti all'uso.

I programmi si dividono in due categorie, in base all'obiettivo che si propongono di risolvere:

- Programmi di test: utili per dimostrare o verificare il corretto funzionamento di una particolare funzione del robot;
- Programmi dimostrativi: sono pensati per svolgere un compito significativo (ad esempio: muoversi evitando gli ostacoli), possono essere usati sia per dimostrare le caratteristiche del robot che come base di partenza per attività didattiche;

I programmi di esempio non possono essere alterati, ma è possibile crearne una copia, salvarla con nome diverso e a piacere, e apportarvi liberamente modifiche.

## Descrizione dei programmi

### test_cnn_classifier

Programma di test del blocco [Trova classe](../blocks/#trova-classe).

### img_average_test

Programma di test del blocco [Valore medio immagine](../blocks/#valore-medio-immagine).

### test_output

Programma di test del blocco [Scrivi Digital Output](../blocks/#scrivi-digital-output).

### test_led

Programma di test del blocco [Controlla led](../blocks/#controlla-led).

### test_sonars

Programma di test del blocco [Leggi distanza con sonar](../blocks/#leggi-distanza-con-sonar).

### ar_bot

Programma completo che ha lo scopo di fare in modo che CoderBot "obbedisca" ai segnali che è in grado di vedere con la telecamera.

Il programma utilizza il blocco [Leggi AR Code](../blocks/#leggi-ar-code) per riconoscere dei particolari segnali (detti anche "tag"), ai quali è associato un codice numerico.

In base al codice riconosciuto, CoderBot esegue delle azioni predefinite:

- "1" rotazione verso sinistra
- "2" movimento in avanti 
- "3" rotazione verso destra
- "4" rotazione breve a destra e a sinistra, restando sul posto, poi pronuncia la frase "sono arrivato!"
- "5" pronuncia la frase "attenzione!"

Il programma può essere facilmente esteso in modo da interpretare altri codici che possono essere associati ad altre azioni: movimenti o emissione di suoni.

### find_code_test

Programma di test del blocco [Leggi Bar / QRCode](../blocks/#leggi-bar-qrcode).

### test_cnn_object_detect

Programma di test del blocco [Trova oggetti](../blocks/#trova-oggetti).

### demo_obstacle_avoidance

Programma completo per far muovere CoderBot su una superficie in modo continuo in modo da evitare gli ostacoli che gli si presentano davanti.

Il programma utilizza il blocco [Leggi distanza con sonar](../blocks/#leggi-distanza-con-sonar) per determinare presenza e la distanza di ostacoli davanti a sé, ed evitarli girando sulla destra.

Il programma può essere modificato variandone i parametri, come la distanza entro la quale è riconosciuto l'ostacolo (15 cm) e la durata dei movimenti (espressa in secondi).

### test_music

Programma di test del blocco [Suona nota](../blocks/#suona-nota).

### test_input

Programma di test del blocco [Trova oggettie](../blocks/#trova-oggetti).

### cat_follower

Programma completo per far muovere CoderBot su una superficie in modo continuo alla ricerca di un gatto (va bene sia un gatto vero che una sua immagine).

Il programma utilizza il blocco [Trova oggetti](../blocks/#trova-oggetti) per determinare la presenza e la distanza di un gatto e cercare di inseguirlo.

Il programma può essere modificato variandone i parametri, cambiando la classe dell'animale riconosciuto (cane) o anche oggetti riconosciuti dal blocco "Trova oggetti".

### colour_seeker

Programma completo per far muovere CoderBot su una superficie in modo continuo alla ricerca di un oggetto di un certo colore.

Il programma utilizza il blocco [Trova distanza da colore](../blocks/#trova-distanza-da-colore) per determinare la presenza e la distanza di un oggetto del colore specificato e cercare di raggiungerlo.

Il programma può essere modificato variandone i parametri, cambiando il colore riconosciuto e il movimento per raggiungere il bersaglio.

Un aspetto critico per il corretto funzionamento del programma è la definizione del colore dell'oggetto che si desidera identificare. 

Per ottenere un buon risultato si consiglia di scattare una foto all'oggetto, direttamente con CoderBot, e di rilevare il colore dell'oggetto direttamente dall'immagine, tramite la funzione disponibile nella Galleria delle immagini.

### test_io_ext

Programma di test dei blocchi [Scrivi Digital Output](../blocks/#scrivi-digital-output) e [Leggi input](../blocks/#leggi-input).

### sound_rec_test

Programma di test del blocco [Registra audio](../blocks/#registra-audio).

### find_color

Programma di test del blocco [Trova distanza da colore](../blocks/#trova-distanza-da-colore).

### path_ahead

Programma completo per far muovere CoderBot su una superficie in modo continuo evitando ostacoli.

Il programma utilizza il blocco [Spazio libero](../blocks/#spazio-libero) per determinare se lo spazio davanti al robot è praticabile, e ne caso muoversi al suo interno.

Rispetto ad altri programmi di evitamento ostacoli basati sui sensori sonar a ultrasuoni, questo è basato sulla visione artificiale ed è sensibile anche a cambio di colore dello sfondo, piuttosto che alla presenza di ostacoli solidi. 

### face_find

Programma completo per far muovere CoderBot, ruotando sul posto, in modo continuo alla ricerca di un volto.

Il programma utilizza il blocco [Trova faccia](../blocks/#trova-faccia) per determinare la presenza e posizione di un volto davanti a sé, e cercare di portare al centro del suo campo visico il volto tramite rotazioni sul posto.

Se il blocco rileva più di un volto contemporaneamente presente nel campo visivo, viene preso in considerazione il volto più vicino al robot (quello con le dimensioni maggiori).

### hear_test

Programma di test del blocco [Trova oggetti](../blocks/#trova-oggetti).

### line_follower

Programma completo per far muovere CoderBot su una superficia, seguendo un percorso definito da una linea tracciata sulla superficie stessa.

Il programma utilizza il blocco [Trova linea](../blocks/#trova-linea) per determinare la presenza e posizione di una linea e seguirne il percorso.

Il blocco Trova linea utilizza la visione artificiale per determinare la presenza di una linea nella parte inferiore del campo visivo del robot, che è a sua volta diviso in tre settori orizzontali, corrispondenti a tre aree rettangolari ordinate dal basso verso l'alto.

Il programma in oggetto utilizza solo il primo settore, ovvero il più basso corrispondente all'area più vicina al robot, ma è possibile estendere il programma utilizzando anche le altre letture, in modo da migliorare la reattività del robot in caso di curve strette.

### clap_control

Programma dimostrativo del blocco [Ascolta suono](../blocks/#ascolta-suono).

Il programma fa in modo che il robot si muova in rettilinea e giri a destra se "sente" un suono forte e breve (come ad esempio un battito di mani).

### demo_scientist

Programma completo per il "gioco dello scienziato", che ha lo scopo di far muovere CoderBot in base a un algoritmo non banalmente deducibile (idealmente: come fosse un animale che esplora l'ambiente che lo circonda) in modo da poter stimolare l'osservazione del comportamento del robot, e la formulazione di ipotesi circa la natura del robot e del programma stesso.

Il programma fa uso essenzialmente del blocco [Leggi distanza con sonar](../blocks/#leggi-distanza-con-sonar) e i blocchi standard per generare nuomeri casuali in modo da eseguire movimenti in parte ripetititivi e in parte casuali.

### roboetologia

Programma completo per il "gioco dello scienziato" (versione rivista e più articolata rispetto a "demo_scientist"), che ha lo scopo di far muovere CoderBot in base a un algoritmo non banalmente deducibile (idealmente: come fosse un animale che esplora l'ambiente che lo circonda) in modo da poter stimolare l'osservazione del comportamento del robot, e la formulazione di ipotesi circa la natura del robot e del programma stesso.

Il programma fa uso essenzialmente del blocco [Leggi distanza con sonar](../blocks/#leggi-distanza-con-sonar) e i blocchi standard per generare nuomeri casuali in modo da eseguire movimenti in parte ripetititivi e in parte casuali.

