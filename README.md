# Nuova Clinica Veterinaria Val d'Elsa

Sito web della clinica veterinaria NCV Val d'Elsa a Poggibonsi (SI).

## Tecnologie utilizzate

- React 18
- Vite
- Tailwind CSS 4
- Swiper (per lo slideshow del team)
- Lucide React (per le icone)

## Installazione

\`\`\`bash
npm install
\`\`\`

## Sviluppo

\`\`\`bash
npm run dev
\`\`\`

Il sito sarà disponibile su `http://localhost:5173`

## Build per produzione

\`\`\`bash
npm run build
\`\`\`

I file ottimizzati saranno generati nella cartella `dist/`

## Preview della build

\`\`\`bash
npm run preview
\`\`\`

## Struttura del progetto

\`\`\`
├── public/              # File statici (logo, immagini)
├── src/
│   ├── components/      # Componenti React
│   │   ├── ui/         # Componenti UI riutilizzabili
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoCards.jsx
│   │   ├── Mission.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Contacts.jsx
│   │   └── Footer.jsx
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Componente principale
│   ├── main.jsx        # Entry point
│   └── index.css       # Stili globali
├── index.html          # HTML template
├── vite.config.js      # Configurazione Vite
└── package.json        # Dipendenze
