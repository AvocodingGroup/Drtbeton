import { Button } from './ui/button';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518701328093-5bc75f543696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGN1dHRpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MTU3OTc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F54900]/20 via-transparent to-transparent"></div>
      </div>

      {/* Geometric accent elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F54900]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F54900]/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">

            {/* Main heading */}
            <div className="space-y-6" style={{ marginTop: '4rem' }}>
              <h1 className="text-white leading-tight" style={{ paddingLeft: '24px', margin: '2rem 0', borderLeft: '10px solid #F54900' }}>
                Profesionálne<br />
                <span>Vŕtanie & Rezanie</span><br />
                Betónu
              </h1>
              <div className="h-1 w-24 ml-6" style={{ backgroundColor: '#F54900' }}></div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
              Špecializujeme sa na presné jadrové vŕtanie a rezanie železobetónu, tehly a itongu po celom západnom Slovensku.
              Moderná technika, odborný tým a konkurenčné ceny s krátkou čakacou dobou.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8" style={{ marginBottom: '4rem' }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="text-white font-semibold px-8 py-6 text-lg shadow-2xl transition-all duration-300"
                style={{ backgroundColor: '#F54900', boxShadow: '0 25px 50px -12px rgba(245, 73, 0, 0.3)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d64000';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(245, 73, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F54900';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(245, 73, 0, 0.3)';
                }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Kontaktujte nás
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="px-2">Naše služby</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}