import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefón',
      content: '+421 944 473 376',
      link: 'tel:+421 944 473 376'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@drtbeton.sk',
      link: 'mailto:info@drtbeton.sk'
    },
    {
      icon: Clock,
      title: 'Pracovný čas',
      content: 'Po-Pia: 7:00 - 17:00',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Kontaktujte nás</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Máte otázky alebo potrebujete cenovú ponuku? Neváhajte nás kontaktovať
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a href={info.link} style={{ color: '#F54900' }} className="hover:text-[#d64000]">
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-700">{info.content}</p>
              );

              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" style={{ color: '#F54900' }} />
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1">{info.title}</h3>
                        {content}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}