import { Syringe, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Syringe className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">Bio Warfare</span>
          </div>

          <p className="text-gray-400 text-center max-w-2xl">
            Más allá del entretenimiento, Bio Warfare transmite un mensaje de conciencia sanitaria
            y la importancia de la prevención y la higiene.
          </p>

          <div className="flex items-center gap-2 text-gray-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>para los amantes del survival horror</span>
          </div>

          <div className="text-gray-600 text-sm">
            © 2025 Bio Warfare. Rifle, Texas - 2027.
          </div>
        </div>
      </div>
    </footer>
  );
}
