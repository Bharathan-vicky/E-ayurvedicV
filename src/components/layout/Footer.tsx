
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Home Remedies", path: "/remedies" },
        { name: "Plant Properties", path: "/plants" },
        { name: "Diet Console", path: "/diet" },
        { name: "Disease Solutions", path: "/solutions" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Philosophy", path: "/" },
        { name: "Ayurvedic Principles", path: "/" },
        { name: "History", path: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resources", path: "/resources" },
        { name: "Articles", path: "/articles" },
        { name: "References", path: "/references" },
      ],
    },
  ];

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-foreground">e-Ayurvedic</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover the ancient wisdom of Ayurveda, adapted for modern wellness. Balance your doshas and nurture your body naturally.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-medium text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Student Info - Made more prominent */}
        <div className="border-t border-border mt-12 pt-6 mb-4">
          <div className="text-center">
            <p className="font-medium text-primary text-base">
              Developed by: <span className="font-semibold">Vijayalakshmi.S</span> | 2nd year MCA | Roll No: 311423622056
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} e-Ayurvedic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
