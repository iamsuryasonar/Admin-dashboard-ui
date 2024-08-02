import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";

function HighlightsSection(props) {
    const {
        Icon,
        icon_background,
        icon_color,
        title,
        src,
    } = props;

    return <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="p-4 w-fit rounded-full bg-slate-700"
                style={{
                    backgroundColor: icon_background,
                    color: icon_color,
                }}>
                <Icon className='text-xl' />
            </div>
            <p>{title}</p>
        </div>
        <Link to={src}>
            <div className="p-1 w-fit rounded-full bg-slate-700">
                <RxCaretRight className="text-xl" />
            </div>
        </Link>
    </div>
}

export default HighlightsSection;