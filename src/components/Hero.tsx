import { Biohazard, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmEzNGEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTAgMTBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptMCAxMGMwLTEuMS45LTIgMi0yczIgLjkgMiAyLS45IDItMiAyLTItLjktMi0yem0tMTAtMTBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTEwIDBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="absolute top-20 left-10 animate-pulse">
        <Biohazard className="w-20 h-20 text-green-500/20" />
      </div>
      <div className="absolute bottom-40 right-20 animate-pulse delay-700">
        <AlertTriangle className="w-16 h-16 text-red-500/20" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-red-600/20 border border-red-600 rounded-full">
            <span className="text-red-500 font-semibold">ZONA DE CUARENTENA</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            BIO <span className="text-green-500">WARFARE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rifle, Texas - 2027. Despierta después de 7 años en coma para descubrir que un virus ha transformado el hospital en una zona de muerte. Tú eres la última esperanza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-600/50">
              Jugar Ahora
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('story');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border-2 border-green-600 hover:bg-green-600/10 text-green-500 font-bold rounded-lg transition-all"
            >
              Descubre Más
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/40 border border-green-900/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-green-500 mb-2">2027</h3>
              <p className="text-gray-400">Año del Brote</p>
            </div>
            <div className="bg-black/40 border border-green-900/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-green-500 mb-2">7 Años</h3>
              <p className="text-gray-400">En Coma</p>
            </div>
            <div className="bg-black/40 border border-green-900/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-green-500 mb-2">1 Misión</h3>
              <p className="text-gray-400">Salvar a la Humanidad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
