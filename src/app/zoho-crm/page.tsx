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
import ZohoEcosystemAnimated from "./ZohoEcosystemAnimated"
import EstimateProjectBanner from "@/components/EstimateProjectBanner/EstimateProjectBanner"


const page = () => {
    return (
        <div>
            {/* <ZohoCrm /> */}
            <ZohoCrmHero />
            {/* <DeskHeroSignup /> */}
            <ZohoBanner />
            {/* <EstimateProjectBanner /> */}
            <ZohoCRMIndustry />
            <ZohoCreatorCustomApp />
            <ZohoEcosystemAnimated />
            <ContactUs />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
