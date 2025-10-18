import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, TabletSmartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const offices = [
    {
      city: "Lahore",
      label: "Head Office",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-white/55">
              Have questions or remarks? Just write us a message and we'll get back to you shortly
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-primary-light mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "info@alfascientificstore.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "042-37243174",
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: "Mon-Sat: 10AM - 7PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-medium)]">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center shadow-[var(--shadow-soft)]"
                    >
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <Card className="border-2 shadow-[var(--shadow-medium)]">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="border-2 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number</Label>
                      <Input
                        id="contact"
                        name="contact"
                        type="tel"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Office Locations
              </h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary mb-1">
                              {office.city}
                              {office.label && (
                                <span className="ml-2 text-sm font-normal text-muted-foreground">
                                  ({office.label})
                                </span>
                              )}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {office.address}
                            </p>
                            {office.phone && (
                              <p className="text-primary font-medium">
                               <span className="flex justify-start items-center gap-2"><Phone className="w-4 h-4"/> {office.phone}</span> 
                              </p>
                            )}
                            {office.mobile && (
                              <p className="text-primary font-medium">
                               <span className="flex justify-start items-center gap-2"><TabletSmartphone className="w-4 h-4"/> {office.mobile}</span> 
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Visit Our Nearest Office
            </h2>
            <p className="text-xl text-primary">
              We're here to help you with all your medical equipment needs
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
