import { useState } from 'react';

export default function Chat() {
  const [q, setQ] = useState('Порадь фантастику 2010-х про космос');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    setLoading(true);
    setAnswer(null);
    try {
      const resp = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, language: 'uk-UA' })
      });
      const data = await resp.json();
      setAnswer(data.answer || JSON.stringify(data));
    } catch (e: any) {
      setAnswer(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{padding: 24, display: 'grid', gap: 12, maxWidth: 720, margin: '0 auto', fontFamily: 'ui-sans-serif, system-ui'}}>
      <h1>🤖 Чат‑помічник MovieAI</h1>
      <textarea value={q} onChange={e=>setQ(e.target.value)} rows={4} style={{width:'100%', padding:12}} />
      <button onClick={send} disabled={loading} style={{padding: '8px 16px'}}>
        {loading ? 'Думаю...' : 'Надіслати'}
      </button>
      {answer && (
        <pre style={{whiteSpace:'pre-wrap', background:'#111', color:'#eee', padding:12, borderRadius:8}}>{answer}</pre>
      )}
    </main>
  );
}
