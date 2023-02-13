# Montaggio del kit

Seguendo questi passi, assemblerai CoderBot partendo dal suo kit.

## Elenco delle componenti del kit

![](../images/kit/kit_01.jpg)

1. Raspberry Pi Model B 3 + Scheda controllo motori e sensori + Microfono USB
2. Altoparlante autoalimentato
3. Batteria al litio ricaricabile
4. Sensori a ultrasuoni + cavi di collegamento
5. Telecamera + cavo piatto
6. Cavo USB - MicroUSB - angolo 90° (per alimentazione Raspberry)
7. Cavo USB - MicroUSB - piatto (per alimentazione motori)
8. Cavo USB - MicroUSB - piatto (per ricarica batteria)
9. Telaio legno/metallo
10. Motori + cavi di collegamento
11. Ruote
12. Sfera
13. 6 Viti M3 10mm
14. 3 Viti M3 30mm
15. 6 Dadi M3 30mm
16. 2 Distanziali 20mm
17. 4 Viti M2.5 12mm + 4 Distanziali cavi 4mm + 4 Dadi M2.5
18. Viti M2 6mm +Dadi M2

## 1 - Motori

1.1 Infilare i supporti in metallo a forma di “T” nel telaio.
![](/images/kit/kit_02.jpg)

<br>

1.2 Posizionare i motori in modo che il perno bianco sia rivolto all'esterno della base e che il filo di alimentazione rosso sia vicino alla base, il rosso più in alto.

![](/images/kit/kit_03.jpg)
<br><br>

1.3 Posizionare le viti M3 da 30mm nei fori.
![](/images/kit/kit_05.jpg)
<br><br>

1.4 Posizionare i bulloni M3 autobloccanti dalla parte opposta. 
![](/images/kit/kit_06.jpg)
<br><br>

1.5 Serrare viti e bulloni, è opportuno utilizzare delle pinze o una chiave per tenere fermo il dado. 
![](/images/kit/kit_07.jpg)

1.6 Far passare i cavi di alimentazione nelle feritoie vicino ai contatti.

Ripetere per l’altro motore


## 2 - Sfera


2.1 Fissare i distanziali da 20mm alla sfera utilizzando due viti M3 da 10mm.
![](/images/kit/kit_08.jpg)
<br><br>


2.2 fissare sfera + distanziali alla parte inferiore del telaio, stringere bene le viti e i dadi 
![](/images/kit/kit_09.jpg)

::: warning ATTENZIONE
La sfera deve essere fissata nella parte inferiore del telaio, ovvero dalla stessa parte dove si trovano i motori.
:::

![](/images/kit/kit_10.jpg)



## 3 - Raspberry Pi


3.1 Posizionare i distanziali in plastica bianca sopra la base, sempre in corrispondenza dei fori.
![](/images/kit/kit_11.jpg)
<br><br>


3.3 Posizionare il Raspberry Pi sopra i distanziali
![](/images/kit/kit_12.jpg)

::: warning ATTENZIONE
Il Raspberry deve essere posizionato in modo che le porte USB siano rivolte verso la parte più corta del supporto in legno (il lato opposto alla finestrella).
Nella foto a destra: particolare di una vite con distanziale fissato correttamente
:::

<br><br>
3.4 Infilare le viti di fissaggio nei fori sul Raspberry Pi 
![](/images/kit/kit_13.jpg)
<br><br>

3.5 Avvitare e serrare i dadi alle viti sporgenti sotto la base in legno.
![](/images/kit/kit_14.jpg)
<br><br>

## 4 - Paratie anteriore e laterali


4.1 Appoggiare le paratie laterali in modo da far entrare gli incastri nel telaio, senza farle scorrere. La paratia con la finestra laterale deve essere montata sulla parte destra del robot, tenendo conto che i motori sono nella parte anteriore e la sfera nella parte posteriore.

![](/images/kit/kit_15.jpg)

![](/images/kit/kit_16.jpg)
<br><br>

4.2 Posizionare i sensori sonar nei fori presenti nelle paratie. Il sensore da posiziore nella paratia anteriore è quello con il connettore perpendicolare alla scheda.
::: warning ATTENZIONE
E' possibile che sia necessario esercitare una cera forza per far entrare i sensori nelle paratie, sia quella in legno che quelle in metallo.
:::

![](/images/kit/kit_18.jpg)

![](/images/kit/kit_17.jpg)

![](/images/kit/kit_19.jpg)

![](/images/kit/kit_20.jpg)

<br><br>

4.3 Appoggiare la paratia anteriore in modo da farla incastrare nelle feritoie sulle paratie laterali.
<br><br>


4.4 Appoggiare il supporto con il Raspberry Pi già montato all'interno del telaio, tra le tre paratie, facendo attenzione che i supporti si incastrino nelle feritoie presenti sulle paratie laterali.
![](/images/kit/kit_22.jpg)
<br><br>


4.5 Far scorre le paratie verso la parte posteriore del telaio in modo da incastrarsi in esso.
![](/images/kit/kit_23.jpg)
<br><br>

4.6 Posizionare la vite M3 10mm nel foro posto nella parte anteriore del telaio e fissarla con un dado autobloccante M3.
![](/images/kit/kit_24.jpg)

## 5 - Batteria e collegamenti

<br>

5.1 Collegare i cavi di alimentazione dei motori: quello del motore destro sullo spinotto più a destra.
![](/images/kit/kit_26.jpg)
<br><br>

5.2 Collegare i cavi dei sensori a ultrasuoni: il cavo del sensore centrale, che passa sotto il raspberry e atteaverso la feritoria nella parte posteriore del supporto, deve essere inserito nel connettore più vicina alla parte anteriore. Il cavo del sensore sinistro deve essere posizionato nel connettore al centro e infine il cavo del sensore destro nel connettore più vicina alla parte posteriore.

![](/images/kit/kit_25.jpg)

::: danger ATTENZIONE
Scambiare il verso del connettore comporta invertire la polarità dell'alimentazione del sensore che, oltre a non funzionare, potrebbe danneggiarsi.
Assicurarsi dell'orientamento dei connettori: devono essere inseriti in modo che i fili di colore bianco siano dal lato della scritta CoderBot stampata sulla scheda, come mostrato in figura.
<br><br>
![](/images/kit/connectors_side.jpg)
:::

<br><br>
5.3 Posizionare la batteria all'interno del telaio, sotto il Raspberry; la batteria deve essere posizionata in modo che il display dello stato di carica sia rivolto verso il basso e i connettori USB verso la parte posteriore.

![](/images/kit/kit_32.jpg)
<br><br><br>


5.4 Collegare i cavi USB - Micro USB in dalla batteria al Raspberry e alla scheda motori. Il cavo più lungo, con i connettori orientati a 90°, deve essere fatto passare dall'interno del telaio all'esterno della finestra laterla per poi rientrare subito ed essere inserito nella presa di alimentazione del Raspberry. 

![](/images/kit/kit_34.jpg)

<br><br>

5.5 Collegare il cavo più corto, che deve essere usato per collegare la batteria alla scheda motori, restando all'interno del telaio.
![](/images/kit/kit_35.jpg)


## 6 - Telecamera

![](/images/kit/kit_27.jpg)


6.1 Posizionare la telecamera sul supporto in modo che la finestrella, asimmetrica, lasci scoperto il led sulla parte destra della scheda della telecamera.
![](/images/kit/kit_27b.jpg)

<br><br>

6.2 Fissare la telecamera con le viti M2 6mm e relativi bulloni. Posizionare le viti in modo che la testa stia dalla parte del legno e i bulloni dalla parte della scheda.
::: danger ATTENZIONE
La parte posteriore della telecamera è costituita da un circuito stampato con diversi componenti delicati.
Nello stringere i dadi, si raccomanda di fare attenzione a non utilizzare pinze o utensili che possano danneggiare il circuito. A tal proposito si consiglia di usare solo le dita per tener fermi i dadi o, al più, una pinzetta molto piccola. 
:::

![](/images/kit/kit_28.jpg)

<br><br>
6.3 Far passare il cavo piatto dalla telecamera fino al farlo scorrere nel connettore posto sul Raspberry. Verificare che la linguetta di fissaggio posta sul connettore sia estratta. Una volta che il cavo piatto è ben inserito nel connettore, spingere la linguetta verso il basso, in modo da fissare il cavo.

![](/images/kit/kit_29.jpg)

<br><br>

6.4 Posizionare il supporto della telecamera sul telaio principale in corrispondenza delle scanalature.

![](/images/kit/kit_30.jpg)

<br><br>
6.5 Infilare, avendo cura di fare in modo che le parti si incastrino correttamente l'una nell'altra il supporto telecamera nelle scanalature sulle paratie, fino a che non il supporto non sia ben incastrato.


![](/images/kit/kit_31.jpg)

<br><br>

## 7 - Coperchio, ruote e altoparlante

![](/images/kit/kit_37.jpg)

7.1 Far passare il cavetto con il jack audio da 3.5” dall'interno del telaio all'esterno, attraverso la finestra laterale della paratia.

![](/images/kit/kit_38.jpg)
<br><br>

7.2 Inserire il jack audio nella presa sul lato del Raspberry.

![](/images/kit/kit_39.jpg)
<br><br>

7.3 Far passare l'altra estremità del cavo (connettore Mini USB) dalla parte anteriore del telaio.

![](/images/kit/kit_40.jpg)
<br><br>


7.4 Appoggiare il coperchio sulle paratie laterali, facendo in modo che le feritoie e gli incastri siano tutti correttamente impegnati nelle paratie.

![](/images/kit/kit_41.jpg)

![](/images/kit/kit_42.jpg)
<br><br>

7.5 Inserire la vite M3 10mm nel foro posto nella linguetta presente nella parte inferiore del coperchio e avvirarla al dado autobloccante.
![](/images/kit/kit_44.jpg)
<br><br>

7.6 Montare le ruote facendole scorrere nei semiassi, facendo attenzione a non forzare il telaio. Si consiglia di fare una leggera forza agendo direttamente su motori e ruote.
![](/images/kit/kit_43.jpg)
<br><br>

7.7 Collegare il connettore Micro USB all'altoparlante.

![](/images/kit/kit_45.jpg)

## 8 - Accensione


8.1 Collegare la spina Micro USB nella presa presente sul Raspberry, accessibile dalla finestra sulla paratia laterale.
![](/images/kit/kit_47.jpg)








