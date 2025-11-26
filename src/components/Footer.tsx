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

          

          <div className="text-gray-600 text-sm">
            © 2025 Bio Warfare 
          </div>
        </div>
      </div>
    </footer>
  );
}
