import type { ReactNode } from "react";

function greet(name: string | ReactNode): string | ReactNode {
  return name;
}

const App: React.FC = () => {

  console.log('App.tsx rendered');

  const name = <span style={{ color: 'red' }}>Basti</span>;

  const temperatur = 37;

  const weather = 'Sonnig mit blauem Himmel';

  let content = <p>Heute isses angenehm</p>;
  if (temperatur > 25) {
    content = <p>Heute wirds heiß</p>;
  }

  const fruit = [{ id: 1, value: 'Apfel' }, { id: 2, value: 'Banane' }, { id: 3, value: 'Banane' }, { id: 4, value: 'Kirsche' }];

  return (<div>
    <h1>{greet(name)}</h1>
    <article>React ist ein super Framework</article>
    {/* inline ternery operator für kompakte Bedingungen */}
    {
      (temperatur > 25) ? <p>Heute wirds heiß</p> : <p>Heute isses angenehm</p>
    }
    {/* saubere Auslagerung */}
    {content}
    {/* Bedingung mit einem Wert */}
    {weather && <p>Heute wirds {weather}</p>}

    <ul>
      {
        fruit.map((f) => {
          return <li key={f.id}>{f.value}</li>
        })
      }
    </ul>

  </div>
  );
}

export default App;