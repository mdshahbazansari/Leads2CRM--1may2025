import ZohoCrm from "@/components/zoho/ZohoCrm"
import TakeUsForASpin from "./TakeUsForASpin"
import FAQSlider from "./FAQSlider"
import ZohoBanner from "./ZohoBanner"
import ZohoCRMIndustry from "./ZohoCRMIndustry"
import ZohoCreatorCustomApp from "./ZohoCreatorCustomApp"

const page = () => {
    return (
        <div>
            {/* <ZohoCrm /> */}
            <ZohoBanner />
            <ZohoCRMIndustry />
            <ZohoCreatorCustomApp />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
