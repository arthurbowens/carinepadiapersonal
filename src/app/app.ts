import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly whatsappLink =
    'https://wa.me/5500000000000?text=Ol%C3%A1%20Carine!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria.';

  protected readonly navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  protected readonly services = [
    {
      title: 'Consultoria Online',
      description:
        'Acompanhamento completo à distância com treinos personalizados, vídeos explicativos e suporte direto pelo WhatsApp.',
      icon: 'online',
    },
    {
      title: 'Consultoria Presencial',
      description:
        'Treinos presenciais com correção de postura, execução guiada e plano alinhado aos seus objetivos.',
      icon: 'presencial',
    },
    {
      title: 'Plano Personalizado',
      description:
        'Cada programa é montado sob medida — seja emagrecimento, hipertrofia, condicionamento ou qualidade de vida.',
      icon: 'plano',
    },
  ];
}
