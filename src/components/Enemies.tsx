import { Skull, ShieldAlert, Flame } from 'lucide-react';

export default function Enemies() {
  return (
    <section id="enemies" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Enemigos y Obstáculos</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enfrenta mutaciones aterradoras nacidas de la negligencia médica
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-gradient-to-r from-red-900/30 via-black to-red-900/30 border border-red-600/50 rounded-xl p-8 hover:border-red-600 transition-all transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-red-950/50 rounded-full p-6 border-2 border-red-600">
                <Skull className="w-16 h-16 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white mb-4">Grimers</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Los enemigos principales del juego. Seres deformes conscientes creados por el virus,
                  que atacan con fuerza física brutal y lanzan bilis infecciosa.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-red-900/30">
                    <h4 className="text-red-400 font-semibold mb-2">Ataque Físico</h4>
                    <p className="text-gray-400 text-sm">
                      Golpes devastadores que pueden reducir tu salud rápidamente
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-red-900/30">
                    <h4 className="text-red-400 font-semibold mb-2">Bilis Corrosiva</h4>
                    <p className="text-gray-400 text-sm">
                      Proyectiles que dañan y corrompen superficies, infectando el entorno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 via-black to-orange-900/30 border border-orange-600/50 rounded-xl p-8 hover:border-orange-600 transition-all transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-orange-950/50 rounded-full p-6 border-2 border-orange-600">
                <ShieldAlert className="w-16 h-16 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white mb-4">Sub-Jefes</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Variantes más grandes y resistentes que representan mutaciones avanzadas del virus.
                  Requieren estrategia y recursos considerables para derrotar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-orange-900/30">
                    <h4 className="text-orange-400 font-semibold mb-2">Alta Resistencia</h4>
                    <p className="text-gray-400 text-sm">
                      Pueden absorber grandes cantidades de daño antes de caer
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-orange-900/30">
                    <h4 className="text-orange-400 font-semibold mb-2">Ataques Especiales</h4>
                    <p className="text-gray-400 text-sm">
                      Habilidades únicas que ponen a prueba tus reflejos y estrategia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/30 via-black to-yellow-900/30 border border-yellow-600/50 rounded-xl p-8 hover:border-yellow-600 transition-all transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-yellow-950/50 rounded-full p-6 border-2 border-yellow-600">
                <Flame className="w-16 h-16 text-yellow-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white mb-4">Jefe Final</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  La forma más avanzada del virus: un Grimer gigante, amalgama grotesca de carne,
                  bilis y tentáculos. La batalla final definitiva.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-yellow-900/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Múltiples Fases</h4>
                    <p className="text-gray-400 text-sm">
                      Batalla épica con diferentes etapas y patrones de ataque
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-yellow-900/30">
                    <h4 className="text-yellow-400 font-semibold mb-2">Poder Absoluto</h4>
                    <p className="text-gray-400 text-sm">
                      Requiere todas tus habilidades y recursos para vencer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 via-black to-green-900/20 border-l-4 border-green-600 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Entorno Hostil</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              El hospital mismo es tu enemigo. Pasillos cerrados que limitan tu movilidad,
              áreas contaminadas que reducen tu salud constantemente si no las desinfectas a tiempo,
              y luces parpadeantes que ocultan amenazas en la oscuridad.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-900/30 border border-red-600/50 rounded-full text-red-400 text-sm">
                Bilis Corrosiva
              </span>
              <span className="px-4 py-2 bg-red-900/30 border border-red-600/50 rounded-full text-red-400 text-sm">
                Zonas Infectadas
              </span>
              <span className="px-4 py-2 bg-red-900/30 border border-red-600/50 rounded-full text-red-400 text-sm">
                Escasez de Recursos
              </span>
              <span className="px-4 py-2 bg-red-900/30 border border-red-600/50 rounded-full text-red-400 text-sm">
                Exposición Prolongada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
