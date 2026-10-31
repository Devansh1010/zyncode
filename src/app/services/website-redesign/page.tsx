import { WhyRedesignWebsite } from "@/components/sections/website-redesign/problem"
import { WebsiteRedesignHero } from "../../../components/sections/website-redesign/hero"
import { WebsiteRedesignApproach } from "@/components/sections/website-redesign/approach"
import { WebsiteRedesignOutcomes } from "@/components/sections/website-redesign/outcome"


const page = () => {
    return (
        <div>
            <WebsiteRedesignHero />
            <WhyRedesignWebsite />
            <WebsiteRedesignApproach />
            <WebsiteRedesignOutcomes />
        </div>
    )
}

export default page