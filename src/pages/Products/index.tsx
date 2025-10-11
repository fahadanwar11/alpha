import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Activity, Beaker, Zap, FlaskConical, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import microscopeImg from "@/assets/product-microscope.jpg";
import analyzerImg from "@/assets/product-analyzer.jpg";
import centrifugeImg from "@/assets/product-centrifuge.jpg";
import testingImg from "@/assets/product-testing.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laboratory Microscopes",
      category: "Diagnostic Equipment",
      description: "High-precision microscopes for detailed cellular analysis and diagnostics",
      image: microscopeImg,
      icon: Microscope,
    },
    {
      id: 2,
      name: "Hematology Analyzers",
      category: "Blood Analysis",
      description: "Advanced analyzers for comprehensive blood cell counting and analysis",
      image: analyzerImg,
      icon: Activity,
    },
    {
      id: 3,
      name: "Laboratory Centrifuges",
      category: "Sample Processing",
      description: "High-speed centrifuges for efficient sample separation and processing",
      image: centrifugeImg,
      icon: Zap,
    },
    {
      id: 4,
      name: "Chemistry Analyzers",
      category: "Clinical Chemistry",
      description: "Automated systems for biochemical analysis and diagnostic testing",
      image: testingImg,
      icon: Beaker,
    },
    {
      id: 5,
      name: "Coagulation Systems",
      category: "Hemostasis Testing",
      description: "Precise instruments for blood coagulation and clotting factor analysis",
      image: analyzerImg,
      icon: Heart,
    },
    {
      id: 6,
      name: "Reagents & Supplies",
      category: "Laboratory Consumables",
      description: "High-quality reagents and consumables for accurate test results",
      image: testingImg,
      icon: FlaskConical,
    },
  ];

  const categories = [
    "All Products",
    "Diagnostic Equipment",
    "Blood Analysis",
    "Sample Processing",
    "Clinical Chemistry",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white/55 mb-8">
              State-of-the-art medical and laboratory equipment from world-renowned manufacturers
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-primary-light mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-medium)] group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-primary-foreground">
                        <product.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link to="/contact">Request Information</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality equipment from trusted global manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Certified Quality",
                description: "All products meet international standards",
              },
              {
                title: "Technical Support",
                description: "Expert assistance and training available",
              },
              {
                title: "Warranty Coverage",
                description: "Comprehensive warranty on all equipment",
              },
              {
                title: "Fast Delivery",
                description: "Efficient delivery across Pakistan",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
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
            <h2 className="text-4xl md:text-5xl text-primary font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Our team is ready to help you find the perfect equipment for your laboratory
            </p>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[250px] text-lg"
              >
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
