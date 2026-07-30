# Data fetching

Lade die Daten von http://localhost:3001/movies und verwende sie statt der statischen movies-liste
und übergib sie von der page.tsx an die Liste.

```ts
const response = await fetch('http://localhost:3001/movies');
const movies = await response.json();
```

1. Wenn Daten vorhanden sind, zeige sie an
2. Wenn keine Daten vorhanden sind, zeige eine entsprechende Meldung an
3. Wenn ein Fehler auftritt, zeige eine Meldung an
