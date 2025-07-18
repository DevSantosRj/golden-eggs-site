import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { Button } from '@/components/ui/button'
import { Menu, X, Egg } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { t } = useTranslation()
  const location = useLocation()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.breeds'), href: '/racas' },
    { name: t('nav.services'), href: '/servicos' },
    //{ name: t('nav.plans'), href: '/planos' },
    //{ name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contato' },
    { name: t('nav.about'), href: '/sobre' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Egg className="w-8 h-8 text-yellow-400" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Golden Eggs</span>
              <span className="text-xs text-green-200">{t('nav.tagline')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-green-700 text-white'
                    : 'text-green-100 hover:bg-green-700 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Language Selector and Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-green-200">
                  {t('nav.welcome')}, {user.nome}
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-100 hover:bg-green-700"
                >
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-green-100 hover:bg-green-700"
                >
                    {/*<Link to="/login">{t('nav.login')}</Link>*/}
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  {/*<Link to="/cadastro">{t('nav.register')}</Link>*/}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-green-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-green-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-green-700 text-white'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-green-700 pt-4 mt-4">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-green-200">
                      {t('nav.welcome')}, {user.nome}
                    </div>
                    <Button
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full border-green-600 text-green-100 hover:bg-green-700"
                    >
                      {t('nav.logout')}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full text-green-100 hover:bg-green-700 justify-start"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link to="/login">{t('nav.login')}</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/*<Link to="/cadastro">{t('nav.register')}</Link>*/}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

