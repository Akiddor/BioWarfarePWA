import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Gameplay from './components/Gameplay';
import Enemies from './components/Enemies';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Story />
      <Gameplay />
      <Enemies />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
