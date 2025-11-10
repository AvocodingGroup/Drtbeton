import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <h3 className="text-white">Drtbeton</h3>
            </div>
            <p className="text-gray-400">
              Profesionálne jadrové vŕtanie, rezanie betónu a demolačné práce s viac ako 5-ročnými skúsenosťami.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Služby</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Jadrové vŕtanie</li>
              <li>Rezanie betónu</li>
              <li>Rezanie tehly a itongu</li>
              <li>Demolačné práce</li>
              <li>Odstraňovanie odpadu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#F54900' }} />
                <a 
                  href="tel:+421 944 473 376" 
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  +421 944 473 376
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#F54900' }} />
                <a 
                  href="mailto:info@drtbeton.sk" 
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  info@drtbeton.sk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#F54900' }} />
                <span>Bratislava, Trnava, Západné Slovensko</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Drtbeton. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}