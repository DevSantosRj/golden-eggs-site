import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Shield, Truck, Star, Users, Award } from 'lucide-react'
import granjaImg from '../assets/granja_caipira_1.jpg'
import { useTranslation } from '../contexts/LanguageContext'

const Sobre = () => {
  const { t } = useTranslation()
  
  const valores = [
    {
      icon: Heart,
      titulo: t('about.values.welfare'),
      descricao: 'Cuidamos das nossas galinhas com amor e respeito, garantindo qualidade de vida.'
    },
    {
      icon: Shield,
      titulo: t('about.values.quality'),
      descricao: 'Compromisso com a excelência em cada ovo que produzimos.'
    },
    {
      icon: Truck,
      titulo: t('about.values.sustainability'),
      descricao: 'Pontualidade e cuidado na entrega dos nossos produtos.'
    },
    {
      icon: Star,
      titulo: t('about.values.innovation'),
      descricao: 'Conhecimento passado de geração em geração na criação de aves.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A Golden Eggs nasceu do sonho de uma família apaixonada pela avicultura 
                  e comprometida com a produção de ovos de qualidade superior. Localizada 
                  na zona rural de Divinópolis-MG, nossa granja combina tradição familiar 
                  com técnicas modernas de criação.
                </p>
                <p>
                  Desde o início, nosso foco sempre foi o bem-estar das galinhas e a 
                  produção de ovos frescos e naturais. Trabalhamos com duas raças 
                  cuidadosamente selecionadas: ISA Brown e Novagen Tinted, cada uma 
                  com características únicas que garantem ovos excepcionais.
                </p>
                <p>
                  Hoje, atendemos famílias e estabelecimentos comerciais em toda a região, 
                  sempre mantendo nosso compromisso com a qualidade, frescor e 
                  sustentabilidade.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={granjaImg} 
                alt="Granja Golden Eggs"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">2019</div>
                  <div className="text-sm">Fundação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho diário e nosso compromisso 
              com clientes e animais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{valor.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {valor.descricao}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produzir ovos de qualidade superior através de práticas sustentáveis 
                  e cuidado exemplar com o bem-estar animal, oferecendo produtos frescos 
                  e naturais para nossas famílias clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser reconhecida como a principal referência em ovos caipiras da região, 
                  expandindo nosso alcance enquanto mantemos nossos padrões de qualidade 
                  e compromisso com a sustentabilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Bem-estar animal</li>
                  <li>• Qualidade sem compromissos</li>
                  <li>• Sustentabilidade</li>
                  <li>• Transparência</li>
                  <li>• Compromisso com o cliente</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Golden Eggs em Números
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Resultados que demonstram nosso crescimento e compromisso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Galinhas Criadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/80">Ovos por Dia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-primary-foreground/80">Famílias Atendidas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Certificações e Qualidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Boas Práticas</h3>
              <p className="text-muted-foreground">
                Certificação em boas práticas de produção avícola
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bem-estar Animal</h3>
              <p className="text-muted-foreground">
                Selo de bem-estar animal e criação humanitária
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Controle Sanitário</h3>
              <p className="text-muted-foreground">
                Rigoroso controle sanitário e veterinário
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre

