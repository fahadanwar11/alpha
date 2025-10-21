import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const offices = [
    {
      city: "Lahore (Head Office)",
      address: "1-CD Edward Road, Lahore",
      phone: "042-37243174",
      mobile: "0321-9960800",
    },
    {
      city: "Rawalpindi",
      address: "06, 1st Floor, ABC Plaza, Commercial Market, Satellite Town",
    },
    {
      city: "Multan",
      address: "House # 412/22 Gulshan E Siddiqui Colony Chungi 1",
    },
    {
      city: "Faisalabad",
      address: "481-Saddiq Plaza, Near UBL Bank Jinnah Colony",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Alfa Scientific Store</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Leading supplier of diagnostic and medical laboratory equipment in
              Pakistan for over 40 years.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail size={16} />
              <span>info@alfascientificstore.com</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Partners", path: "/our-partners" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Main Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office) => (
                <div key={office.city} className="text-sm">
                  <h4 className="font-semibold mb-1">{office.city}</h4>
                  <p className="text-primary-foreground/80 text-xs mb-1">
                    {office.address}
                  </p>
                  {office.phone && (
                    <p className="text-primary-foreground/80 text-xs">
                      {office.phone}
                    </p>
                  )}
                  {office.mobile && (
                    <p className="text-primary-foreground/80 text-xs">
                      {office.mobile}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Alfa Scientific Store. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/80">
              Trusted partner in healthcare since 1985
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
