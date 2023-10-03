import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactItem from "./micro-components/contact-item";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
    return(
        <div className="pt-11">
            <div className="flex w-fit h-auto border rounded-tr-full bg-white">
                <div className="p-9 pl-20 pr-44 text-black">
                    <div className="float-right">
                        <ContactItem icon={faPhone} text="0559876401"></ContactItem>
                        <ContactItem icon={faEnvelope} text="info@aesco.com.sa"></ContactItem>
                        <ContactItem icon={faGithub} text="github.com/AdvancedEnergySolutions"></ContactItem>
                        <ContactItem icon={faLocationDot} text="Riyadh, 8534 King Abdulaziz Road, Alsulaymaniyah Dist."></ContactItem>
                    </div>
                </div>
            </div>
        </div>
    )
}