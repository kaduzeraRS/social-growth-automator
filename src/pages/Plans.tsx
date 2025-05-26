import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Plans = () => {
  const plans = [
    {
      name: 'Quinzenal',
      price: 'R$ 29,90',
      period: '/15 dias',
      popular: false,
      features: [
        '2 contas conectadas',
        '100 interações/dia',
        '5 posts agendados',
        'Suporte por email'
      ]
    },
    {
      name: 'Mensal',
      price: 'R$ 49,90',
      period: '/mês',
      popular: true,
      features: [
        '5 contas conectadas',
        '300 interações/dia',
        '20 posts agendados',
        'Suporte prioritário',
        'Relatórios avançados'
      ]
    },
    {
      name: 'Trimestral',
      price: 'R$ 119,90',
      period: '/3 meses',
      popular: false,
      features: [
        '10 contas conectadas',
        '500 interações/dia',
        '50 posts agendados',
        'Suporte 24/7',
        'Relatórios avançados',
        'API personalizada'
      ]
    },
    {
      name: 'Anual',
      price: 'R$ 399,90',
      period: '/ano',
      popular: false,
      features: [
        'Contas ilimitadas',
        '1000 interações/dia',
        'Posts ilimitados',
        'Suporte dedicado',
        'Relatórios premium',
        'API personalizada',
        'Automação avançada'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Escolha seu Plano</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecione o plano ideal para acelerar o crescimento das suas redes sociais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-0 shadow-xl bg-white/80 backdrop-blur-sm relative ${
              plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full mt-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}>
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Plano Atual</CardTitle>
              <CardDescription>Detalhes da sua assinatura</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-blue-900">Plano Mensal Pro</div>
                  <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                </div>
                <div className="text-sm text-blue-700">Renovação: 23 de dezembro, 2024</div>
                <div className="text-sm text-blue-700">Próximo pagamento: R$ 49,90</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Contas conectadas</span>
                  <span className="font-medium">3/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interações hoje</span>
                  <span className="font-medium">170/300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts agendados</span>
                  <span className="font-medium">8/20</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Precisa de Mais?</CardTitle>
              <CardDescription>Upgrades e add-ons disponíveis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <div className="font-medium text-yellow-800">Upgrade Instantâneo</div>
                </div>
                <div className="text-sm text-yellow-700 mb-3">
                  Precisa de mais recursos? Faça upgrade agora e pague apenas a diferença.
                </div>
                <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  Fazer Upgrade
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Contas extras</div>
                    <div className="text-sm text-gray-500">+5 contas por R$ 19,90/mês</div>
                  </div>
                  <Button size="sm" variant="outline">Adicionar</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Interações extras</div>
                    <div className="text-sm text-gray-500">+200 por R$ 14,90/mês</div>
                  </div>
                  <Button size="sm" variant="outline">Adicionar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;
