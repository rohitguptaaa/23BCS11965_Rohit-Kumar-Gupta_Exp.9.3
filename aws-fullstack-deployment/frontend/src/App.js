import React, { useEffect, useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('Loading...');
  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(j => setMsg(j.message))
      .catch(() => setMsg('Cannot reach backend'));
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>AWS Full Stack Application</h1>
      <p>{msg}</p>
      <p style={{ color: '#666' }}>Load-balanced backend via AWS ALB</p>
    </div>
  );
}
