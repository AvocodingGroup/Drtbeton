import { Clock, DollarSign, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-8">
            O spoločnosti DrtBeton
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
            Sme profesionálna firma špecializujúca sa na jadrové vŕtanie a
            rezanie železobetónu, tehly a itongu po celom západnom Slovensku.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            S viac ako 5-ročnými skúsenosťami v odbore poskytujeme služby
            najvyššej kvality. Disponujeme modernou technikou a kvalifikovanými
            pracovníkmi pre presné a efektívne riešenia vašich projektov.
          </p>

          {/* Výhody */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <Clock className="w-8 h-8" style={{ color: '#F54900' }} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Krátka čakacia doba
                  </h3>
                </div>

                <p className="text-gray-600">
                  Rýchla reakcia a flexibilné termíny
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <DollarSign className="w-8 h-8" style={{ color: '#F54900' }} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Konkurenčné ceny
                  </h3>
                </div>

                <p className="text-gray-600">Férové ceny za kvalitnú prácu</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex flex-ro gap-2 justify-center items-center">
                  <MapPin className="w-8 h-8" style={{ color: '#F54900' }} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Západné Slovensko
                  </h3>
                </div>

                <p className="text-gray-600">Pokrývame celý región</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
