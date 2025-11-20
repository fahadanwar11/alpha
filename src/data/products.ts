import { Microscope, Activity, Beaker, Zap, FlaskConical, Heart, type LucideIcon } from "lucide-react";
import microscopeImg from "@/assets/product-microscope.jpg";
import analyzerImg from "@/assets/product-analyzer.jpg";
import centrifugeImg from "@/assets/product-centrifuge.jpg";
import testingImg from "@/assets/product-testing.jpg";

export interface SubProduct {
  model: string;
  description: string;
  specifications: string;
  catalogNo: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  subProducts: SubProduct[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laboratory Microscopes",
    category: "Diagnostic Equipment",
    description: "High-precision microscopes for detailed cellular analysis and diagnostics",
    image: microscopeImg,
    icon: Microscope,
    subProducts: [
      {
        model: "CX-2000",
        description: "Binocular Biological Microscope",
        specifications: "40x-1000x Magnification, LED Illumination",
        catalogNo: "LM-001",
      },
      {
        model: "CX-3000",
        description: "Trinocular Research Microscope",
        specifications: "Infinity Corrected Optics, 5W LED",
        catalogNo: "LM-002",
      },
      {
        model: "stereo-X",
        description: "Stereo Zoom Microscope",
        specifications: "7x-45x Zoom Range, Dual Illumination",
        catalogNo: "LM-003",
      },
    ],
  },
  {
    id: 2,
    name: "Hematology Analyzers",
    category: "Blood Analysis",
    description: "Advanced analyzers for comprehensive blood cell counting and analysis",
    image: analyzerImg,
    icon: Activity,
    subProducts: [
      {
        model: "Hema-3",
        description: "3-Part Diff Hematology Analyzer",
        specifications: "60 tests/hour, 21 parameters",
        catalogNo: "HA-001",
      },
      {
        model: "Hema-5",
        description: "5-Part Diff Hematology Analyzer",
        specifications: "60 tests/hour, 29 parameters, Laser Scatter",
        catalogNo: "HA-002",
      },
    ],
  },
  {
    id: 3,
    name: "Laboratory Centrifuges",
    category: "Sample Processing",
    description: "High-speed centrifuges for efficient sample separation and processing",
    image: centrifugeImg,
    icon: Zap,
    subProducts: [
      {
        model: "Spin-12",
        description: "High Speed Micro Centrifuge",
        specifications: "15000 RPM, 12x1.5ml Rotor",
        catalogNo: "LC-001",
      },
      {
        model: "Spin-24",
        description: "Clinical Centrifuge",
        specifications: "4000 RPM, 8x15ml Rotor",
        catalogNo: "LC-002",
      },
    ],
  },
  {
    id: 4,
    name: "Chemistry Analyzers",
    category: "Clinical Chemistry",
    description: "Automated systems for biochemical analysis and diagnostic testing",
    image: testingImg,
    icon: Beaker,
    subProducts: [
      {
        model: "Chem-100",
        description: "Semi-Auto Chemistry Analyzer",
        specifications: "Flow cell/Cuvette mode, Touch screen",
        catalogNo: "CA-001",
      },
      {
        model: "Chem-200",
        description: "Fully Auto Chemistry Analyzer",
        specifications: "200 tests/hour, Random Access",
        catalogNo: "CA-002",
      },
    ],
  },
  {
    id: 5,
    name: "Coagulation Systems",
    category: "Hemostasis Testing",
    description: "Precise instruments for blood coagulation and clotting factor analysis",
    image: analyzerImg,
    icon: Heart,
    subProducts: [
      {
        model: "Coag-1",
        description: "Single Channel Coagulometer",
        specifications: "PT, APTT, TT, FIB",
        catalogNo: "CS-001",
      },
      {
        model: "Coag-4",
        description: "4-Channel Coagulometer",
        specifications: "Built-in Printer, 4 independent channels",
        catalogNo: "CS-002",
      },
    ],
  },
  {
    id: 6,
    name: "Reagents & Supplies",
    category: "Laboratory Consumables",
    description: "High-quality reagents and consumables for accurate test results",
    image: testingImg,
    icon: FlaskConical,
    subProducts: [
      {
        model: "Diluent-20L",
        description: "Hematology Diluent",
        specifications: "20L Pack, Compatible with Hema-3/5",
        catalogNo: "RS-001",
      },
      {
        model: "Lyse-500ml",
        description: "Hematology Lyse",
        specifications: "500ml Bottle, Cyanide-free",
        catalogNo: "RS-002",
      },
    ],
  },
];

export const categories = [
  "All Products",
  "Diagnostic Equipment",
  "Blood Analysis",
  "Sample Processing",
  "Clinical Chemistry",
];
