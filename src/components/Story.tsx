import { Clock, MapPin, Stethoscope, Skull } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">La Historia</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl p-8 hover:border-green-600/50 transition-all transform hover:scale-105">
              <MapPin className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Rifle, Texas - 2027</h3>
              <p className="text-gray-400 leading-relaxed">
                Siete años después de la pandemia de COVID-19, en la pequeña ciudad de Rifle, Texas,
                un nuevo horror está a punto de despertar. Un virus desconocido ha mutado en las
                profundidades del Hospital General, creando criaturas que desafían toda lógica médica.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl p-8 hover:border-green-600/50 transition-all transform hover:scale-105">
              <Clock className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">7 Años en Coma</h3>
              <p className="text-gray-400 leading-relaxed">
                Jhony, reconocido como uno de los mejores médicos del país, despierta tras un
                profundo coma. Los doctores necesitan desesperadamente su experiencia y conocimiento
                para combatir lo que se ha desatado en el hospital.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl p-8 hover:border-green-600/50 transition-all transform hover:scale-105">
              <Skull className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">El Origen del Virus</h3>
              <p className="text-gray-400 leading-relaxed">
                La negligencia médica selló el destino del hospital. Un paciente olvidado en el
                sótano se convirtió en el paciente cero de un virus que da vida a seres deformes
                llamados Grimers: entidades conscientes que buscan infectar todo lo que tocan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl p-8 hover:border-green-600/50 transition-all transform hover:scale-105">
              <Stethoscope className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">La Misión de Jhony</h3>
              <p className="text-gray-400 leading-relaxed">
                Con su vasta experiencia médica, Jhony debe crear armas biológicas y herramientas
                de desinfección para combatir a los infectados. Es la última esperanza para salvar
                lo que queda de la humanidad y detener la propagación del virus.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border-l-4 border-red-600 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">⚠</span> Advertencia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              El hospital es solo el comienzo. Cada zona purificada revela una verdad más aterradora:
              el virus no se limita a estas paredes. Cuando Jhony finalmente logre escapar, descubrirá
              que Rifle, Texas, ya no es la ciudad que conocía.
              <span className="text-green-500 font-semibold"> La batalla apenas comienza...</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
