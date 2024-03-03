const Vite = () => {
  return (
    <>
      <h1>Vite - Info and Setup</h1>
      <p>Much faster than CRA.</p>
      <p>
        Provides tons of great features, thereby we get a better experience.
      </p>

      <h3>Vite Docs</h3>
      <pre>https://vitejs.dev</pre>

      <h3>Vite Install</h3>
      <ol>
        <li>npm create vite@latest app-name -- --template react</li>
        <li>npm install</li>
        <li>npm run dev</li>
      </ol>

      <h3>Vite Setup</h3>
      <ul>
        <li>need to use '.jsx' extension</li>
        <li>index.html in the source instead of public</li>
        <li>assets still in public</li>
        <li>instead of index.js, need to be 'main.jsx'</li>
        <li>to spin up dev server - 'npm run dev'</li>
      </ul>
    </>
  );
};
export default Vite;
