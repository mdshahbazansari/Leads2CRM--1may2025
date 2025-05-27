import ZohoCrm from "@/components/zoho/ZohoCrm"
import TakeUsForASpin from "./TakeUsForASpin"
import FAQSlider from "./FAQSlider"
import ZohoBanner from "./ZohoBanner"
import ZohoCRMIndustry from "./ZohoCRMIndustry"
import ZohoCreatorCustomApp from "./ZohoCreatorCustomApp"
import ZohoCrmHero from "./ZohoCrmHero"
import DeskHeroSignup from "./DeskHeroSignup"
// import ContactUs from "@/components/Contact-us/ContactUs"
import ContactUs from "@/app/contact-us/ContactUs"


const page = () => {
    return (
        <div>
            {/* <ZohoCrm /> */}
            <ZohoCrmHero />
            {/* <DeskHeroSignup /> */}
            <ZohoBanner />
            <ZohoCRMIndustry />
            <ZohoCreatorCustomApp />
            <ContactUs />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
