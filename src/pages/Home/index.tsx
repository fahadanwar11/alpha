import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
//   const handleToastDemo = () => {
//     toast.success("Welcome to Alfa Scientific Store!", {
//       description: "Your trusted partner in medical equipment since 1988.",
//       duration: 4000,
//     });
//   };
  const features = [
    {
      icon: Award,
      title: "Over 35 Years of Expertise",
      description: "Trusted partner in healthcare since 1988",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Offices in major cities across Pakistan",
    },
    {
      icon: Clock,
      title: "Quick Support",
      description: "Rapid customer and technical service",
    },
  ];

  const partners = [
    "Analyticon",
    "Wiener Lab",
    "Healstone",
    "Arena Bioscien",
    "Hebei Choaran",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical Equipment"
            // dark the image
            className="w-full h-full object-cover brightness-70"
          />
          <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading Medical Equipment
              <br />
              <span className="bg-clip-text">
                Solutions in Pakistan
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trusted supplier of diagnostic and medical laboratory equipment
              for over 35 years
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/products">
                <Button variant="hero" size="lg" className="min-w-[200px]">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  Contact Us
                </Button>
              </Link>
              {/* <Button 
                onClick={handleToastDemo} 
                variant="outline" 
                size="lg" 
                className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Try Toast Demo
              </Button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Alfa Scientific Store, our mission is to be the all-in-one
              premier provider of laboratory solutions, enhancing healthcare
              through reliable and efficient diagnostic technologies. We are
              committed to improving our customers' experience with
              state-of-the-art equipment and exceptional technical support.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in medical equipment and diagnostic
              solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-medium)] group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-[var(--shadow-soft)]"
                    >
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet Our Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Working with world-class brands to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-8 flex items-center justify-center min-h-[120px]">
                    <h3 className="text-lg font-semibold text-primary text-center">
                      {partner}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to learn more about our products and services
            </p>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[250px] text-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
