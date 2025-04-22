import { useState } from "react";

const transports = ["Métro", "RER", "Tram", "Bus"];

export default function App() {
  const [type, setType] = useState("");
  const [line, setLine] = useState("");
  const [station, setStation] = useState("");
  const [hour, setHour] = useState("");
  const [signals, setSignals] = useState([]);

  const handleSubmit = () => {
    if (type && line && station && hour) {
      const newSignal = { type, line, station, hour, time: new Date().toLocaleString() };
      setSignals((prev) => [newSignal, ...prev].slice(0, 5));
      setType(""); setLine(""); setStation(""); setHour("");
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">🚨 Urbano - Signalement</h1>
      <div className="grid gap-2">
        <select className="p-2 rounded bg-gray-800" value={type} onChange={e => setType(e.target.value)}>
          <option value="">Type de transport</option>
          {transports.map(t => <option key={t}>{t}</option>)}
        </select>
        <input className="p-2 rounded bg-gray-800" placeholder="Ligne" value={line} onChange={e => setLine(e.target.value)} />
        <input className="p-2 rounded bg-gray-800" placeholder="Station / Arrêt" value={station} onChange={e => setStation(e.target.value)} />
        <input className="p-2 rounded bg-gray-800" placeholder="Heure (ex: 18h35)" value={hour} onChange={e => setHour(e.target.value)} />
        <button className="p-2 bg-red-600 rounded" onClick={handleSubmit}>Signaler un contrôleur</button>
      </div>
      <h2 className="text-xl mt-6 mb-2 font-semibold">🕵️ 5 derniers signalements :</h2>
      <ul className="space-y-1">
        {signals.map((s, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded text-sm">
            {s.time} → {s.type} {s.line} à {s.station} vers {s.hour}
          </li>
        ))}
      </ul>
    </main>
  );
}