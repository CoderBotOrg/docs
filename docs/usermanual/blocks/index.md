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

### Registra video

### Stop video

## Visione

### Valore medio immagine

### Spazio libero

### Trova linea

### Trova faccia

### Trova distanza da colore

### Trova testo

### Leggi Bar / QRCode

### Leggi AR Code

### Trova classe

### Trova oggetti

## Sensori

### Leggi distanza con sonar

### Giroscopio

### Accelerometro

### Bussola

### Temperatura

## Suono

### Pronuncia

### Registra audio

### Riproduci file audio

### Ascolta suono

### Riconosci parlato

## Estensioni I/O

### Leggi input

### Scrivi Digital Output

### Controlla led

## Musica

### Suona nota

### Strumento (strumento)

### Strumento (animale)

### Pausa