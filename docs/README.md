# StudyHub

StudyHub er en hjemmeside designet til studerende, hvor de kan finde noter, guides og studietips inden for forskellige fagområder.

Den nuværende StudyHub er udviklet som en statisk prototype med HTML, CSS og Javascript og er udviklet uden backend og database. Som man kan læse i vores designdokument UML.md, er hjemmesiden designet til at kunne videreudvikles løbende.

## Features

- Noter og guides
- Navigere mellem emner
- Forskellige studieteknikker såsom kildesøgning og brug af AI. 
- Søgefunktion
- Chatfunktion
- Brugervenligt og intuitivt

## Tech Stack

Projektet er bygget med:

- HTML5
- CSS3
- JavaScript

## Projektstruktur

```bash
m6projekt/
│
├── css/          # Stylesheets
├── docs/         # Dokumentation
├── images/       # Billeder og assets
├── js/           # JavaScript-filer
├── pages/        # Undersider
├── index.html    # Forside
└── README.md
```

## Installation

Clone repositoryet:

```bash
git clone https://github.com/mayajoyrosendahl123/m6projekt.git
```

Åbn projektmappen:

```bash
cd m6projekt
```

Åbn derefter `index.html` i browseren.

## Usage

Projektet kan bruges direkte i browseren uden ekstra installation.

Du kan:
- navigere mellem siderne
- se sidernes indhold, dog kan man ikke se reelle noter o.l. da der ikke er en backend endnu
- anvende søgefunktion under noter
- anvende hypotetisk chat funktion

Hjemmesiden giver et reelt indblik i hjemmesidens funktion og hvordan man som bruger interagerer med den,
uden noter og studie guides da der ikke er en backend. Chat funktionen er også kun hypotetisk, da vi ikke
har udviklet hjemmesiden med tutor som user-case. Hvordan det potentielt skal se ud, kan ses i UML.md.

## Screenshots

### Forside
![Forside](../images/Forside.png)

### Studie Guides
![Studieguides](../images/Studieguide.png)

### Noter
![Noter](../images/Noter.png)

### Chat
![Chat](../images/Chat.png)

## Fremtidige forbedringer

- Login-system for admin med mulighed for at tilføje noter og studieteknikker samt rette siderne til
- Login-system for tutor hvor de kan tilgå chat funktionen
- Gemme noter og favoritter
- Backend/database integration

## License

Dette projekt er lavet til uddannelsesformål.
