import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function CustomerFeedBackSection(props) {

    const feedbacks = [
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        },
        {
            profileImage: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
            name: 'John Doe',
            rating: 3,
            feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore porro ea officia, modi, alias quis et dicta ducimus quas delectus natus dolorum inventore minima optio ex nesciunt. Odio, ducimus.',
        }
    ]

    return (
        <div className='col-span-4 p-4 rounded-md bg-slate-800'>
            <p className='pb-1 text-xl font-bold'>Customer's Feedback</p>
            <div className='overflow-auto'>
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
        <div className='flex flex-col gap-2 my-3'>
            <div className="flex">
                <img className="h-8 w-8 rounded-full mr-2" src={profileImage} alt={`Profile image of ${name}`} />
                <p className="text-xl">{name}</p>
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