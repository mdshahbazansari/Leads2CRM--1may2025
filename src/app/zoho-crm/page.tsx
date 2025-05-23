import ZohoCrm from "@/components/zoho/ZohoCrm"
import TakeUsForASpin from "./TakeUsForASpin"
import FAQSlider from "./FAQSlider"
import ZohoBanner from "./ZohoBanner"

const page = () => {
    return (
        <div>
            <ZohoCrm />
            <ZohoBanner />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
