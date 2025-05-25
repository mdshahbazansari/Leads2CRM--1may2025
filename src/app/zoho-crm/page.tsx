import ZohoCrm from "@/components/zoho/ZohoCrm"
import TakeUsForASpin from "./TakeUsForASpin"
import FAQSlider from "./FAQSlider"
import ZohoBanner from "./ZohoBanner"
import ZohoCRMIndustry from "./ZohoCRMIndustry"

const page = () => {
    return (
        <div>
            <ZohoCrm />
            <ZohoBanner />
            <ZohoCRMIndustry />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
