import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Calendar, User, Package } from 'lucide-react'

const DashboardCliente = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom section-padding">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Olá, {user?.nome?.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus planos e acompanhe suas entregas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Plano Atual</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Básico</div>
              <p className="text-xs text-muted-foreground">2 dúzias/mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próxima Entrega</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/07</div>
              <p className="text-xs text-muted-foreground">Em 3 dias</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Recebido</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">dúzias este ano</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Ativo</div>
              <p className="text-xs text-muted-foreground">Assinatura ativa</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Meu Plano Atual</CardTitle>
              <CardDescription>
                Detalhes da sua assinatura ativa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Plano:</span>
                <span className="font-semibold">Básico</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quantidade:</span>
                <span className="font-semibold">2 dúzias/mês</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Valor:</span>
                <span className="font-semibold">R$ 15,00/mês</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <span className="font-semibold text-green-600">Ativo</span>
              </div>
              <div className="pt-4 space-y-2">
                <Button className="w-full" variant="outline">
                  Alterar Plano
                </Button>
                <Button className="w-full" variant="outline">
                  Pausar Assinatura
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximas Entregas</CardTitle>
              <CardDescription>
                Acompanhe suas entregas programadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">15 de Julho</p>
                    <p className="text-sm text-muted-foreground">1 dúzia - ISA Brown</p>
                  </div>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Agendada
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">30 de Julho</p>
                    <p className="text-sm text-muted-foreground">1 dúzia - Novagen Tinted</p>
                  </div>
                  <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    Programada
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardCliente

