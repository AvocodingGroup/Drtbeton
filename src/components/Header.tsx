import { Menu, Phone, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
            <Logo className="w-12 h-12" />
            <div>
               <p className="text-sm text-gray-200 font-medium">
                Profesionálne vŕtanie a rezanie
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-200 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Domov
              </button>
            ) : (
              <Link
                to="/"
                className="text-gray-200 transition-colors"
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
              >
                Domov
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-200 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Služby
              </button>
            ) : (
              <Link
                to="/#services"
                className="text-gray-200 transition-colors"
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
              >
                Služby
              </Link>
            )}
            <Link
              to="/cennik"
              className="text-gray-200 transition-colors"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
            >
              Cenník
            </Link>
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-200 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                O nás
              </button>
            ) : (
              <Link
                to="/#about"
                className="text-gray-200 transition-colors"
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
              >
                O nás
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-200 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Galéria
              </button>
            ) : (
              <Link
                to="/#gallery"
                className="text-gray-200 transition-colors"
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
              >
                Galéria
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-200 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Kontakt
              </button>
            ) : (
              <Link
                to="/#contact"
                className="text-gray-200 transition-colors"
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = ''}
              >
                Kontakt
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+421 944 473 376"
              className="flex items-center gap-2 text-gray-200 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+421 944 473 376</span>
            </a>
            <Button
              onClick={() => window.location.href = '/#contact'}
              className="text-white"
              style={{ backgroundColor: '#F54900' }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#d64000'}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#F54900'}
            >
              Kontaktujte nás
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-6 border-t border-gray-800">
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-200 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Domov
              </button>
            ) : (
              <Link
                to="/"
                className="text-gray-200 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Domov
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-200 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Služby
              </button>
            ) : (
              <Link
                to="/#services"
                className="text-gray-200 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Služby
              </Link>
            )}
            <Link
              to="/cennik"
              className="text-gray-200 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cenník
            </Link>
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-200 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                O nás
              </button>
            ) : (
              <Link
                to="/#about"
                className="text-gray-200 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nás
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-200 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Galéria
              </button>
            ) : (
              <Link
                to="/#gallery"
                className="text-gray-200 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galéria
              </Link>
            )}
            {location.pathname === '/' ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-200 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#F54900'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Kontakt
              </button>
            ) : (
              <Link
                to="/#contact"
                className="text-gray-200 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            )}
            <a
              href="tel:+421 944 473 376"
              className="flex items-center gap-2"
              style={{ color: '#F54900' }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+421 944 473 376</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
