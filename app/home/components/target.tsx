import TargetItem from "./micro-components/target-item"
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Target() {
    return(
        <div className="flex space-x-1">
            <TargetItem icon={faBullseye} text="Our Mission is to promote and participate in the provision of high quality products through utilization of high quality staff and using state of the art technologies."></TargetItem>
            <TargetItem icon={faEye} text="Our Vision is to be one of the leading companies in the ME region as an electronic system’s manufacturer, starting with LED light industry up to various fields in the electronics industry."></TargetItem>
        </div>
    )
}