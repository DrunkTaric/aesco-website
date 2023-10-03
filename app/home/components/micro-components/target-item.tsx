import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TargetItemProps {
    icon: IconDefinition
    text: string
}

export default function TargetItem(props: TargetItemProps) {
    return(
        <div className="text-white w-[40rem] p-10 text-center">
            <FontAwesomeIcon icon={props.icon} style={{color: "#ffffff"}} size="8x"/>
            <p className="break-keep text-3xl pt-7">{props.text}</p>
        </div>
    )
}