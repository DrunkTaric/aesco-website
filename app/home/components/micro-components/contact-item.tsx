import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactItemProps {
    icon: IconDefinition
    text: string
}

export default function ContactItem(props: ContactItemProps) {
    return(
        <div className="flex">
            <FontAwesomeIcon icon={props.icon} style={{color: "#000000"}} size="lg"/>  
            <p className="pl-2">{props.text}</p>
        </div> 
    )
}