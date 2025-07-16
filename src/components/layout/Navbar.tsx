
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserRound, LogIn, Home, Leaf, TreePine, UtensilsCrossed, Heart, BookOpen, FileText, Library } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Home Remedies", path: "/remedies", icon: Leaf },
    { name: "Plant Properties", path: "/plants", icon: TreePine },
    { name: "Diet Console", path: "/diet", icon: UtensilsCrossed },
    { name: "Disease Solutions", path: "/solutions", icon: Heart },
    { name: "Resources", path: "/resources", icon: BookOpen },
    { name: "Articles", path: "/articles", icon: FileText },
    { name: "References", path: "/references", icon: Library },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="font-serif text-xl md:text-2xl font-medium text-ayurvedic-forest">
              e-Ayurvedic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
               >
                <link.icon className="h-5 w-5" />
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    <span>{user.email.split('@')[0]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-sm">Account Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm">My Favorites</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-sm text-destructive" 
                    onClick={signOut}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="mr-2">
                    <UserRound className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-sm">Account</DropdownMenuItem>
                  <DropdownMenuItem className="text-sm">Favorites</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-sm text-destructive" 
                    onClick={signOut}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {!user && (
              <Link to="/signin" className="mr-2">
                <Button variant="default" size="sm" className="flex items-center gap-1">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-border">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!user && (
              <div className="pt-2 border-t border-border flex flex-col gap-2">
                <Link to="/signin" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
