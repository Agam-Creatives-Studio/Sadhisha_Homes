import AuroLogo from '../../assets/images/common/AURO ARCHITECTS/1.png';
import SadhishaConstructionLogo from '../../assets/images/common/SADHISHA CONSTRUCTION/1.png';
  import SadhishaHomesLogo from '../../assets/images/common/SADHISHA LOGO 1/1.png';

import logo from '../images/common/sadhisha-half-logo.jpg'

import pillar1 from '../images/home/row-1-column-1.jpg'
import pillar2 from '../images/home/row-1-column-2.jpg'
import pillar3 from '../images/home/row-1-column-3.jpg'
import pillar4 from '../images/home/row-1-column-4.jpg'

import building from '../images/home/builig black and white.jpg';

import Acquisition from '../images/home/acquisattion.jpg';
import audit from '../images/home/audit.jpg';
import clientRelation from '../images/home/client-relation.jpg';
import construction from '../images/home/construction.jpg';
import design from '../images/home/design.jpg';
import development from '../images/home/development.jpg';
import finance from '../images/home/finance.jpg';
import legal from '../images/home/legal.jpg';
import sales from '../images/home/sales.jpg';
import marketing from '../images/home/marketing.jpg';

const dataStats = [
  { label: 'Years Experience', value: 30, suffix: '+' },
  { label: 'Projects Executed', value: 300, suffix: '+' },
  { label: 'Villas Designed', value: 3000, suffix: '+' },
  { label: 'Plots Developed', value: 10000, suffix: '+' }
];


import { FaComments, FaDraftingCompass, FaTools, FaHome } from 'react-icons/fa';


const serviceCategories = [
  {
    title: "Architectural Design",
    image: logo,
    services: [
      "Conceptual Design",
      "Design Development",
      "Interior Design",
      "Urban Planning"
    ]
  },
  {
    title: "Construction Technologies",
    image: logo,
    services: [
      "Building Information Modeling (BIM)",
      "Smart Building Technologies",
      "Construction Robotics",
      "Prefabrication and Modular Construction"
    ]
  },
  {
    title: "Project Management",
    image: logo,
    services: [
      "Pre-Construction Services",
      "Construction Management",
      "Post-Construction Services",
      "Sustainability Consulting"
    ]
  },
  {
    title: "Sustainable Solutions",
    image: logo,
    services: [
      "Green Building Design",
      "Energy-Efficient Systems",
      "Waste Reduction Strategies",
      "Water Conservation"
    ]
  },
  {
    title: "Renovation & Restoration",
    image: logo,
    services: [
      "Historic Preservation",
      "Modernization Projects",
      "Adaptive Reuse"
    ]
  },
  {
    title: "Consulting Services",
    image: logo,
    services: [
      "Feasibility Studies",
      "Design Consultation",
      "Construction Audits",
      "Regulatory Compliance"
    ]
  }
];


export const pillars = [
  {
    title: "Innovation",
    description: `We embrace cutting-edge technologies and design thinking to deliver solutions that are creative, future-focused, and distinctly impactful.`,
    image: pillar1
  },
  {
    title: "Sustainability",
    description: `We prioritize eco-friendly practices in every project, ensuring minimal environmental impact while promoting long-term resilience and responsible development.`,
    image: pillar2
  },
  {
    title: "Integrity",
    description: `We build lasting relationships rooted in trust, transparency, and ethical conduct—upholding the highest standards in everything we do.`,
    image: pillar3
  },
  {
    title: "Client-centricity",
    description: `Your vision is our mission. We work hand-in-hand with every client to bring their ideas to life through thoughtful collaboration and personalized service.`,
    image: pillar4
  }
];


export const departments = [
  {
    title: "Acquisition",
    description: `We identify and secure strategic land in high-growth areas through thorough due diligence and forward-thinking planning.`,
    image:Acquisition
  },
  {
    title: "Finance",
    description: `Our finance team builds cost-efficient models that align with investment goals and ensure sustainable growth.`,
    image:finance
  },
  {
    title: "Development",
    description: `We manage end-to-end project development—ensuring timely execution, regulatory compliance, and coordination.`,
    image:development
  },
  {
    title: "Design",
    description: `Partnering with Auro Architects, we design innovative, functional, and eco-friendly spaces tailored to modern lifestyles.`,
    image:design
  },
  {
    title: "Construction",
    description: `Our on-site teams deliver quality structures using advanced engineering, smart technology, and skilled craftsmanship.`,
    image:construction
  },
  {
    title: "Legal",
    description: `We manage all legal aspects—land titles, RERA, and approvals—with full transparency and regulatory compliance.`,
    image:legal
  },
  {
    title: "Audit",
    description: `We track budgets, revenue, and performance through robust systems, ensuring accountability and data-driven decisions.`,
    image:audit
  },
  {
    title: "Sales",
    description: `We connect people to properties through transparent processes, driving value in both home sales and commercial leases.`,
    image:sales
  },
  {
    title: "Marketing",
    description: `We position each project with strong narratives, digital strategies, and targeted campaigns to boost visibility and trust.`,
    image:marketing
  },
  {
    title: "Client Relations",
    description: `From enquiry to post-sale, our team ensures smooth customer experiences built on clarity, care, and long-term trust.`,
    image:clientRelation
  },
  
];


const affiliatesData = [
  {
    name: "Auro Architects",
    description: `The creative powerhouse behind Sadhisha’s award-winning designs. Auro Architects specializes in sustainable architecture, urban planning, interior design, and project visualization, bringing form and function together with cultural sensitivity.`,
    image: AuroLogo,
    route: '/auro-architects'
  },
  {
    name: "Sadhisha Homes",
    description: `Our flagship real estate development company, known for delivering high-quality villas, apartments, and residential communities with a strong emphasis on lifestyle, comfort, and timely delivery.`,
    image: SadhishaHomesLogo,
    route: '/sadhisha-homes'
  },
  {
    name: "Sadhisha Construction Technologies",
    description: `Our advanced construction arm focused on innovation through light-gauge steel systems, prefabrication, BIM, and modular construction—ensuring speed, sustainability, and structural excellence.`,
    image: SadhishaConstructionLogo,
    route: '/sadhisha-constructions'
  }
];


export default{
    dataStats,
    serviceCategories,
    pillars,
    departments,
    affiliatesData
}
