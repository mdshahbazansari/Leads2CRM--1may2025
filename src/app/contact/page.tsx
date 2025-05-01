import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maiprosoft-Your software solution",
  description: "Maiprosoft- Software company in Saudi Arabia",
    // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us for any inquiries, support, or feedback. Our team is here to help you with any questions or requests. Reach out and let us know how we can assist you!"
        />

      <Contact />
    </>
  );
};

export default ContactPage;
