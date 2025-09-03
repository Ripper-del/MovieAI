import Link from 'next/link';

export default function Home() {
  return (
    <main style={{padding: 24, fontFamily: 'ui-sans-serif, system-ui'}}>
      <h1>🎬 MovieAI</h1>
      <p>Мінімальний каркас фронтенду. Перейдіть до <Link href="/chat">/chat</Link> для тесту чату.</p>
    </main>
  );
}
