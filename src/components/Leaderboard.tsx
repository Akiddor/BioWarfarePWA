import { useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

type Score = {
  id: string;
  name: string;
  enemies: number;
  time?: number;
  extra?: Record<string, any> | undefined;
};

export default function Leaderboard() {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const collectionName = (import.meta.env.VITE_FIRESTORE_COLLECTION as string) ?? 'leaderboard';
  // Only enemies/time needed for the simplified leaderboard
  const sortField = (import.meta.env.VITE_FIRESTORE_SORT_FIELD as string) ?? 'enemiesKilled';

  // Label helper removed: we only display enemies and time in the simplified leaderboard.

  useEffect(() => {
    setLoading(true);
    setError(null);

    const scoresRef = collection(db, collectionName);
    const q = query(scoresRef, orderBy(sortField, 'desc'), limit(10));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: Score[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        const playerName = (data.playerName as string) || (data.name as string) || 'Anónimo';
        const enemies = (data.enemiesKilled as number) ?? (data[sortField] as number) ?? 0;
        const timeVal = data.timePlayed ? Number(data.timePlayed) : undefined;

        return {
          id: doc.id,
          name: playerName,
          enemies,
          time: timeVal,
          extra: data,
        };
      });

      setScores(list);
      setLoading(false);
    }, (err) => {
      console.error('Realtime leaderboard error', err);
      setError('No se pudieron cargar las puntuaciones en tiempo real.');
      setLoading(false);
    });

    // Fallback: if onSnapshot isn't supported, do a one-time fetch.
    // (Most browsers/platforms support onSnapshot.)
    getDocs(q)
      .then((snapshot) => {
        if (!snapshot.empty) {
          const list: Score[] = snapshot.docs.map((doc) => {
            const data = doc.data();
            const playerName = (data.playerName as string) || (data.name as string) || 'Anónimo';
            const enemies = (data.enemiesKilled as number) ?? (data[sortField] as number) ?? 0;
            const timeVal = data.timePlayed ? Number(data.timePlayed) : undefined;
            return {
              id: doc.id,
              name: playerName,
              enemies,
              time: timeVal,
              extra: data,
            };
          });
          setScores(list);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load leaderboard (fallback)', err);
      });

    return () => unsubscribe();
  }, []);

  // The leaderboard does not allow adding scores from the web UI — scores should be written by the game.

  return (
    <section id="leaderboard" className="container mx-auto px-4 py-12">
      <div className="bg-neutral-900 rounded-lg border border-green-900/30 p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Tabla de puntuaciones</h2>
          <span className="text-sm text-green-200 bg-green-900/20 px-3 py-1 rounded-full">Top 10</span>
        </div>
        {scores[0] && (
          <div className="mb-6 px-4 py-3 bg-black/20 border border-green-900/20 rounded-lg flex items-center gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <div className="text-lg text-amber-300 font-bold">{scores[0].name}</div>
              <div className="text-sm text-gray-300">{scores[0].enemies} enemigos · {scores[0].time !== undefined ? scores[0].time.toFixed(2) + 's' : '-'}</div>
            </div>
          </div>
        )}

        {loading ? (
          <p className="text-gray-300">Cargando …</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : scores.length === 0 ? (
          <p className="text-gray-300">No hay puntuaciones todavía.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-green-900/30">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Jugador</th>
                  <th className="py-2 px-3">Enemigos</th>
                  <th className="py-2 px-3">Tiempo (s)</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((s, i) => (
                  <tr key={s.id} className={`odd:bg-black/20 even:bg-black/10 ${i === 0 ? 'bg-amber-800/20' : ''}`}>
                    <td className="py-2 px-3 text-gray-300">{i + 1}</td>
                    <td className={`py-2 px-3 ${i === 0 ? 'text-amber-300 font-bold' : 'text-white'}`}>{s.name}</td>
                    <td className={`py-2 px-3 ${i === 0 ? 'text-amber-300 font-bold' : 'text-green-500 font-bold'}`}>{s.enemies}</td>
                    <td className="py-2 px-3 text-gray-300">{s.time !== undefined ? s.time.toFixed(2) : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
