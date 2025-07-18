import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Star, Truck, Clock, Shield, Heart } from 'lucide-react'
import { useTranslation } from '../contexts/LanguageContext'

const Planos = () => {
  const { t } = useTranslation()

  const plans = [
    {
      name: t('plans.basic.name'),
      price: "R$ 15,00",
      period: t('plans.basic.period'),
      description: t('plans.basic.description'),
      eggs: t('plans.basic.eggs'),
      features: [
        t('plans.basic.features.0'),
        t('plans.basic.features.1'),
        t('plans.basic.features.2'),
        t('plans.basic.features.3')
      ],
      badge: null,
      color: "border-gray-200"
    },
    {
      name: t('plans.family.name'),
      price: "R$ 28,00",
      period: t('plans.family.period'),
      description: t('plans.family.description'),
      eggs: t('plans.family.eggs'),
      features: [
        t('plans.family.features.0'),
        t('plans.family.features.1'),
        t('plans.family.features.2'),
        t('plans.family.features.3'),
        t('plans.family.features.4')
      ],
      badge: t('plans.family.badge'),
      color: "border-green-500 ring-2 ring-green-200"
    },
    {
      name: t('plans.premium.name'),
      price: "R$ 40,00",
      period: t('plans.premium.period'),
      description: t('plans.premium.description'),
      eggs: t('plans.premium.eggs'),
      features: [
        t('plans.premium.features.0'),
        t('plans.premium.features.1'),
        t('plans.premium.features.2'),
        t('plans.premium.features.3'),
        t('plans.premium.features.4'),
        t('plans.premium.features.5')
      ],
      badge: null,
      color: "border-purple-200"
    }
  ]

  const benefits = [
    {
      icon: Truck,
      title: t('plans.benefits.delivery.title'),
      description: t('plans.benefits.delivery.description')
    },
    {
      icon: Clock,
      title: t('plans.benefits.freshness.title'),
      description: t('plans.benefits.freshness.description')
    },
    {
      icon: Shield,
      title: t('plans.benefits.quality.title'),
      description: t('plans.benefits.quality.description')
    },
    {
      icon: Heart,
      title: t('plans.benefits.care.title'),
      description: t('plans.benefits.care.description')
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('plans.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('plans.hero.description')}
          </p>
          <Badge className="bg-yellow-600 text-white text-lg px-6 py-2">
            {t('plans.hero.badge')}
          </Badge>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('plans.section.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('plans.section.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} hover:shadow-lg transition-all duration-300`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-green-800">{plan.eggs}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    {t('plans.button.choose')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('plans.benefits.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('plans.benefits.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('plans.commercial.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('plans.commercial.description')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('plans.commercial.card.title')}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t('plans.commercial.card.features.0')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t('plans.commercial.card.features.1')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t('plans.commercial.card.features.2')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t('plans.commercial.card.features.3')}
                  </li>
                </ul>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  {t('plans.commercial.card.button')}
                </Button>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{t('plans.commercial.card.discount')}</div>
                <div className="text-xl">{t('plans.commercial.card.volume')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('plans.faq.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('plans.faq.description')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plans.faq.questions.delivery.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('plans.faq.questions.delivery.answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('plans.faq.questions.freshness.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('plans.faq.questions.freshness.answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('plans.faq.questions.cancellation.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('plans.faq.questions.cancellation.answer')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('plans.faq.questions.payment.question')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('plans.faq.questions.payment.answer')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('plans.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('plans.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              {t('plans.cta.start')}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              {t('plans.cta.contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Planos

