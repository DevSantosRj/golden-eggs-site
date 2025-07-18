import { Link } from 'react-router-dom'
import { useTranslation } from '../contexts/LanguageContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Heart, Clock, Star, Egg, Feather, Shield, Truck, MapPin, Phone, Mail, Users, Award, Leaf } from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  {t('home.hero.title')}
                </h1>
                <h2 className="text-2xl lg:text-4xl text-yellow-400 font-semibold">
                  {t('home.hero.subtitle')}
                </h2>
                <p className="text-lg lg:text-xl text-green-100 max-w-lg">
                  {t('home.hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3">
                  <Link to="/planos">{t('home.hero.cta_plans')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8 py-3">
                  <Link to="/contato">{t('home.hero.cta_contact')}</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Badge className="absolute top-4 right-4 bg-yellow-600 text-white text-lg px-4 py-2 z-10">
                100% {t('home.hero.natural')}
              </Badge>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/granja_caipira_1.jpg" 
                  alt="Granja Golden Eggs"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.why.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.why.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.why.welfare.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.welfare.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.why.quality.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.quality.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.why.delivery.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.delivery.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.why.taste.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.taste.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.process.title')} <span className="text-green-600">{t('home.process.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.process.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {t('home.process.feeding.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.process.feeding.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {t('home.process.environment.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.process.environment.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {t('home.process.collection.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.process.collection.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                04
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {t('home.process.selection.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.process.selection.description')}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Badge className="bg-green-600 text-white text-lg px-6 py-2">
              {t('home.process.certified')}
            </Badge>
          </div>
        </div>
      </section>

      {/* Breeds Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.breeds.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.breeds.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">
                  {t('home.breeds.isa.category')}
                </Badge>
                <CardTitle className="text-2xl text-green-800">ISA Brown</CardTitle>
                <CardDescription className="text-lg">
                  {t('home.breeds.isa.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="/isa_brown_1.jpg" 
                  alt="ISA Brown"
                  className="w-full h-48 object-contain bg-gray-50 rounded-lg p-2"
                />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.isa.feature1')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.isa.feature2')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.isa.feature3')}</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link to="/racas">{t('home.breeds.learn_more')}</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-yellow-100 text-yellow-800">
                  {t('home.breeds.novagen.category')}
                </Badge>
                <CardTitle className="text-2xl text-green-800">Novagen Tinted</CardTitle>
                <CardDescription className="text-lg">
                  {t('home.breeds.novagen.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="/novagen_tinted_1.png" 
                  alt="Novagen Tinted"
                  className="w-full h-48 object-contain bg-gray-50 rounded-lg p-2"
                />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.novagen.feature1')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.novagen.feature2')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{t('home.breeds.novagen.feature3')}</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link to="/racas">{t('home.breeds.learn_more')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Egg className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.services.egg_production.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.services.egg_production.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Feather className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.services.chicken_sales.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.services.chicken_sales.description')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">{t('home.services.bedding.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.services.bedding.description')}</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/servicos">{t('home.services.view_all')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg">{t('home.stats.clients')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-lg">{t('home.stats.cities')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10k+</div>
              <div className="text-lg">{t('home.stats.eggs')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
              <div className="text-lg">{t('home.stats.rating')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                {t('home.location.title')} <span className="text-green-600">{t('home.location.subtitle')}</span>
              </h2>
              <p className="text-xl text-gray-600">
                {t('home.location.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">{t('home.location.address')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">{t('home.location.delivery')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">(37) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">contato@goldeneggsrwa.com</span>
                </div>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/contato">{t('home.location.directions')}</Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-800">
                {t('home.location.our_location')}
              </h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  {t('home.location.address')}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {t('home.location.coordinates')}
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8234567890123!2d-44.8839!3d-20.1389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA4JzIwLjAiUyA0NMKwNTMnMDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Golden Eggs"
                  ></iframe>
                </div>
                <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link to="/contato">{t('home.location.view_map')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-green-100">
              {t('home.cta.description')}
            </p>
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3">
              <Link to="/planos">{t('home.cta.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

