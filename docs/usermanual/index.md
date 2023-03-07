# Manuale d'Uso

Questa parte copre l'utilizzo vero e proprio dell'applicazione. [Accendi CoderBot](/manual/#messa-in-funzione), connettiti alla rete WiFi e accedi a [http://coderbot.local](http://coderbot.local) (oppure a [http://10.0.0.1/](http://10.0.0.1/)). Dovresti essere di fronte alla schermata principale di CoderBot:

![](/images/usermanual/landing.png)


## Programmazione

Un *Programma* è un insieme di blocchi che definiscono quali azioni che CoderBot dovrà eseguire e in che modo.

Il modo più semplice di scrivere un programma, è cliccare sul bottone Programma nella schermata principale, oppure nel menù laterale. 


Questo ti farà accedere alla visuale Programmazione, composta da questa vista:

![](/images/usermanual/program_view.png)


A sinistra, trovi il *Pannello degli strumenti* di Blockly. In base all'impostazione **Livello Pannello degli strumenti Blockly**, accessibile nelle [impostazioni globali](/manual/#impostazioni) di CoderBot, ti verranno visualizzati pià o meno gruppi di comandi, contenenti più o meno blocchi. Questa impostazione modifica anche come vengono visualizzati i singoli blocchi.

Ad esempio, questo è il Pannelo degli strumenti **movimento**:

![](/images/usermanual/toolbox_mov.png)

Mentre questa è quella **base**:

![](/images/usermanual/toolbox_base.png)


La parte destra, inizialmente vuota, è dove trascinerai i blocchi per comporre il tuo programma.

Consulta l'elenco dei [blocchi di programmazione speciali di CoderBot](blocks/)
### Salvare e caricare programmi

Utilizzando il pulsante **Salva** puoi salvare il lavoro fatto fin'ora su CoderBot. Utilizzando **Salva con Nome** creerai un'altra copia del programma, salvandolo con un altro nome.

![](/images/usermanual/save1.png)

Dopo il primo salvataggio, dove ti verrà chiesto come chiamare il programma, il pulsante **Salva** aggiorna quel salvataggio alle ultime modifiche che hai fatto.

![](/images/usermanual/load1.png)

Quando vuoi riprendere il tuo lavoro, apri la vista Programmazione e premi **Carica**. Un elenco ti mostrerà tutti i programmi salvati sul tuo CoderBot, permettendoti di caricarne uno.

### Esportare ed importare programmi

La funziona Salva ti permette di salvare localmente sul tuo CoderBot. Se invece vuoi copiare un programma su un altro CoderBot puoi usare la funzione **Esporta**.

TODO ADDPIC

Verrà creato un file che potrai salvare sul tuo PC. Verrà aperta una finestra di dialogo dal tuo browser, che ti chiederà dove effettuare il download.

Il file appena esportato, può essere importato su qualsiasi CoderBot usando la funzione **Importa**. Cliccandoci, ti verrà chiesto di selezionare un file dal tuo PC, ed esso verrà aperto nella visuale Programmazione di Blockly. Se vuoi mantenerlo e continuare a lavorarci, puoi salvarlo sul CoderBot con la funzione **Salva**.

TODO ADDPIC


## Attività

Le attività di permettono di personalizzare molti aspetti della visuale Programmazione. Ogni attività è un'ambiente contenuto e limitato. Ogni modifica e personalizzazione rimarrà sempre e solo in quell'attività.

Per iniziare, **crea** un'attività dal menù Attività. Questo è l'editor Attività:

TODO ADDPIC

Qui, puoi modificare e personalizzare molti aspetti di quello che verrà presentato **avviando** l'Attività.

::: warning Attenzione
La visuale Programmazione generale rimarrà inalterata e ti verrà sempre presentata allo stesso modo, indipendentemente dalle Attività. Per visualizzare l'ambiente creato in una attività, devi **avviarla**, dal menù **Attività** > **Carica**.
:::

La prima scheda, ti permette di personalizzare la barra degli strumenti. Una piccola anteprima, in alto, ti anticipa come verrà visualizzata.

Quando sei soddisfatto, salva l'Attività e avviala, per vedere se è tutto come ti aspettavi.


::: tip Suggerimento
Analogamente ai programmi, le attività possono essere salvate e caricate sul tuo CoderBot con i pulsanti Salva e Carica, ma anche condivise e copiate su altri CoderBot con le funzioni Esporta e Importa.
:::
