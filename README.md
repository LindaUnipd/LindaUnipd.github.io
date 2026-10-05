# Sito web di Linda Badan

Il sito è fatto solo di pagine HTML: non richiede installazioni o programmi.
GitHub Pages lo pubblica così com'è.

## Cosa contiene questa cartella

| File | Contenuto |
|---|---|
| `index.html` | Home: profilo, interessi di ricerca, novità, ultime pubblicazioni, contatti |
| `research.html` | Aree di ricerca, finanziamenti, gruppi di ricerca |
| `publications.html` | Tutte le pubblicazioni, con ricerca e filtri |
| `talks.html` | Relazioni su invito e presentazioni a convegni, con ricerca e filtri |
| `teaching.html` | Corsi, supervisione di tesi e dottorati, commissioni |
| `service.html` | Incarichi, convegni organizzati, attività di revisione, affiliazioni |
| `cv.html` | CV sintetico e pulsante per scaricare il CV completo |
| `files/Linda_Badan_CV.pdf` | Il CV completo che si scarica dal sito |
| `assets/` | Grafica (`style.css`), ricerca e filtri (`site.js`), icona del sito |
| `.nojekyll` | File vuoto per GitHub Pages. È facoltativo, ma è meglio non cancellarlo |

## Pubblicare il sito (va fatto una sola volta)

1. Accedi a [github.com](https://github.com), oppure crea un account gratuito. Il nome utente
   farà parte dell'indirizzo del sito: `https://NOMEUTENTE.github.io`.
2. In alto a destra clicca **+** e poi **New repository**. Come nome scrivi esattamente
   `NOMEUTENTE.github.io`, usando il tuo nome utente. Lascia **Public** e premi **Create repository**.
3. Nella pagina del nuovo repository clicca **uploading an existing file**. Trascina nella
   finestra tutto il **contenuto** di questa cartella: i file `.html`, `README.md` e le cartelle
   `assets` e `files`. Non trascinare la cartella esterna né lo zip. Poi premi **Commit changes**.
4. Vai su **Settings** e poi su **Pages**. In *Build and deployment* scegli:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main`
   - **Cartella**: `/ (root)`

   Poi premi **Save**.
5. Dopo uno o due minuti il sito è online su `https://NOMEUTENTE.github.io`.

Se il repository ha un altro nome, per esempio `sito`, l'indirizzo diventa
`https://NOMEUTENTE.github.io/sito/`.

## Aggiornare il sito

Si può fare tutto dal browser. Apri il file su GitHub, clicca sulla matita (*Edit this file*),
fai la modifica e premi **Commit changes**. Il sito si aggiorna da solo in un paio di minuti.

- **Nuova pubblicazione**: apri `publications.html` e trova la sezione e l'anno giusti. Copia una
  riga esistente `<li class="entry" data-type="…"> … </li>`, incollala sotto e cambia il testo.
  Se l'anno manca, copia un intero blocco `<div class="year-block" data-group> … </div>` e cambia l'anno.
- **Nuovo talk**: stesso procedimento in `talks.html`.
- **Novità in home**: in `index.html`, sezione *Recent and upcoming*. Ogni novità è una riga
  `<li><span class="when">data</span><p>testo</p></li>`.
- **Nuovo CV**: nella cartella `files` usa **Add file** e poi **Upload files**, e carica il nuovo PDF
  con lo stesso nome, `Linda_Badan_CV.pdf`. Il vecchio file viene sostituito.
- **Foto**: carica un'immagine chiamata `photo.jpg` nella cartella `assets`. Prende automaticamente
  il posto delle iniziali. Il formato verticale (4:5) è il più adatto.
- **Google Scholar, Academia.edu, ResearchGate…**: in `index.html` c'è un commento nella sezione
  *Contact* che indica dove aggiungerli.
- **Data di aggiornamento**: la scritta *Last updated* si trova in fondo a ogni pagina.

## Dominio personalizzato (facoltativo)

Se vuoi un indirizzo come `www.lindabadan.it`, prima acquista il dominio da un registrar. Poi
inseriscilo in **Settings → Pages → Custom domain** e segui le istruzioni DNS che ti dà GitHub.
