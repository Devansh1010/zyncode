
import ApplicationCapabilities from "@/components/sections/custom-applications/Application-capabilities"
import CustomApplicationFinalCta from "@/components/sections/custom-applications/Custom-application-final-cta"
import DevelopmentProcess from "@/components/sections/custom-applications/Development-process"
import CustomApplicationHero from "@/components/sections/custom-applications/Hero"
import ProblemRecognition from "@/components/sections/custom-applications/Problem-recognition"
import SelectedWork from "@/components/sections/custom-applications/Selected-work"

const page = () => {
    return (
        <div>
            <CustomApplicationHero />
            <ProblemRecognition />
            <ApplicationCapabilities />
            <SelectedWork/>
            <DevelopmentProcess/>
            <CustomApplicationFinalCta/>
        </div>
    )
}

export default page