import logo from '../../assets/images/common/sadhisha-half-logo.jpg'

import innovation from '../images/about/about us/innovation.jpg'
import Sustainability from '../images/about/about us/sustainabilty.jpg'
import Integrity from '../images/about/about us/integrity.jpg'
import ClientCentric from '../images/about/about us/client-centric.jpg'

import AuroLogo from '../../assets/images/common/AURO ARCHITECTS/1.png';
import SadhishaConstructionLogo from '../../assets/images/common/SADHISHA CONSTRUCTION/1.png';
  import SadhishaHomesLogo from '../../assets/images/common/SADHISHA LOGO 1/1.png';
 
 const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and design thinking to deliver solutions that are creative, future-focused, and distinctly impactful.",
    image: innovation
  },
  {
    title: "Sustainability",
    description:
      "We prioritize eco-friendly practices in every project, ensuring minimal environmental impact while promoting long-term resilience and responsible development.",
    image: Sustainability
  },
  {
    title: "Integrity",
    description:
      "We build lasting relationships rooted in trust, transparency, and ethical conduct—upholding the highest standards in everything we do.",
   image: Integrity
  },
  {
    title: "Client-Centric",
    description:
      "Your vision is our mission. We work hand-in-hand with every client to bring their ideas to life through thoughtful collaboration and personalized service.",
    image: ClientCentric
  }
];

const dataStats = [
  { label: 'Years Experience', value: 30, suffix: '+' },
  { label: 'Projects Executed', value: 300, suffix: '+' },
  { label: 'Villas Designed', value: 3000, suffix: '+' },
  { label: 'Plots Developed', value: 10000, suffix: '+' }
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


export default {
    coreValues,
    dataStats,
    affiliatesData
}