import { Syringe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Syringe className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">Bio Warfare</span>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button onClick={() => scrollToSection('story')} className="text-gray-300 hover:text-green-500 transition-colors">
                Historia
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gameplay')} className="text-gray-300 hover:text-green-500 transition-colors">
                Jugabilidad
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('enemies')} className="text-gray-300 hover:text-green-500 transition-colors">
                Enemigos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-green-500 transition-colors">
                Características
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('leaderboard')} className="text-gray-300 hover:text-green-500 transition-colors">
                Tabla
              </button>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button onClick={() => scrollToSection('story')} className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors">
                Historia
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gameplay')} className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors">
                Jugabilidad
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('enemies')} className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors">
                Enemigos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors">
                Características
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('leaderboard')} className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors">
                Tabla
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
