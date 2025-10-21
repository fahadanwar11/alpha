import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurPartners = () => {
  //   const fadeInUp = {
  //     initial: { opacity: 0, y: 20 },
  //     whileInView: { opacity: 1, y: 0 },
  //     viewport: { once: true },
  //     transition: { duration: 0.6 },
  //   };

  const partners = [
    {
      logo: "/partners/analyticon.webp",
      name: "Analyticon",
      weblink: "https://www.analyticon-diagnostics.com/en",
      text: "ANALYTICON BIOTECHNOLOGIES AG FOUNDED IN 1980 IS A GERMAN COMPANY THAT DEVELOPS AND PRODUCES HIGH-QUALITY REAGENTS, INSTRUMENTS, AND CONTROLS FOR URINE DIAGNOSTICS. THEY FOCUS ON PROVIDING RELIABLE AND COST-EFFECTIVE DIAGNOSTIC SOLUTIONS FOR CLINICAL LABORATORIES, WITH A STRONG EMPHASIS ON QUALITY AND PERFORMANCE. ANALYTICON DISTRIBUTES PRODUCTS TO MORE THAN 100 COUNTRIES.",
    },
    {
      logo: "/partners/weinerlab.jpeg",
      name: "Wiener Lab",
      weblink: "https://www.wiener-lab.com.ar/en-OT/",
      text: "WIENER LAB GROUP FOUNDED IN 1960 PROVIDES THE COMPLETE PICTURE FOR YOUR LAB. AS AN INTEGRATED SOLUTION PROVIDER, THEY DESIGN AND MANUFACTURE BOTH THE ADVANCED AUTOMATED ANALYZERS AND THEIR MATCHING REAGENTS FOR MULTIPLE ELEMENTS OF THE IVD SECTOR SUCH AS CLINICAL CHEMISTRY , COAGULATION ESR, ETC. THEY ARE THE LARGEST IVD MANUFACTURING GROUP IN LATIN AMERICA.",
    },
    {
      logo: "/partners/biocheck.png",
      name: "BioCheck",
      weblink: "https://www.orientgene.com/",
      text: "BIOCHECK IS A SUBSIDIARY OF ALFA SCIENTIFIC STORE FOUNDED IN 2012 IN COLLABORATION WITH ORIENT GENE CO WITH THE PRIMARY GOAL OF BECOMING THE COUNTRY’S OWN AND MOST TRUSTED RAPID TESTING DEVICE. TODAY, BIOCHECK STANDS AS A STRONG AND TRUSTED NAME THANKS TO THE DEDICATION OF OUR TEAM AND OUR CUSTOMERS UNWAVERING SUPPORT.",
    },
    {
      logo: "/partners/bioscien.png",
      name: "Arena Bioscien",
      weblink: "https://arenabioscien.com/",
      text: "ARENA BIOSCIEN IS AN EGYPTION IVD MANUFACTURER PROVIDING HIGHQUALITY, READY-TO-USE CELL CULTURE MEDIA, SERA, REAGENTS, AND 3D CELL CULTURE PRODUCTS. THEIR PRODUCTS ARE DESIGNED FOR RESEARCHERS IN ACADEMIA AND INDUSTRY WORKING IN DRUG DISCOVERY, TOXICOLOGY, AND BASIC CELL BIOLOGY",
    },
    {
      logo: "/partners/chaoran.jpg",
      name: "Chaoran",
      weblink: "http://en.bdchaoran.com/",
      text: "CHAORAN MEDICAL INSTRUMENTS CO IS A MAJOR CHINESE MANUFACTURER OF MEDICAL AND IN VITRO DIAGNOSTIC CONSUMABLES SINCE 2009. THEIR PRIMARY PRODUCTS INCLUDE VACUUM BLOOD COLLECTION TUBES, SPECIMEN CONTAINERS, AND OTHER PLASTIC DISPOSABLE LABWARE THAT CLINICAL LABS AROUND THE WORLD TRUST TO ENSURE SAMPLE INTEGRITY FROM PATIENT TO RESULT",
    },
    // {
    //   logo: "/partners/lituo.png",
    //   name: "Lituo",
    //   weblink: "http://www.steellex.com/",
    // },
    // {
    //   logo: "/partners/steellex.png",
    //   name: "Steellex",
    //   weblink: "https://www.steellex.com/",
    // },
    {
      logo: "/partners/diatron.png",
      name: "Diatron",
      weblink: "https://www.diatron.com/",
      text: "DIATRON, FOUNDED OVER 30 YEARS AGO IS RECOGNIZED FOR MANUFACTURING ROBUST AND COST-EFFECTIVE HEMATOLOGY ANALYZERS AND TAILORED REAGENTS DESIGNED TO DELIVER PRECISE RESULTS, EMPOWERING DIAGNOSTIC CONFIDENCE IN LABS OF EVERY SIZE, EVERYWHERE. DIATRON PROVIDES BOTH THE INSTRUMENTS AND THE MATCHING REAGENTS & CONTROLS, MAKING THEM A COMPLETE SOLUTION FOR HEMATOLOGY TESTING IN VARIOUS LAB SETTINGS",
    },
  ];

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
              Meet Our Partners
            </h1>
            <p className="text-xl mb-8 text-white/55">
              We are proud to collaborate with industry-leading partners to
              bring you the best products and services. Our partnerships are
              built on trust, innovation, and a shared commitment to excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-primary-light mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          {/* <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet Our Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Working with world-class brands to deliver excellence
            </p>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // whileHover={{ scale: 1.05 }}
              >
                <Card className="border-2  transition-all duration-300">
                  <CardContent className="p-8 flex flex-col gap-4 items-center justify-center h-fit">
                    <div className="h-20 w-full flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-20 max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary text-center">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-primary h-[200px] overflow-y-auto">
                      {partner.text}
                    </p>
                    <Link to={partner.weblink} target="_blank" rel="noreferrer">
                      <Button variant="link" className="mt-4">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
