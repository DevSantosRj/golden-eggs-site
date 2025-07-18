import { createContext, useContext, useState, useEffect } from 'react'

// Importar traduções
import ptBR from '../locales/pt-BR.json'
import en from '../locales/en.json'
import esLA from '../locales/es-LA.json'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const useTranslation = () => {
  const { currentLanguage } = useLanguage()
  
  const translations = {
    'pt-BR': ptBR,
    'en': en,
    'es-LA': esLA
  }
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Fallback para português se não encontrar a tradução
    if (!value && currentLanguage !== 'pt-BR') {
      value = translations['pt-BR']
      for (const k of keys) {
        value = value?.[k]
      }
    }
    
    return value || key
  }
  
  return { t }
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt-BR')
  
  const languages = [
    {
      code: 'pt-BR',
      name: 'Português',
      flag: '🇧🇷'
    },
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'es-LA',
      name: 'Español',
      flag: '🇪🇸'
    }
  ]
  
  useEffect(() => {
    // Verificar se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('golden-eggs-language')
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
    
    // Verificar parâmetro de URL
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang')
    if (langParam) {
      const langMap = {
        'pt': 'pt-BR',
        'en': 'en',
        'es': 'es-LA'
      }
      const mappedLang = langMap[langParam] || langParam
      if (languages.find(lang => lang.code === mappedLang)) {
        setCurrentLanguage(mappedLang)
        localStorage.setItem('golden-eggs-language', mappedLang)
      }
    }
  }, [])
  
  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem('golden-eggs-language', languageCode)
  }
  
  const value = {
    currentLanguage,
    changeLanguage,
    languages
  }
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext

