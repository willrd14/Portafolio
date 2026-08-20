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
              <title>Williams R. Villavizar Hdez — Developer & Designer</title>
              <meta name="description" content="Portfolio de Williams R. Villavizar Hdez, desarrollador web y diseñador de interfaces. React, Vite, Tailwind CSS." />
              <meta property="og:title" content="Williams R. Villavizar Hdez — Developer & Designer" />
              <meta property="og:description" content="Portfolio de Williams R. Villavizar Hdez, desarrollador web y diseñador de interfaces." />
              <meta property="og:image" content="https://w-tech.uk/og-image.png" />
              <meta property="og:url" content="https://w-tech.uk" />
              <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="min-h-screen flex flex-col bg-bg dark:bg-dark-bg text-text-primary dark:text-dark-text-primary">
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
