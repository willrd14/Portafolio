import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Helmet>
              <title>Williams | Dev RD · IA, código y gaming</title>
              <meta name="description" content="Aprende. Construye. Sin pagar de más. Williams, dev dominicano: construyo con IA y comparto lo que aprendo." />
              <meta property="og:title" content="Williams | Dev RD · IA, código y gaming" />
              <meta property="og:description" content="Aprende. Construye. Sin pagar de más." />
              <meta property="og:image" content="https://wilrd14.dev/og-image.png" />
              <meta property="og:url" content="https://wilrd14.dev" />
              <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="min-h-screen flex flex-col text-text-primary dark:text-dark-text-primary">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
