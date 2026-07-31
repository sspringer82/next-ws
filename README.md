# Next.js - Workshop

## Links
- create react app (deprecated!) https://github.com/react/create-react-app
- React: https://react.dev/
- Next: https://nextjs.org/
- Vite (setup): https://vite.dev/
- Tooling company: https://voidzero.dev/
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json
- cartoon intro to fiber https://www.youtube.com/watch?v=ZCuYPiUIONs
- https://overreacted.io/a-complete-guide-to-useeffect/
- Komponenten Demo: https://storybook.js.org/

## Generelle Regeln für Komponenten
- Gültiges HTML
- nur ein root element zurückgeben
- Beginnen mit Großbuchstaben
- geben immer eine JSX-Struktur 


## Styling

- inline styling mit dem style-Attribut - nicht schön, aber funktioniert
- styling mit css-Files - saubere Trennung zwischen JSX/TS und Styling, aber global
- Präprozessoren (z.B. Sass) - https://nextjs.org/docs/app/guides/sass
- styling mit module.css-Files - sauberes Namespacing über css-Klassen, aber nur über Klassen
- CSS-in-JS libs wie styled-components oder emotion - sehr mächtig, aber Zusätzliche Deps + Overhead
- Tailwind - sehr mächtig, aber eigene Syntax

Achtung:
- className statt class verwenden
- Helperlib: clsx