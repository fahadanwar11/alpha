import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award,
  Building,
  Globe,
  Heart,
  Target,
  Zap,
  Clock,
  CheckCircle,
  Info,
} from "lucide-react";
import aboutTeamImg from "../../assets/about-team.jpg";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // faster child load
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const stats = [
    { number: "40+", label: "Years of Excellence", icon: Clock },
    { number: "8", label: "Global Partners", icon: Globe },
    { number: "500+", label: "Products", icon: Target },
    { number: "4", label: "Offices", icon: Building },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We maintain the highest standards with certified products from trusted manufacturers.",
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description:
        "Continuously adopting cutting-edge medical technologies and equipment.",
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description:
        "Consistent supply chain and dependable service for over three decades.",
    },
    {
      icon: Heart,
      title: "Compliance",
      description:
        "Every product we supply directly impacts patient care and medical outcomes.",
    },
    {
      icon: Info,
      title: "Commitment to Service",
      description: "dedicated to reliable and responsive support.",
    },
  ];

  // const milestones = [
  //   {
  //     year: "1985",
  //     title: "Foundation",
  //     description: "Started as a small medical equipment supplier in Lahore",
  //   },
  //   {
  //     year: "1995",
  //     title: "First Expansion",
  //     description: "Opened our second office in Rawalpindi",
  //   },
  //   {
  //     year: "2005",
  //     title: "Nationwide Reach",
  //     description:
  //       "Expanded to Multan and Faisalabad, serving all major cities",
  //   },
  //   {
  //     year: "2015",
  //     title: "Technology Integration",
  //     description:
  //       "Introduced advanced diagnostic equipment and digital solutions",
  //   },
  //   {
  //     year: "2023",
  //     title: "Digital Transformation",
  //     description: "Launched online platform for seamless customer experience",
  //   },
  // ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 overflow-hidden bg-primary"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-5 text-white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Pioneering Healthcare
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-white/55 leading-relaxed"
            >
              For over 40 years, Alfa Scientific Store has empowered Pakistan’s
              healthcare sector with advanced diagnostic solutions.
            </motion.p>
            {/* <motion.div
              variants={itemVariants}
              className="inline-block p-1 rounded-full bg-gradient-primary"
            >
              <div className="bg-background rounded-full px-8 py-3">
                <span className="text-primary font-semibold">
                  Trusted Since 1985
                </span>
              </div>
            </motion.div> */}
            <div className="w-24 h-1 bg-gradient-to-r from-white to-primary-light mx-auto rounded-full" />
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4, // shorter duration
                    ease: "easeOut",
                  }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A journey of dedication, innovation, and unwavering commitment
                to healthcare excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="prose prose-lg text-foreground">
                  <p>
                    Founded in 1985, our Founded in 1985, our company began with
                    a clear purpose — to make reliable diagnostic and medical
                    equipment accessible to healthcare providers across
                    Pakistan. Starting as a small operation in Lahore, we have
                    steadily grown to become a trusted supplier for hospitals,
                    clinics, and laboratories nationwide.
                  </p>
                  <p>
                    Our work is guided by the belief that quality healthcare
                    relies on accurate and dependable diagnostic tools. Over the
                    years, we have built partnerships with reputable
                    manufacturers and developed a distribution network that
                    helps deliver essential products where they are needed most.
                  </p>
                  <p>
                    Today, we continue to serve the healthcare community with
                    the same values that shaped our beginnings — commitment to
                    quality, timely service, and support for better patient
                    care.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-xl bg-background p-8 flex items-center justify-center">
                    <img
                      src={aboutTeamImg}
                      alt="Our Team"
                      className="w-full h-full object-cover rounded-lg shadow-glow"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 bg-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every
              relationship we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      {/*
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
         <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that shaped our growth and strengthened our commitment
              to healthcare
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary transform md:-translate-x-0.5" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot 
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow" />

                  {/* Content
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-background rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> 
      </motion.section>
*/}
      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-primary relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Ready to Partner with Excellence?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl mb-8 opacity-90"
            >
              Join thousands of healthcare professionals who trust Alfa
              Scientific Store for their diagnostic equipment needs.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-medium hover:shadow-glow"
                variant={"hero"}
              >
                Explore Products
              </Button>
              <Button
                variant={"outline"}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
