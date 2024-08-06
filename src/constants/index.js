import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";

  import {topLogo, pageLogo, android17_Elden, androidBackground, androidBackground2, notifIcon, mpouli, lembe, pasta, a, b, c, d, e, f, g, h, i, j} from "../assets/myImages";
  
  import {icon1, icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9, backG1, backG2,backG3,backG4,backG5,backG6,backG7,backG8, backG9} from "../assets/features";

  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
    ,
    {
      id: "6",
      title: "About us",
      url: "#aboutus",
      onlyMobile: false,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [a, h, c, i, e];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];

  export const android17Services = [
    "Software Development",
    "Languages: C, C++, Python, Java, JS",
    "Project Management Services",
    "Web Development Services",
    "Solution Design",
    "Test Development/Operator",
    "Flexibility",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Unleash your curiosity with our unique feature! This mystical tool allows you to engage in a conversation with a wise and ancient dragon: Shenron.",
      backgroundUrl: "./src/assets/features/featBg1.svg",
      iconUrl: icon1,
      imageUrl: backG1,
    },
    {
      id: "1",
      title: "Engaging Storyline",
      text: "A compelling narrative that immerses the user in a futuristic world where they need to battle cyborgs. Go to Story Telling section to discover your story!",
      backgroundUrl: "./src/assets/features/featBg2.svg",
      iconUrl: icon2,
      imageUrl: backG2,
    },
    {
      id: "2",
      title: "Battle Mechanics",
      text: "Real-time combat with intuitive controls for attacking, defending, and using special abilities.\n\rCombo systems and power-ups and more",
      backgroundUrl: "./src/assets/features/featBg3.svg",
      iconUrl: icon3,
      imageUrl: backG3,
    },
    {
      id: "3",
      title: "Cyborg Opponents",
      text: "Boss battles with larger, more challenging cyborgs that require strategic planning. \rDisplay your battle IQ",
      backgroundUrl: "./src/assets/features/featBg4.svg",
      iconUrl: icon4,
      imageUrl: backG4,
    },
    {
      id: "4",
      title: "Augmented Reality (AR)",
      text: "AR integration to allow users to fight cyborgs in their real-world environment and FUN environments.",
      backgroundUrl: "./src/assets/features/featBg5.svg",
      iconUrl: icon5,
      imageUrl: backG5,
    },
    {
      id: "5",
      title: "Multiplayer Modes",
      text: "Cooperative multiplayer where users can team up to fight cyborgs together. Call your friends, I will whoop your ass!",
      backgroundUrl: "./src/assets/features/featBg6.svg",
      iconUrl: icon6,
      imageUrl: backG6,
    },
    {
      id: "6",
      title: "Social Features",
      text: "Social media integration for sharing achievements and inviting friends to play.",
      backgroundUrl: "./src/assets/features/featBg7.svg",
      iconUrl: icon7,
      imageUrl: backG7,
    },
    {
      id: "7",
      title: "In-App Purchases and Monetization",
      text: "Options for users to purchase in-game currency, items, and premium content.",
      backgroundUrl: "./src/assets/features/featBg8.svg",
      iconUrl: icon8,
      imageUrl: backG8,
    },
    {
      id: "8",
      title: "Just having fun",
      text: "Enjoy your day my friend, time flies.",
      backgroundUrl: "./src/assets/features/featBg9.svg",
      iconUrl: icon9,
      imageUrl: backG9,
    },
    
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];

  export const gradientColors = [
    'from-cyan-500 via-red-500 to-indigo-200',
    'from-green-400 via-blue-500 to-indigo-200',
    'from-yellow-400 via-orange-500 to-indigo-200',
    'from-green-500 via-blue-500 to-indigo-200',
    'from-red-400 via-purple-500 to-indigo-200',
    'from-green-400 via-blue-500 to-indigo-200',
    'from-purple-500 via-cyan-500 to-indigo-200',
    'from-green-400 via-blue-500 to-indigo-200',
    'from-indigo-400 via-purple-500 to-indigo-200',
  ];

  import { svg16, svg17, svg18, svg19 } from '../assets/myServices'

  export const imageServices = [
    { src: svg17, text: 'Multiplayer Exp' },
    { src: svg18, text: 'Online Game Design' },
    { src: svg19, text: 'Advanced Design' },
    { src: svg16, text: 'Futuristic Design' },
  ];

  import {  img1, img3, img4, img8, img9, img10, img11, img12 } from '../assets/screenshots';

  export const screenshots = [
    { id: 1, src: img11, alt: 'Screenshot 12' },
    { id: 2, src: img1, alt: 'Screenshot 2' },
    { id: 4, src: img3, alt: 'Screenshot 4' },
    { id: 5, src: img4, alt: 'Screenshot 5' },
    { id: 9, src: img8, alt: 'Screenshot 9' },
    { id: 10, src: img9, alt: 'Screenshot 10' },
    { id: 11, src: img10, alt: 'Screenshot 11' },
    { id: 13, src: img12, alt: 'Screenshot 13' },
  ];
  
  export const plans = [
    {
      plan: 'Basic',
      price: '19',
      features: [
        'Unlimited Access',
        '24/7 Support',
        'Advanced Analytics',
      ],
      additionalFeatures: [
        'Customizable Settings',
        'High-Definition Streaming',
        'Multi-Device Sync',
        'Exclusive Content',
        'Priority Support',
        'Extended Storage',
      ],
      cta: 'Get Started',
      icon: '🌟',
      color: 'text-red-400',
    },
    {
      plan: 'Gold',
      price: '49',
      features: [
        'Unlimited Access',
        '24/7 Support',
        'Advanced Analytics',
        'Customizable Settings',
      ],
      additionalFeatures: [
        'High-Definition Streaming',
        'Multi-Device Sync',
        'Exclusive Content',
        'Priority Support',
        'Extended Storage',
      ],
      cta: 'Get Started',
      icon: '🏅',
      color: 'text-yellow-400',
    },
    {
      plan: 'Premium',
      price: '99',
      features: [
        'Unlimited Access',
        '24/7 Support',
        'Advanced Analytics',
        'Customizable Settings',
        'High-Definition Streaming',
        'Multi-Device Sync',
        'Exclusive Content',
      ],
      additionalFeatures: [
        'Priority Support',
        'Extended Storage',
      ],
      cta: 'Get Started',
      icon: '🎖️',
      color: 'text-green-400',
    },
    {
      plan: 'Premium Deluxe',
      price: '149',
      features: [
        'Unlimited Access',
        '24/7 Support',
        'Advanced Analytics',
        'Customizable Settings',
        'High-Definition Streaming',
        'Multi-Device Sync',
        'Exclusive Content',
        'Priority Support',
        'Extended Storage',
      ],
      additionalFeatures: [],
      cta: 'Contact Us',
      icon: '👑',
      color: 'text-cyan-400',
    }
  ];

  import { myRoadmap0, myRoadmap1, myRoadmap2, myRoadmap3, myRoadmap4, myRoadmap5, myRoadmap6, myRoadmap7 } from "../assets/myRoacmap";

  export const myRoadmap = [
    {
      id: "0",
      title: "AI-Powered Battle Assistant",
      text: "Implement an AI assistant to provide strategic advice during battles, enhancing player decision-making and tactics.",
      date: "October 2024",
      status: "done",
      imageUrl: myRoadmap0,
      colorful: true,
    },
    {
      id: "1",
      title: "Co-Op Multiplayer Missions",
      text: "Introduce cooperative multiplayer missions, allowing players to team up with friends and complete challenges together.",
      date: "January 2025",
      status: "progress",
      imageUrl: myRoadmap1,
    },
    {
      id: "2",
      title: "Character Customization",
      text: "Enable extensive character customization options, including outfits, accessories, and abilities, to personalize the gameplay experience.",
      date: "May 2025",
      status: "done",
      imageUrl: myRoadmap2,
    },
    {
      id: "3",
      title: "Dynamic Weather System",
      text: "Add a dynamic weather system that impacts gameplay, creating varying conditions and challenges in different missions.",
      date: "August 2025",
      status: "progress",
      imageUrl: myRoadmap3,
    },
    {
      id: "4",
      title: "In-Game Voice Chat",
      text: "Implement in-game voice chat functionality to enhance communication and coordination among team members.",
      date: "December 2025",
      status: "planned",
      imageUrl: myRoadmap4,
    },
    {
      id: "5",
      title: "Leaderboard and Ranking System",
      text: "Introduce a global leaderboard and ranking system to foster competitive gameplay and reward top players.",
      date: "Febuary 2026",
      status: "planned",
      imageUrl: myRoadmap5,
    },
    {
      id: "6",
      title: "Expanded Storyline",
      text: "Release new chapters and missions to expand the storyline, providing players with fresh content and deeper narrative experiences.",
      date: "July 2026",
      status: "planned",
      imageUrl: myRoadmap6,
    },
    {
      id: "7",
      title: "Virtual Reality (VR) Support",
      text: "Develop VR support to offer an immersive gameplay experience, allowing players to step into the world of Android-17.",
      date: "December 2026",
      status: "planned",
      imageUrl: myRoadmap7,
    },
  ];
  
