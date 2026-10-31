import { ContactEnquiry } from '@/components/sections/contact/ContactEnquiry'
import { ContactFaq } from '@/components/sections/contact/ContactFaq'
import { ContactHero } from '@/components/sections/contact/hero'


const page = () => {
    return (
        <div>
            <ContactHero />
            <ContactEnquiry />
            <ContactFaq />
        </div>
    )
}

export default page