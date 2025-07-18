import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Egg, Calendar, TrendingUp, Award } from 'lucide-react'
import { useTranslation } from '../contexts/LanguageContext'

const Racas = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('breeds.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('breeds.hero.description')}
          </p>
        </div>
      </section>

      {/* ISA Brown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <Badge className="bg-yellow-100 text-yellow-800">{t('breeds.isaBrown.badge')}</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('breeds.isaBrown.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('breeds.isaBrown.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('breeds.isaBrown.characteristics.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.isaBrown.characteristics.plumage')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.isaBrown.characteristics.size')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.isaBrown.characteristics.temperament')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.isaBrown.characteristics.adaptation')}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('breeds.isaBrown.production.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Egg className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{t('breeds.isaBrown.production.eggsPerYear')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{t('breeds.isaBrown.production.layingStart')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.isaBrown.production.peakProduction')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">{t('breeds.isaBrown.production.eggWeight')}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">{t('breeds.isaBrown.advantages.title')}</h3>
                <ul className="space-y-1 text-green-700">
                  <li>• {t('breeds.isaBrown.advantages.productivity')}</li>
                  <li>• {t('breeds.isaBrown.advantages.resistance')}</li>
                  <li>• {t('breeds.isaBrown.advantages.conversion')}</li>
                  <li>• {t('breeds.isaBrown.advantages.management')}</li>
                </ul>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="/isa_brown_1.jpg" 
                alt="ISA Brown"
                className="w-full h-80 object-contain bg-gray-50 rounded-lg shadow-lg p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Novagen Tinted */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/novagen_tinted_1.png" 
                alt="Novagen Tinted"
                className="w-full h-80 object-contain bg-gray-50 rounded-lg shadow-lg p-4"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-purple-500" />
                <Badge className="bg-purple-100 text-purple-800">{t('breeds.novagenTinted.badge')}</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('breeds.novagenTinted.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('breeds.novagenTinted.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('breeds.novagenTinted.characteristics.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.characteristics.plumage')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.characteristics.size')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.characteristics.temperament')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.characteristics.adaptation')}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('breeds.novagenTinted.production.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Egg className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.production.eggsPerYear')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.production.layingStart')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.production.peakProduction')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">{t('breeds.novagenTinted.production.eggWeight')}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">{t('breeds.novagenTinted.advantages.title')}</h3>
                <ul className="space-y-1 text-purple-700">
                  <li>• {t('breeds.novagenTinted.advantages.eggColor')}</li>
                  <li>• {t('breeds.novagenTinted.advantages.nutrition')}</li>
                  <li>• {t('breeds.novagenTinted.advantages.flavor')}</li>
                  <li>• {t('breeds.novagenTinted.advantages.market')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('breeds.comparison.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('breeds.comparison.description')}
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{t('breeds.comparison.table.characteristic')}</th>
                  <th className="px-6 py-4 text-center">ISA Brown</th>
                  <th className="px-6 py-4 text-center">Novagen Tinted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">{t('breeds.comparison.table.eggsPerYear')}</td>
                  <td className="px-6 py-4 text-center">300-330</td>
                  <td className="px-6 py-4 text-center">280-310</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">{t('breeds.comparison.table.eggColor')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.brown')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.cream')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">{t('breeds.comparison.table.layingStart')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.weeks18')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.weeks19')}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">{t('breeds.comparison.table.eggWeight')}</td>
                  <td className="px-6 py-4 text-center">62-65g</td>
                  <td className="px-6 py-4 text-center">60-63g</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">{t('breeds.comparison.table.temperament')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.docile')}</td>
                  <td className="px-6 py-4 text-center">{t('breeds.comparison.table.calm')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('breeds.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('breeds.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('breeds.cta.contact')}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              {t('breeds.cta.plans')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Racas

