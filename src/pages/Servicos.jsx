import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Egg, Feather, Leaf, Dna, Factory, Store, GraduationCap, CheckCircle, Users, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../contexts/LanguageContext'

const Servicos = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: Egg,
      title: t('services.eggProduction.title'),
      description: t('services.eggProduction.description'),
      features: [
        t('services.eggProduction.features.0'),
        t('services.eggProduction.features.1'),
        t('services.eggProduction.features.2'),
        t('services.eggProduction.features.3')
      ],
      badge: t('services.eggProduction.badge'),
      color: "green"
    },
    {
      icon: Feather,
      title: t('services.chickenSales.title'),
      description: t('services.chickenSales.description'),
      features: [
        t('services.chickenSales.features.0'),
        t('services.chickenSales.features.1'),
        t('services.chickenSales.features.2'),
        t('services.chickenSales.features.3')
      ],
      badge: t('services.chickenSales.badge'),
      color: "blue"
    },
    {
      icon: Leaf,
      title: t('services.poultryBedding.title'),
      description: t('services.poultryBedding.description'),
      features: [
        t('services.poultryBedding.features.0'),
        t('services.poultryBedding.features.1'),
        t('services.poultryBedding.features.2'),
        t('services.poultryBedding.features.3')
      ],
      badge: t('services.poultryBedding.badge'),
      color: "green"
    },
    {
      icon: Dna,
      title: t('services.broodstock.title'),
      description: t('services.broodstock.description'),
      features: [
        t('services.broodstock.features.0'),
        t('services.broodstock.features.1'),
        t('services.broodstock.features.2'),
        t('services.broodstock.features.3')
      ],
      badge: t('services.broodstock.badge'),
      color: "purple"
    },
    {
      icon: Factory,
      title: t('services.feedFactory.title'),
      description: t('services.feedFactory.description'),
      features: [
        t('services.feedFactory.features.0'),
        t('services.feedFactory.features.1'),
        t('services.feedFactory.features.2'),
        t('services.feedFactory.features.3')
      ],
      badge: t('services.feedFactory.badge'),
      color: "orange"
    },
    {
      icon: Store,
      title: t('services.franchise.title'),
      description: t('services.franchise.description'),
      features: [
        t('services.franchise.features.0'),
        t('services.franchise.features.1'),
        t('services.franchise.features.2'),
        t('services.franchise.features.3')
      ],
      badge: t('services.franchise.badge'),
      color: "yellow"
    },
    {
      icon: GraduationCap,
      title: t('services.education.title'),
      description: t('services.education.description'),
      features: [
        t('services.education.features.0'),
        t('services.education.features.1'),
        t('services.education.features.2'),
        t('services.education.features.3')
      ],
      badge: t('services.education.badge'),
      color: "indigo"
    }
  ]

  const stats = [
    { number: "500+", label: t('services.stats.clients') },
    { number: "50+", label: t('services.stats.cities') },
    { number: "7", label: t('services.stats.services') },
    { number: "4.9", label: t('services.stats.rating') }
  ]

  const process = [
    {
      step: "01",
      title: t('services.process.step1.title'),
      description: t('services.process.step1.description')
    },
    {
      step: "02",
      title: t('services.process.step2.title'),
      description: t('services.process.step2.description')
    },
    {
      step: "03",
      title: t('services.process.step3.title'),
      description: t('services.process.step3.description')
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('services.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t('services.hero.description')}
          </p>
          <Badge className="bg-yellow-600 text-white text-lg px-6 py-2">
            {t('services.hero.badge')}
          </Badge>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12 text-green-600" />
                    <Badge className={`bg-${service.color}-100 text-${service.color}-800`}>
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('services.stats.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.stats.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('services.process.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.process.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/contato">{t('services.cta.button')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link to="/planos">{t('nav.plans')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicos

