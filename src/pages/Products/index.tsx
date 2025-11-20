import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import { useState } from "react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-28">
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
      <section className="py-8 bg-background sticky top-24 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
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

      {/* Products List (Accordion) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${product.id}`}
                  className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-6 text-left w-full">
                      <div className="hidden sm:block w-24 h-24 rounded-md overflow-hidden flex-shrink-0 border border-border">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <product.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="space-y-6">
                      <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                        <p className="text-foreground/80 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-primary rounded-full" />
                          Available Models
                        </h4>
                        <div className="rounded-md border border-border overflow-hidden">
                          <Table>
                            <TableHeader className="bg-muted/50">
                              <TableRow>
                                <TableHead className="w-[150px]">Model</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Specifications</TableHead>
                                <TableHead className="text-right">Catalog No.</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {product.subProducts.map((sub) => (
                                <TableRow key={sub.catalogNo}>
                                  <TableCell className="font-medium text-primary">
                                    {sub.model}
                                  </TableCell>
                                  <TableCell>{sub.description}</TableCell>
                                  <TableCell>{sub.specifications}</TableCell>
                                  <TableCell className="text-right font-mono text-xs">
                                    {sub.catalogNo}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <Button asChild>
                          <Link to="/contact">Request Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
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
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
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

