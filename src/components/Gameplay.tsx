import { Crosshair, Droplet, Map, Package, TrendingUp, Droplets } from 'lucide-react';

export default function Gameplay() {
  return (
    <section id="gameplay" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Jugabilidad</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experiencia de acción en primera persona con elementos de survival horror
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-600/30 rounded-xl p-8 hover:border-red-600/60 transition-all">
            <Crosshair className="w-14 h-14 text-red-500 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Combate</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Enfrenta a los infectados con armas únicas diseñadas a partir de medicinas y químicos desinfectantes.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Lanzadores de suero medicinal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Granadas de desinfectante químico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Armas biológicas avanzadas</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-600/30 rounded-xl p-8 hover:border-green-600/60 transition-all">
            <Droplet className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Supervivencia</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              La escasez de recursos te obliga a tomar decisiones estratégicas constantemente.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Gestiona municiones limitadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Conserva kits de limpieza vitales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Controla tu nivel de energía</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-600/30 rounded-xl p-8 hover:border-blue-600/60 transition-all">
            <Map className="w-14 h-14 text-blue-500 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Exploración</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Navega por ambientes oscuros y claustrofóbicos llenos de peligros y secretos.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Pasillos del hospital en penumbra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Sótanos infectados y peligrosos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Laboratorios abandonados con secretos</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-600/30 rounded-xl p-8 hover:border-purple-600/60 transition-all">
            <Droplets className="w-14 h-14 text-purple-500 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Purificación</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Mecánica única: desinfecta zonas contaminadas para avanzar en tu misión.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Limpia áreas infectadas estratégicamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Desbloquea nuevas zonas del hospital</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">●</span>
                <span>Expande tu acceso a recursos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-600/30 rounded-xl p-8 text-center hover:border-yellow-600/60 transition-all">
            <Package className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Power-Ups</h3>
            <p className="text-gray-400 leading-relaxed">
              Ítems de desinfección, sueros curativos, químicos de laboratorio y mejoras para armas
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-black border border-orange-600/30 rounded-xl p-8 text-center hover:border-orange-600/60 transition-all">
            <TrendingUp className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Progresión</h3>
            <p className="text-gray-400 leading-relaxed">
              Cada zona purificada amplía tu inventario y fortalece a Jhony para enfrentar mayores desafíos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
