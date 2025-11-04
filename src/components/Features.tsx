import { Target, Flame, Eye, Heart, Shield, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Combate Intenso',
      description: 'Enfréntate a oleadas de Grimers usando armas biológicas diseñadas con medicinas y químicos desinfectantes.',
      color: 'text-red-500'
    },
    {
      icon: Heart,
      title: 'Supervivencia',
      description: 'Gestiona cuidadosamente tus recursos: municiones, kits de limpieza y energía son escasos y vitales.',
      color: 'text-green-500'
    },
    {
      icon: Eye,
      title: 'Exploración',
      description: 'Recorre pasillos oscuros, laboratorios abandonados y sótanos infectados. Cada esquina guarda secretos.',
      color: 'text-blue-500'
    },
    {
      icon: Flame,
      title: 'Purificación',
      description: 'Desinfecta zonas contaminadas para avanzar, desbloquear nuevas áreas y ampliar tu inventario.',
      color: 'text-orange-500'
    },
    {
      icon: Shield,
      title: 'Progresión',
      description: 'Cada zona limpiada te hace más fuerte. Mejora tus armas y habilidades para enfrentar amenazas mayores.',
      color: 'text-purple-500'
    },
    {
      icon: Zap,
      title: 'Jefes Épicos',
      description: 'Enfréntate a sub-jefes mutados y al jefe final: la forma más avanzada del virus.',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Características del Juego</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bio Warfare combina acción intensa, horror de supervivencia y mecánicas únicas de purificación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl p-8 hover:border-green-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <feature.icon className={`w-16 h-16 ${feature.color} mb-4`} />
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-900/20 via-black to-green-900/20 border-l-4 border-green-600 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">Más Allá del Juego</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Bio Warfare no solo entretiene: transmite un mensaje de <span className="text-green-500 font-semibold">conciencia sanitaria</span> y
            la importancia de la prevención y la higiene. Al completar el juego, experimentarás la satisfacción
            de haber limpiado y liberado una amenaza, pero también reflexionarás sobre el cuidado de nuestra salud colectiva.
          </p>
        </div>
      </div>
    </section>
  );
}
