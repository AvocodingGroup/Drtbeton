import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Check, Info, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';

export function Pricing() {
  const [activeTab, setActiveTab] = useState('drilling');
  // Presné ceny z cenníka
  const drillingPricesTable = [
    { diameter: '21-31 mm', tehlaBeton: '0,50 €', zelezobeton: '0,80 €', itong: '0,86 €' },
    { diameter: '42-52 mm', tehlaBeton: '0,60 €', zelezobeton: '0,86 €', itong: '0,96 €' },
    { diameter: '62-71 mm', tehlaBeton: '0,70 €', zelezobeton: '0,93 €', itong: '1,00 €' },
    { diameter: '82-92 mm', tehlaBeton: '0,76 €', zelezobeton: '0,96 €', itong: '1,10 €' },
    { diameter: '102-112 mm', tehlaBeton: '1,00 €', zelezobeton: '1,16 €', itong: '1,33 €' },
    { diameter: '122-127 mm', tehlaBeton: '1,13 €', zelezobeton: '1,29 €', itong: '1,46 €' },
    { diameter: '132 mm', tehlaBeton: '1,19 €', zelezobeton: '1,36 €', itong: '1,53 €' },
    { diameter: '142-152 mm', tehlaBeton: '1,26 €', zelezobeton: '1,39 €', itong: '1,56 €' },
    { diameter: '162-172 mm', tehlaBeton: '1,33 €', zelezobeton: '1,46 €', itong: '1,63 €' },
    { diameter: '181 mm', tehlaBeton: '1,49 €', zelezobeton: '1,66 €', itong: '1,86 €' },
    { diameter: '190-201 mm', tehlaBeton: '1,56 €', zelezobeton: '1,99 €', itong: '2,09 €' },
    { diameter: '225 mm', tehlaBeton: '1,76 €', zelezobeton: '2,12 €', itong: '2,29 €' },
    { diameter: '250 mm', tehlaBeton: '1,99 €', zelezobeton: '2,46 €', itong: '2,59 €' },
    { diameter: '300 mm', tehlaBeton: '2,26 €', zelezobeton: '2,76 €', itong: '2,92 €' },
    { diameter: '350 mm', tehlaBeton: '3,22 €', zelezobeton: '3,92 €', itong: '4,05 €' },
    { diameter: '400 mm', tehlaBeton: '4,22 €', zelezobeton: '5,15 €', itong: '5,31 €' },
    { diameter: '450 mm', tehlaBeton: '5,01 €', zelezobeton: '6,11 €', itong: '6,31 €' },
    { diameter: '500 mm', tehlaBeton: '7,90 €', zelezobeton: '9,62 €', itong: '9,96 €' },
    { diameter: '550 mm', tehlaBeton: '9,19 €', zelezobeton: '11,22 €', itong: '11,62 €' },
    { diameter: '600 mm', tehlaBeton: '10,00 €', zelezobeton: '12,70 €', itong: '12,70 €' },
    { diameter: '650 mm', tehlaBeton: '11,60 €', zelezobeton: '14,60 €', itong: '14,60 €' },
    { diameter: '700 mm', tehlaBeton: '13,17 €', zelezobeton: '16,60 €', itong: '16,60 €' },
    { diameter: '750 mm', tehlaBeton: '14,85 €', zelezobeton: '18,70 €', itong: '18,70 €' },
    { diameter: '800 mm', tehlaBeton: '16,66 €', zelezobeton: '21,00 €', itong: '21,00 €' },
    { diameter: '850 mm', tehlaBeton: '18,57 €', zelezobeton: '23,40 €', itong: '23,40 €' },
    { diameter: '900 mm', tehlaBeton: '20,55 €', zelezobeton: '25,90 €', itong: '25,90 €' },
    { diameter: '1000 mm', tehlaBeton: '24,92 €', zelezobeton: '31,40 €', itong: '31,40 €' },
  ];

  const impactDrilling = [
    { range: 'do priemeru 10 mm', price: '10,95 €/bm' },
    { range: 'od 10 mm do 20 mm priemeru', price: '23,24 €/bm' },
    { range: 'od 20 mm do 30 mm priemeru', price: '36,51 €/bm' },
  ];

  const cuttingPricesWalls = [
    { type: 'Železobetón - hr. panelu 80 mm', price: '30,54 €/m' },
    { type: 'Železobetón - hr. panelu 100 mm', price: '37,51 €/m' },
    { type: 'Železobetón - hr. panelu 150 mm', price: '51,12 €/m' },
    { type: 'Železobetón - hr. panelu 200 mm', price: '76,35 €/m' },
    { type: 'Rozdelenie 1 ks panelu (1 dverný otvor 80/200 cm)', price: '49,79 €' },
    { type: 'Odvoz sute a uloženie na skládku (1 dverný otvor 80/200 cm)', price: '49,79 €/ks' },
  ];

  const cuttingPricesMasonry = [
    { type: 'Murivo - hr. steny 80 mm', price: '9,96 €/m' },
    { type: 'Murivo - hr. steny 100 mm', price: '12,28 €/m' },
    { type: 'Murivo - hr. steny 150 mm', price: '16,60 €/m' },
    { type: 'Murivo - hr. steny 200 mm', price: '25,23 €/m' },
    { type: 'Murivo - hr. steny 250 mm', price: '31,53 €/m' },
    { type: 'Odvoz sute a uloženie na skládku (1 dverný otvor 80/200 cm)', price: '33,19 €/ks' },
  ];

  const grooveCutting = [
    { type: 'Rezanie drážok do betónu', price: '11,62 €/bm' },
    { type: 'Rezanie drážok do muriva', price: '3,88 €/bm' },
  ];

  const supplements = [
    'Ceny sú stanovené pri vŕtaní do železobetónu s priemerom výztuže max. 16 mm. Pri hrubšej výstuži alebo oceľovom prvku zabudovanom v betóne sa k jednotkovej cene priráta suma 2,32 €/1 cm² reznej plochy ocele.',
    'Ak zdroj elektrickej energie zabezpečujeme vo vlastnej réžii, účtujeme za každú hodinu použitia el. generátora 8,30 €.',
    'Použitie vlastnej tlakovej nádoby na vodu 16,60 € /1 deň.',
    'Príplatok 10% k jednotkovej cene pri šikmom vŕtaní.',
    'Vyrovnávací príplatok, ak cena vykonaných prác nedosiahla 100,00 €.',
    'Príplatok 20% k jednotkovej cene pre vrty hlbšie ako 42 cm.',
    'Príplatok 15% k jednotkovej cene pre vrty vo výške nad 1,50 m + cena prenájmu plošiny.',
    'Príplatok 20% k jednotkovej cene pri odsávaní chladiacej vody.',
    'Kotva 1 €/1 kus.',
    'Prestojné a pomocné práce 7,30 €/1 hod.',
    'Dopravné náklady 0,37 €/km.',
    'V cene nie je zahrnutá likvidácia vzniknutého odpadu.',
  ];

  const requirements = [
    'Objednávateľ zabezpečí bezplatne zdroj elektrickej energie 230 V a zdroj chladiacej vody vo vzdialenosti max. 20m od vŕtaných otvorov.',
    'Objednávateľ vytýči miesta otvorov a naznačí ich vodou nezmývateľnou farbou. V prípade nevytýčenia miesta otvorov sa čakanie na vytýčenie bude účtovať ako prestoj.',
    'Zhotoviteľ neručí za statické posúdenie vŕtaných konštrukcií a za škody spôsobené vŕtaním (napr. poškodenie zabudovaných inštalácií, navlhnutie vŕtaného materiálu a blízkeho okolia).',
  ];

  return (
    <section id="pricing" className="py-20 bg-[#fffaf5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Cenník služieb</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presný cenník našich služieb. Ceny sú uvedené bez DPH.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full flex mb-8 h-auto p-1 bg-white rounded-xl border border-gray-200">
            <TabsTrigger
              value="drilling"
              style={{
                fontWeight: 'bold',
                ...(activeTab === 'drilling' && {
                  backgroundColor: '#F54900',
                  color: 'white',
                  boxShadow: '0 4px 6px -1px rgba(245, 73, 0, 0.3)'
                })
              }}
              className={`
                text-base py-4 px-6 rounded-lg transition-all duration-200
                ${activeTab === 'drilling'
                  ? ''
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              Jadrové vŕtanie
            </TabsTrigger>
            <TabsTrigger
              value="cutting"
              style={{
                fontWeight: 'bold',
                ...(activeTab === 'cutting' && {
                  backgroundColor: '#F54900',
                  color: 'white',
                  boxShadow: '0 4px 6px -1px rgba(245, 73, 0, 0.3)'
                })
              }}
              className={`
                text-base py-4 px-6 rounded-lg transition-all duration-200
                ${activeTab === 'cutting'
                 ? ''
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              Rezanie stien
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drilling">
            <div className="space-y-6">
              {/* Hlavná tabuľka cien vŕtania */}
              <Card>
                <CardHeader>
                  <CardTitle>Jadrové vŕtanie otvorov</CardTitle>
                  <CardDescription>
                    Cena je za 1 cm hĺbky vrtu. Ceny sú uvedené bez DPH. Pri väčšom objeme prác je možnosť poskytnutia zľavy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 md:px-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr style={{ backgroundColor: '#F54900' }} className="text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">Priemer</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Murivo</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Betón</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Železobetón</th>
                        </tr>
                      </thead>
                      <tbody>
                        {drillingPricesTable.map((row, index) => (
                          <tr 
                            key={index} 
                            className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
                          >
                            <td className="border border-gray-300 px-4 py-3 font-medium">{row.diameter}</td>
                            <td className="border border-gray-300 px-4 py-3">{row.tehlaBeton}</td>
                            <td className="border border-gray-300 px-4 py-3">{row.zelezobeton}</td>
                            <td className="border border-gray-300 px-4 py-3">{row.itong}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Príklepové vŕtanie */}
              <Card>
                <CardHeader>
                  <CardTitle>Príklepové vŕtanie do prostého betónu</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {impactDrilling.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center border-b border-gray-200 pb-3"
                      >
                        <span className="text-gray-700">{item.range}</span>
                        <span style={{ color: '#F54900' }} className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Príplatky */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" style={{ color: '#F54900' }} />
                    Príplatky
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal list-inside">
                    {supplements.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Ostatné náležitosti */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Info className="w-5 h-5 text-blue-600" />
                    Ostatné náležitosti
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal list-inside">
                    {requirements.map((item, index) => (
                      <li key={index} className="text-sm text-blue-800 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cutting">
            <div className="space-y-6">
              {/* Rezanie železobetónu */}
              <Card>
                <CardHeader>
                  <CardTitle>Rezanie železobetónu</CardTitle>
                  <CardDescription>
                    Ceny sú uvedené bez DPH
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cuttingPricesWalls.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <span className="text-gray-700">{item.type}</span>
                        <span style={{ color: '#F54900' }} className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rezanie muriva */}
              <Card>
                <CardHeader>
                  <CardTitle>Rezanie muriva</CardTitle>
                  <CardDescription>
                    Ceny sú uvedené bez DPH
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cuttingPricesMasonry.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <span className="text-gray-700">{item.type}</span>
                        <span style={{ color: '#F54900' }} className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rezanie drážok */}
              <Card>
                <CardHeader>
                  <CardTitle>Rezanie drážok a vysekanie</CardTitle>
                  <CardDescription>
                    Pre elektrické káble, vodovodné potrubie, atď.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {grooveCutting.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <span className="text-gray-700">{item.type}</span>
                        <span style={{ color: '#F54900' }} className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Príplatky aj pre rezanie */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" style={{ color: '#F54900' }} />
                    Príplatky
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal list-inside">
                    {supplements.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Ostatné náležitosti */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Info className="w-5 h-5 text-blue-600" />
                    Ostatné náležitosti
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal list-inside">
                    {requirements.map((item, index) => (
                      <li key={index} className="text-sm text-blue-800 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Card style={{ backgroundColor: '#F54900', borderColor: '#F54900' }} className="text-white max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-white text-2xl mb-3">Potrebujete cenovú ponuku?</h3>
              <p className="mb-6 text-white/90">
                Kontaktujte nás pre nezáväznú cenovú ponuku prispôsobenú vašim potrebám. 
                Ponúkame aj možnosť bezplatnej obhliadky.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/#contact';
                }}
                style={{ color: '#F54900', padding: 10 }}
                className="bg-white py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Kontaktovať nás
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
