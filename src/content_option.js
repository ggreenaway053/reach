import cnaz from "./assets/images/portfolio/cnaz-portfolio-img.jpg";
import lb from "./assets/images/portfolio/lb-portfolio-img.jpg";
import wni from "./assets/images/portfolio/wni-portfolio-img.jpg";
import krw from "./assets/images/portfolio/krw-portfolio-img.jpg";
import wwh from "./assets/images/portfolio/wwh-portfolio-img.jpg";

import { Link } from "react-router-dom";

const logotext = "GARETH";
const meta = {
  title: "Gareth Greenaway",
  description: "Hi! I'm Gareth, a full stack devloper from NI.",
};

const introdata = {
  title: "Hello! 👋",
  animated: {
    first: "I'm Gareth"
  },
  description: "Highly motivated, dedicated and design-driven."
};

const about = {
  main: <h2 className="mb-4 display-6">I specialise in <span className="reveal">Wordpress</span> and <span className="reveal">Shopify</span> websites & love bringing ideas from design to life on the web. With over 7 years web experience & several projects returning <span className="reveal">£ millions in revenue</span>; <Link to="/contact" className="d-inline-block d-lg-inline">let's talk</Link>.</h2>
}

const dataportfolio = [
  {
    img: wwh,
    title: "Worship with Hannah",
    type: "Side Project",
    who: "This was a small side project I decided to work on, to help hone my skills in react. It is a lyric finder, using the Genius API. It uses cors-anywhere to fix any CORS issues & genius-lyrics-api to grab song lyrics for a specific song. I custom coded fetch requests using useState and useEffect to update areas of the site based on the input of the user. I've also made it open source, so feel free to fork it on github.",
    tech: <ul><li>React.js</li><li>npm</li><li>Javascript</li><li>Bootstrap 5</li><li>Figma</li></ul>,
    link: "https://worshipwithhannah.garethgreenaway.co.uk",
  },
  {
    img: lb,
    title: "Linenbundle",
    type: "Sole Web Developer | Current full time role",
    who: "Linenbundle are the EU’s fastest growing luxury bed linen brand. They started around 2017 and quickly became popular in the UK and Ireland. Since then they have branched out into numerous EU countries and continue to grow today.",
    tech: <ul><li>Shopify</li><li>Liquid</li><li>HTML</li><li>SCSS</li><li>Bootstrap 5</li><li>Javascript</li><li>jQuery</li><li>PHP</li><li>Figma</li><li>Wordpress</li><li>npm</li><li>Shopify APIs</li></ul>,
    link: "https://www.linenbundle.com",
  },
  {
    img: cnaz,
    title: "Carrick Nazarene",
    type: "Volunteer Freelance Project",
    who: "Carrick Nazarene is a local church where I am a member & volunteer in a few different ministries. We are a Christian church, with the overarching Nazarene church being founded back in 1908.",
    tech: <ul><li>Wordpress</li><li>HTML</li><li>SCSS</li><li>Bootstrap 5</li><li>Javascript</li><li>jQuery</li><li>Figma</li><li>Google APIs</li><li>npm</li></ul>,
    link: "https://carricknazarene.co.uk",
  },
  {
    img: wni,
    title: "WebsiteNI",
    type: "Front End Developer",
    who: "WebsiteNI are a Web Development Agency based in Dungannon, Northern Ireland. They provide clients with fully responsive, editable WordPress websites. I worked at WebsiteNI for around 18 months, leaving to join Linenbundle in February 2022.",
    tech: <ul><li>Wordpress</li><li>HTML</li><li>SCSS</li><li>Foundation</li><li>Javascript</li><li>jQuery</li><li>PHP</li><li>npm</li><li>Magento 2</li></ul>,
    link: "https://websiteni.com",
  },
  {
    img: krw,
    title: "Keylite Roof Windows",
    type: "Web Designer/Developer",
    who: "Keylite Roof Windows are Europes fastest growing roof window manufacturer. They are one of the top 3 players between Velux, themsevles and Fakro. Keylite are part of the Keystone Group, based in Cookstown. I worked for Keylite between 2017 & 2020.",
    tech: <ul><li>Wordpress</li><li>HTML</li><li>CSS</li><li>PHP</li><li>Javascript</li><li>jQuery</li><li>PHP</li><li>MySQL</li></ul>,
    link: "https://www.keyliteroofwindows.com",
  }
];

const contactConfig = {
  YOUR_EMAIL: "hi@garethgreenaway.co.uk",
  description: "I'd love to hear from you, whether it's just for a chat or to talk work!",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_y93lhhf",
  YOUR_TEMPLATE_ID: "template_kryxvqt",
  YOUR_USER_ID: "PusWyu9H2PzG1p2Dt",
};

const socials = {
  github: "https://github.com/ggreenaway053",
  youtube: "https://www.youtube.com/channel/UCWxtdcPeLmvSku67D6FT_wA",
  linkedin: "https://www.linkedin.com/in/gareth-greenaway-6a5389141/"
};
export {
  meta,
  dataportfolio,
  introdata,
  contactConfig,
  socials,
  logotext,
  about
};