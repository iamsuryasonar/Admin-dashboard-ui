import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function CustomerFeedBackSection(props) {
    const {
        feedbacks
    } = props;

    return (
        <div className='w-full max-h-[400px] lg:col-span-3 lg:row-span-3 rounded-md bg-slate-800 flex flex-col'>
            <p className='p-4 font-bold'>Customer's Feedback</p>
            <div className='h-full overflow-auto custom-scrollbar'>
                {
                    feedbacks.map((feedback) => {
                        return (
                            <Feedback profileImage={feedback.profileImage} name={feedback.name} rating={feedback.rating} feedback={feedback.feedback} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CustomerFeedBackSection;


function Feedback(props) {
    const {
        profileImage,
        name,
        rating,
        feedback,
    } = props;

    const customStyles = {
        itemShapes: ThinRoundedStar,
        activeFillColor: '#facc15',
        inactiveFillColor: '#fff',
    };

    return (
        <div className='flex flex-col gap-2 pb-4 px-4'>
            <div className="flex">
                <img className="h-8 w-8 rounded-full mr-2" src={profileImage} alt={`Profile image of ${name}`} />
                <p className="">{name}</p>
            </div>

            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
                itemStyles={customStyles}
            />
            <p className="text-xs text-gray-400">{feedback}</p>
            <hr className="border-slate-700" />
        </div>
    )
}