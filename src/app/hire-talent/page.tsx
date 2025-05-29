import AboutGoldenLionCards from "./AboutGoldenLionCards"
import CareersHero from "./Career"
import CareerOpenings from "./CareerOpenings"
import HireReactSteps from "./HireReactSteps"

const page = () => {
    return (
        <div className="mt-24">
            <CareersHero />
            <CareerOpenings />
            {/* <HireReactSteps /> */}
            <AboutGoldenLionCards />
        </div>
    )
}

export default page
