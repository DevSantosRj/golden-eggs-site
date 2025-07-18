import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Egg,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react'
import { useTranslation } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Egg className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold">{t('footer.company')}</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5537999999999" 
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/racas" 
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.breeds')}
                </Link>
              </li>
              <li>
                {/*<Link 
                  to="/planos" 
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.plans')}
                </Link> */}
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact_info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-secondary-foreground/80">
                  (37) 99999-9999
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-secondary-foreground/80">
                  contato@goldeneggsrwa.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  Zona Rural<br />
                  Divinópolis - MG<br />
                  CEP: 35500-000
                </span>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Horários</span>
              </div>
              <div className="text-sm text-secondary-foreground/80 space-y-1">
                <p><strong>Segunda à Sexta:</strong><br />07:00 - 17:00</p>
                <p><strong>Sábado:</strong><br />07:00 - 12:00</p>
                <p><strong>Domingo:</strong><br />Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <hr className="my-8 border-secondary-foreground/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 {t('footer.company')}. {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

