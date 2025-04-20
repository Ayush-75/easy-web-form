import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-bank-blue sticky top-0 z-50 border-b-[3px] border-bank-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b53786b1-0dc6-4208-b584-d10261c1bd66.png" 
                alt="FEDBANK Logo" 
                className="h-10 mr-2"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-bank-gold transition-colors">
              About Us
            </a>
            <a href="#property-loan" className="text-white hover:text-bank-gold transition-colors">
              Loan Against Property
            </a>
            <a href="#gold-loan" className="text-white hover:text-bank-gold transition-colors">
              Gold Loan
            </a>
            <a href="#home-loan" className="text-white hover:text-bank-gold transition-colors">
              Home Loan
            </a>
            <a href="#investor" className="text-white hover:text-bank-gold transition-colors">
              Investor Relations
            </a>
            <a href="#join" className="text-white hover:text-bank-gold transition-colors">
              Join Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LoginDialog />
            </div>
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-bank-blue-dark">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#about" className="block text-white hover:text-bank-gold py-2">
              About Us
            </a>
            <a href="#property-loan" className="block text-white hover:text-bank-gold py-2">
              Loan Against Property
            </a>
            <a href="#gold-loan" className="block text-white hover:text-bank-gold py-2">
              Gold Loan
            </a>
            <a href="#home-loan" className="block text-white hover:text-bank-gold py-2">
              Home Loan
            </a>
            <a href="#investor" className="block text-white hover:text-bank-gold py-2">
              Investor Relations
            </a>
            <a href="#join" className="block text-white hover:text-bank-gold py-2">
              Join Us
            </a>
            <div className="mt-4">
              <LoginDialog />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
