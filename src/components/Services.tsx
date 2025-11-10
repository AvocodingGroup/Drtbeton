import React from "react";
import { Layers, Drill, Home, Blocks, Wrench, Truck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Layers,
      title: "VYREZÁVANIE OTVOROV DO PANELOV",
      description:
        "Špecializujeme sa na presné vyrezávanie otvorov v panelových budovách. Naše služby zahŕňajú inštaláciu oceľových prekladov, vystuženie pomocou uhlíkových lamiel a bezpečné odstránenie priečok.",
    },
    {
      icon: Drill,
      title: "JADROVÉ VŔTANIE A REZANIE BETÓNU",
      description:
        "Moderné technológie pre presné vŕtanie a rezanie všetkých typov materiálov - betón, železobetón, tehla aj prírodný kameň. Ideálne riešenie pre stavebné projekty.",
    },
    {
      icon: Home,
      title: "VŔTANIE OTVOROV V DOMÁCNOSTI",
      description:
        "Potrebujete otvor pre digestor či klimatizáciu? Náš skúsený tím vyrieši váš problém rýchlo a bez zbytočného čakania. Spoľahlivé služby priamo u vás doma.",
    },
    {
      icon: Blocks,
      title: "REALIZÁCIE VÝSTUŽIÍ",
      description:
        "Posilnenie a stabilizácia stavebných konštrukcií pomocou moderných oceľových výstuh a uhlíkových lamiel. Príklady našich prác nájdete v galérii projektov.",
    },
    {
      icon: Wrench,
      title: "PRÍPRAVA NA INŠTALÁCIE",
      description:
        "Kompletná príprava priestorov pre inštalácie - vodovod, vykurovanie, plyn, kanalizácia. Vŕtame otvory pre elektroinštalácie a vytvárame drážky pre káble.",
    },
    {
      icon: Truck,
      title: "ODVOZ A LIKVIDÁCIA STAVEBNEJ SUTE",
      description:
        "Ekologická likvidácia stavebného odpadu a sutiny. Kompletné služby od vyloženia až po environmentally friendly spracovanie materiálov.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Naše služby</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Poskytujeme komplexné služby jadrového vŕtania a rezania betónu 
            s modernou technikou a odborným prístupom
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 py-4"
              >
                <CardContent className="flex flex-col items-center text-center p-8">
                  <div className="mb-6">
                    <Icon
                      className="w-24 h-24"
                      strokeWidth={1.5}
                      style={{ width: "40px", height: "40px", color: '#F54900' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg px-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
