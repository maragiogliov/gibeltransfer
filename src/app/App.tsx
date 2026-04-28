import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { SegestaTemple } from './components/tours/SegestaTemple';
import { EriceEscape } from './components/tours/EriceEscape';
import { MarsalaWine } from './components/tours/MarsalaWine';
import { SaltPansSunset } from './components/tours/SaltPansSunset';
import { GibellinaArt } from './components/tours/GibellinaArt';
import { SalemiHidden } from './components/tours/SalemiHidden';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours/segesta-temple" element={
            <>
              <Navbar />
              <SegestaTemple />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/tours/erice-escape" element={
            <>
              <Navbar />
              <EriceEscape />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/tours/marsala-wine" element={
            <>
              <Navbar />
              <MarsalaWine />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/tours/salt-pans-sunset" element={
            <>
              <Navbar />
              <SaltPansSunset />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/tours/gibellina-art" element={
            <>
              <Navbar />
              <GibellinaArt />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/tours/salemi-hidden" element={
            <>
              <Navbar />
              <SalemiHidden />
              <Footer />
              <WhatsAppButton />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}