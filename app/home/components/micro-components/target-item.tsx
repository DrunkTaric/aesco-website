import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TargetItemProps {
    icon: IconDefinition
    text: string
}

export default function TargetItem(props: TargetItemProps) {
    return(
        <div className="flex text-white w-[auto] p-10 text-center">
            <div className="w-[90%] text-center mr-auto ml-auto">
                <FontAwesomeIcon icon={props.icon} style={{color: "#ffffff"}} size="8x"/>
                <p className="break-keep text-3xl pt-7">{props.text}</p>
            </div>
        </div>
    )
}