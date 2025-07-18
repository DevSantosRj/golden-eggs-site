import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Plus } from 'lucide-react'

const Pedidos = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom section-padding">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Meus Pedidos
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus pedidos personalizados
          </p>
        </div>

        <div className="mb-6">
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Novo Pedido
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pedido #001</CardTitle>
                  <CardDescription>Criado em 10/07/2024</CardDescription>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Entregue
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Quantidade</p>
                  <p className="font-semibold">30 dúzias</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Modalidade</p>
                  <p className="font-semibold">Entrega</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valor</p>
                  <p className="font-semibold">R$ 210,00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pedido #002</CardTitle>
                  <CardDescription>Criado em 12/07/2024</CardDescription>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Confirmado
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Quantidade</p>
                  <p className="font-semibold">50 dúzias</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Modalidade</p>
                  <p className="font-semibold">Retirada</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valor</p>
                  <p className="font-semibold">R$ 315,00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Pedidos

