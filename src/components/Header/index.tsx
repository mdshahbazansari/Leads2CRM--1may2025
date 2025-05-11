import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };



  const menuData = [
    {
      menuName: "Expertise",
      items: [
        {
          title: "Enterprise Resource Planning - ERP-[Zoho]",
          icon: "/images/Maiprosoft-menu/Expertise/ERP.svg",
          subtitle: [
            {
              text: "Zoho",
              url: "/zoho",
              contentKey: "api",
            },
            // {
            //   text: "Zoho CRM",
            //   url: "/zoho-crm",
            //   contentKey: "crm",
            // },

            // {
            //   text: "Zoho Creator",
            //   url: "/zoho-creator",
            //   contentKey: "appBuilder",
            // },
            // {
            //   text: "Zoho Books",
            //   url: "/zoho-books",
            //   contentKey: "accounting",
            // },
            // {
            //   text: "Zoho People",
            //   url: "/zoho-people",
            //   contentKey: "hr",
            // },
            // {
            //   text: "Zoho Inventory",
            //   url: "/zoho-inventory",
            //   contentKey: "inventoryManagement",
            // },
            // {
            //   text: "Zoho Projects",
            //   url: "/zoho-projects",
            //   contentKey: "projectManagement",
            // },
            // {
            //   text: "Zoho Desk",
            //   url: "/zoho-desk",
            //   contentKey: "customerSupport",
            // },
            // {
            //   text: "Zoho Analytics",
            //   url: "/zoho-analytics",
            //   contentKey: "businessIntelligence",
            // },
            // {
            //   text: "Zoho SalesIQ",
            //   url: "/zoho-salesiq",
            //   contentKey: "liveChat",
            // },
            // {
            //   text: "Zoho Commerce",
            //   url: "/zoho-commerce",
            //   contentKey: "eCommerce",
            // },
            {
              text: "Odoo",
              url: "https://example.com/operations-management",
              contentKey: "cloud",
            },
            {
              text: "Salesforce",
              url: "https://example.com/financial-management",
              contentKey: "financialManagement",
            },
            // {
            //   text: "SAP",
            //   url: "https://example.com/financial-management",
            //   contentKey: "financialManagement",
            // },
            // {
            //   text: "Oracle",
            //   url: "https://example.com/financial-management",
            //   contentKey: "financialManagement",
            // },
          ],
        },
        {
          title: "Digital Transformation",
          icon: "/images/Maiprosoft-menu/Expertise/CSD.svg",
          subtitle: [
          
            {
              text: "Cloud",
              url: "https://example.com/connectors-workflows",
              contentKey: "connectorsWorkflows",
            },
            {
              text: "IoT",
              url: "https://example.com/connectors-workflows",
              contentKey: "connectorsWorkflows",
            },
            {
              text: "Mobile App Development",
              url: "https://example.com/connectors-workflows",
              contentKey: "connectorsWorkflows",
            },
            
            {
              text: "AI & ML",
              url: "https://example.com/connectors-workflows",
              contentKey: "connectorsWorkflows",
            },
          ],
        },
      ],
    },
    {
      menuName: "Services",
      items: [
        {
          title: "Our Services",
          icon: "/images/Maiprosoft-menu/Services/Core Services.svg",
          subtitle: [
            {
              "text": "Enterprise IT Services",
              "url": "https://example.com/enterprise-it",
              "altText": "ERP, SAP, and Oracle implementations",
              "contentKey": "enterpriseIT"
            },
            {
              "text": "Application Development & Maintenance Services",
              "url": "https://example.com/application-development",
              "altText": "Custom Software, Legacy Modernisation",
              "contentKey": "applicationDevelopment"
            },
            {
              "text": "Digital Transformation",
              "url": "digitrans#page",
              "altText": "Strategy, Automation and Process Optimization, Blockchain, UX/UI Design and Customer Experience",
              "contentKey": "digitalTransformation"
            },
            {
              "text": "Cloud Services",
              "url": "cloudser#page",
              "altText": "Hybrid Cloud Strategy, Cloud Migration and Management, Edge Computing",
              "contentKey": "cloudServices"
            },
            // {
            //   "text": "IoT Services",
            //   "url": "https://example.com/iot-services",
            //   "altText": "Connected Devices, Industrial IoT",
            //   "contentKey": "iotServices"
            // },
            // {
            //   "text": "Building Management System (BMS)",
            //   "url": "bms#page",
            //   "altText": "Smart infrastructure management",
            //   "contentKey": "bms"
            // },
            // {
            //   "text": "Guest Room Management System (GRMS)",
            //   "url": "grms#page",
            //   "altText": "Advanced room automation",
            //   "contentKey": "grms"
            // },
            // {
            //   "text": "Smart Home",
            //   "url": "smarthome#page",
            //   "altText": "Home automation and IoT integration",
            //   "contentKey": "smartHome"
            // },
            // {
            //   "text": "KNX System",
            //   "url": "knx#page",
            //   "altText": "Standardized building automation",
            //   "contentKey": "knxSystem"
            // },
            // {
            //   "text": "Sound System & AV",
            //   "url": "soundsysandav#page",
            //   "altText": "Professional audio-visual solutions",
            //   "contentKey": "soundSystemAV"
            // },
            // {
            //   "text": "Access System",
            //   "url": "accesssys#page",
            //   "altText": "Security and access control solutions",
            //   "contentKey": "accessSystem"
            // },
            // {
            //   "text": "Fire Alarm",
            //   "url": "firealarm#page",
            //   "altText": "Fire detection and safety systems",
            //   "contentKey": "fireAlarm"
            // },
            // {
            //   "text": "Data & IP System",
            //   "url": "dataipsys#page",
            //   "altText": "Networking and data infrastructure",
            //   "contentKey": "dataIPSystem"
            // }
          ]
        }

      ]
    },
    // {
    //   menuName: "Products",
    //   items: [
    //     {
    //       title: "eXert ERP",
    //       icon: "/images/Maiprosoft-menu/Products/erp1.svg",
    //       subtitle: [
    //         {
    //           text: "Customer Relationship Management - CRM ",
    //           url: "https://example.com/erp-solutions",
    //           contentKey: "crm",
    //         },
    //         {
    //           text: "Financial Accounting System - FAS",
    //           url: "https://example.com/operations-management",
    //           contentKey: "fas",
    //         },
    //         {
    //           text: "Asset Management System - AMS ",
    //           url: "https://example.com/financial-management",
    //           contentKey: "ams",
    //         },
    //         {
    //           text: "Supply Chain Management- SCM",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //         {
    //           text: "Point of Sale - POS ",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //         {
    //           text: "Human Resource Management - HRM ",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //         {
    //           text: "Construction Project Management - CPM",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //         {
    //           text: "Production Control System - PCS",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //         {
    //           text: "Maintenance Control System - MCS",
    //           url: "https://example.com/financial-management",
    //           contentKey: "financialManagement",
    //         },
    //       ],
    //     },
    //     {
    //       title: "ERP Ledger",
    //       icon: "/images/Maiprosoft-menu/ERP Ledger WB.svg",
    //       subtitle: [
    //         // {
    //         //   text: " ERP with Property Management ",
    //         //   url: "https://example.com/erp-solutions",
    //         //   contentKey: "crm",
    //         // },
    //         // {
    //         //   text: "ERP with Education Management",
    //         //   url: "https://example.com/erp-solutions",
    //         //   contentKey: "crm",
    //         // },
    //         // {
    //         //   text: "ERP with Restaurant Management ",
    //         //   url: "https://example.com/erp-solutions",
    //         //   contentKey: "crm",
    //         // },
    //         {
    //           text: "Property Management System - PMS ",
    //           url: "https://example.com/erp-solutions",
    //           contentKey: "crm",
    //         },{
    //           text: "Education Management System - EMS",
    //           url: "https://example.com/erp-solutions",
    //           contentKey: "crm",
    //         },{
    //           text: "Restaurant Management System - RMS",
    //           url: "https://example.com/erp-solutions",
    //           contentKey: "crm",
    //         },

    //       ],
    //     },
    //     {
    //       title: "HTCD Cloud Security ",
    //       icon: "/images/Maiprosoft-menu/HTCD Cloud Sec WB.svg",
    //       subtitle: [
    //         {
    //           text: " Human Trusted Cyber Defense",
    //           url: "https://example.com/erp-solutions",
    //           contentKey: "crm",
    //         },


    //       ],
    //     },

    //   ],
    // },

    {
      "menuName": "Resources",
      "items": [
        {
          "title": "Our Resources",
          "icon": "/images/Maiprosoft-menu/Resources/resource.svg",
          "subtitle": [
            {
              "text": "Case Study",
              "url": "https://example.com/case-study",
              "contentKey": "caseStudy"
            },
            {
              "text": "Tech Articles",
              "url": "https://example.com/tech-articles",
              "contentKey": "techArticles"
            },
            {
              "text": "Our Client & Testimonials",
              "url": "https://example.com/client-testimonials",
              "contentKey": "clientTestimonials"
            },
            {
              "text": "Career",
              "url": "https://example.com/career",
              "contentKey": "career"
            },
            {
              "text": "FAQ",
              "url": "https://example.com/faq",
              "contentKey": "faq"
            },
          ],
        },
      ],
    },

    {
      menuName: "Technologies ",
      items: [
        {
          title: "Frontend",
          icon: "/images/Maiprosoft-menu/Technologies/FrontEnd.svg",
          subtitle: [
            {
              text: "React.js",
              url: "frontend#react-js",
              contentKey: "erpSolutions",
            },
            {
              text: "Next.js",
              url: "frontend#next-js",
              contentKey: "operationsManagement",
            },
            {
              text: "Vue.js ",
              url: "frontend#vue-js",
              contentKey: "financialManagement",
            },
            {
              text: "Angular ",
              url: "frontend#angular",
              contentKey: "financialManagement",
            },
            {
              text: "HTML5 & CSS3 ",
              url: "frontend#html-css",
              contentKey: "financialManagement",
            },
            {
              text: "Tailwind CSS ",
              url: "frontend#tailwind-css",
              contentKey: "financialManagement",
            },
            {
              text: " Bootstrap ",
              url: "frontend#bootstrap",
              contentKey: "financialManagement",
            },
            {
              text: "Sass ",
              url: "frontend#sass",
              contentKey: "financialManagement",
            },
            {
              text: " jQuery ",
              url: "frontend#jquery",
              contentKey: "financialManagement",
            },
          ],
        },
        {
          title: "Backend",
          icon: "/images/Maiprosoft-menu/Technologies/Backend.svg",
          subtitle: [
            {
              text: "Node.js ",
              url: "backend#node-js",
              contentKey: "erpSolutions",
            },
            {
              text: "Express.js",
              url: "backend#express-js",
              contentKey: "operationsManagement",
            },
            {
              text: "Django ",
              url: "backend#django",
              contentKey: "financialManagement",
            },
            {
              text: "Ruby on Rails ",
              url: "backend#ruby-on-rails",
              contentKey: "financialManagement",
            },
            {
              text: "Spring Boot ",
              url: "backend#spring-boot",
              contentKey: "financialManagement",
            },

            {
              text: " Flask ",
              url: "backend#flask",
              contentKey: "financialManagement",
            },
            {
              text: " .NET Core ",
              url: "backend#dotnet-core",
              contentKey: "financialManagement",
            },
            {
              text: " Go ",
              url: "backend#go",
              contentKey: "financialManagement",
            },
            {
              text: " Java ",
              url: "backend#java",
              contentKey: "financialManagement",
            },
            {
              text: " Python ",
              url: "backend#python",
              contentKey: "financialManagement",
            },
          ],
        },
        {
          title: "Database",
          icon: "/images/Maiprosoft-menu/Technologies/Database.svg",
          subtitle: [

            {
              text: "SQL Server",
              url: "database#sql-server",
              contentKey: "operationsManagement",
            },
            {
              text: "PostgreSQL ",
              url: "database#postgresql",
              contentKey: "financialManagement",
            },
            {
              text: "Firebase ",
              url: "database#firebase",
              contentKey: "financialManagement",
            },
            {
              text: "MongoDB ",
              url: "database#mongodb",
              contentKey: "financialManagement",
            },
            {
              text: "MySQL ",
              url: "database#mysql",
              contentKey: "financialManagement",
            },
            {
              text: "Elasticsearch ",
              url: "database#elasticsearch",
              contentKey: "financialManagement",
            },
            {
              text: " Redis ",
              url: "database#redis",
              contentKey: "financialManagement",
            },
          ],
        },
      ],
    },
    {
      "menuName": "Industries",
      "items": [
        {
          "title": "Industries",
          icon: "/images/Maiprosoft-menu/Industries/Industries.svg",
          "subtitle": [
            {
              "text": "Energy & Utilities",
              "url": "#",
              "contentKey": "energyUtilities"
            },
            {
              "text": "Retail &  Consumer Goods",
              "url": "#",
              "contentKey": "retailConsumerGoods"
            },
            {
              "text": "Healthcare &  Life Sciences",
              "url": "#",
              "contentKey": "healthcareLifeSciences"
            },
            {
              "text": "Government &  Public Sector",
              "url": "#",
              "contentKey": "governmentPublicSector"
            },
            {
              "text": "Technology &  Communications",
              "url": "#",
              "contentKey": "technologyCommunications"
            },
            {
              "text": "Hitech &  Semiconductor",
              "url": "#",
              "contentKey": "hitechSemiconductor"
            },
            {
              "text": "Aerospace &  Defense",
              "url": "#",
              "contentKey": "aerospaceDefense"
            },
            {
              "text": "Industrial Manufacturing",
              "url": "#",
              "contentKey": "industrialManufacturing"
            }
          ]

        }
      ]
    },
    {
      menuName: "About Us",
      items: [
        {
          title: "About Leads2CRM",
          icon: "/images/Maiprosoft-menu/About us/About us.svg",
          subtitle: [
            {
              text: "Experience certainty",
              url: "https://example.com/erp-solutions",
              contentKey: "erpSolutions",
            },
            {
              text: "Why Leads2CRM",
              url: "https://example.com/operations-management",
              contentKey: "operationsManagement",
            },
            {
              text: "Heritage & Values",
              url: "https://example.com/financial-management",
              contentKey: "financialManagement",
            },
            {
              text: "Corporate Sustainability",
              url: "https://example.com/financial-management",
              contentKey: "financialManagement",
            },

            {
              text: "Our Leadership",
              url: "https://example.com/financial-management",
              contentKey: "financialManagement",
            },
            {
              text: "Our Global Footprint",
              url: "https://example.com/financial-management",
              contentKey: "financialManagement",
            },

          ],
        },
      ],
    },
  ];












  const handleStickyNavbar = () => {
    // Remove the scroll check to keep the header fixed
    setSticky(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      <header className={`header left-0 top-0 z-40 w-full items-center  ${sticky ? "fixed bg-[#ffffff] text-black  shadow-lg backdrop-blur-2xl " : "absolute bg-[#ffffff00]  "} transition-all`}>
        <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto w-full">
          <Link href="/">
            <img
            
              src="/images/logo/Leads2crm.jpg"

              alt="Logo"
              className="h-15 w-[160px] z-40 mt-[-1px]" // Adjust height as needed
            


            />
          </Link>
        
          <button
            // onClick={navbarToggleHandler}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? " top-[7px] rotate-45" : " "
                }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? "opacity-0 " : " "
                }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${isMobileMenuOpen ? " top-[-8px] -rotate-45" : " "
                }`}
            />
          </button>


          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-10 ml-auto">
          <ul className={`flex space-x-6 font-medium transition-colors duration-300  ${sticky ? "text-black " : "text-white "}`}>
              {menuData.map((menu, menuIndex) => (
                // <li
                //   key={menuIndex}
                //   className="relative group"
                //   onMouseEnter={() => setCurrentMenu(menu.menuName)} // Set current menu on hover
                //   onMouseLeave={() => {
                //     setCurrentMenu(null); // Close the menu when leaving
                //     setHoveredIndex(null); 
                //   }}
                // >
                <li
                  key={menuIndex}
                  className="relative group"
                  onMouseEnter={() => {
                    setCurrentMenu(menu.menuName);
                    // Change: Set hoveredIndex to 0 by default when menu is entered
                    setHoveredIndex(0);
                  }}
                  onMouseLeave={() => {
                    setCurrentMenu(null);
                    setHoveredIndex(null);
                  }}
                >
                  <span className="flex items-center  cursor-pointer text-md  font-sans hover:text-mai hover:decoration-mai transition-colors duration-300">
                    {menu.menuName}
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${currentMenu === menu.menuName ? 'rotate-0' : 'rotate-180'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  </span>

                  {/* Dropdown Menu */}

                  {currentMenu === menu.menuName && (
                    <div
                      className="fixed left-0 right-0 top-18 bg-white text-black shadow-none  z-25 w-screen p-6"
                      onMouseEnter={() => setCurrentMenu(menu.menuName)} // Keep dropdown open
                      onMouseLeave={() => {
                        setCurrentMenu(null); // Close when not hovering over the entire dropdown
                        setHoveredIndex(null);
                      }}
                    >
                      <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
                        {/* <div className="col-span-5 bg-white p-4 border-r border-gray-200"> */}
                        <div className="col-span-5 bg-white p-4  border-orange animate-border-color-change">

                          {menu.items.map((item, index) => (
                            <div
                              key={index}
                              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                              className={`p-4 cursor-pointer flex items-center justify-between transition-all duration-200 ease-in-out rounded-lg ${hoveredIndex === index ? 'bg-[#eaf5fd] ' : ''} `}

                            // className="p-4 cursor-pointer flex items-center justify-between transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-100"
                            >
                              <div className="flex items-center">
                                <img src={item.icon} alt="Item Icon" className="h-6 w-6 mr-2" />
                                <h3 className="font-medium text-md text-gray-800  font-sans hover:decoration-mai  ">{item.title}</h3>
                              </div>
                              {/* <svg
              className={`h-5 w-5 ml-5 transition-colors duration-300 transform rotate-45 ${hoveredIndex === index ? 'text-mai' : 'text-gray-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg> */}

                              <svg
                                className={`h-4 w-5 ml-5 transition-colors duration-300 transform ${hoveredIndex === index ? 'text-maiy' : 'text-gray-500'}`}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l4.87 4.89h-11.17c-.55 0-1 .45-1 1s.45 1 1 1z"
                                  transform="translate(-4 -4)"
                                />
                              </svg>

                            </div>
                          ))}
                        </div>

                        <div className="col-span-7 bg-white p-4">
                          {/* Display hovered title at the top */}
                          {hoveredIndex !== null && (
                            <>
                              {/* <h3 className="font-medium text-md text-mai font-sans  mb-4">
      {menu.items[hoveredIndex].title}

      <hr className="border-t-2 border-[#808080] w-1/4  mt-2 " />

    </h3> */}
                              <div className="inline-block">
                                <h3 className="font-medium text-md text-mai font-sans mb-2">
                                  {menu.items[hoveredIndex].title}
                                </h3>
                                <hr className="border-t-2 border-[#808080] w-[70%] mt-2 mr-auto" />
                              </div>


                            </>


                          )}



                          {hoveredIndex !== null && (


                            <div className="grid grid-cols-2 gap-4">
                              {menu?.items[hoveredIndex]?.subtitle?.map((sub, idx) => (
                                <div key={idx} className="flex items-start list-disc space-y-2 text-gray-700">
                                  <li
                                    className="text-sm font-medium text-gray-600 whitespace-nowrap"
                                    style={{ width: '100%', listStyleType: 'none' }}
                                    title={sub.altText} // Tooltip for hover
                                  >
                                    {/* <Link
          href="#"
          rel="noopener noreferrer"
          className="hover:text-mai hover:underline hover:decoration-mai font-mono-system-ui capitalize"
        >
          {sub.text}
        </Link> */}
                                    <Link
                                      // href="#"
                                      href={sub?.url}
                                      rel="noopener noreferrer"
                                      // className={`hover:text-mai hover:underline hover:decoration-mai font-mono-system-ui ${
                                      //   sub.text === "jQuery" || sub.text === "iPaaS" ? "normal-case" : "capitalize"
                                      // }`}

                                      // className={`hover:text-mai hover:underline hover:decoration-mai font-mono-system-ui ${
                                      //   ["iPaaS", "jQuery", "React.js", "Next.js", "Vue.js", "Node.js", "Express.js"].includes(sub.text)
                                      //     ? "normal-case"
                                      //     : "capitalize"
                                      // }`}

                                      className={`hover:text-mai hover:underline hover:decoration-mai font-mono-system-ui ${["iPaaS", "jQuery", "React.js", "Next.js", "Vue.js", "Node.js", "Express.js", "iPaaS Integration Services"].includes(
                                        sub.text.trim()
                                      )
                                          ? "normal-case"
                                          : "capitalize"
                                        }`}


                                    >
                                      {sub.text}
                                    </Link>

                                  </li>
                                </div>
                              ))}
                            </div>

                          )}
                        </div>

                      </div>
                    </div>
                  )}


                </li>
              ))}

            </ul>
          </nav>






        </div>
      </header>


      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-end">
          <div className="w-3/4 sm:w-1/3 bg-white p-4 flex flex-col">
            {/* Close Button */}
            <button
              className="self-end mb-4 text-2xl text-gray-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            {/* Menu List */}
            <div className="overflow-y-auto max-h-screen">
              <ul className="space-y-4 text-black font-medium">
                {menuData?.map((menu, menuIndex) => (
                  <li key={menuIndex} className="cursor-pointer">
                    <span
                      onClick={() => setCurrentMenu(currentMenu === menu.menuName ? null : menu.menuName)}
                      className="flex justify-between items-center"
                    >
                      {menu.menuName}
                      <span>{currentMenu === menu.menuName ? '-' : '+'}</span>
                    </span>
                    {currentMenu === menu.menuName && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {menu?.items?.map((item, index) => (
                          <li key={index} className="font-semibold text-gray-700">
                            {item.title}
                            <ul className="ml-4 text-gray-600 space-y-1">
                              {item?.subtitle?.map((sub, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start list-disc ml-5 text-gray-700"
                                >
                                  <Link
                                    // href="#"
                                    href={sub?.url}

                                    className="text-sm font-medium text-gray-600 hover:text-blue-500 hover:underline"
                                  >
                                    {sub.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

    </>


  );
};

export default Header;

