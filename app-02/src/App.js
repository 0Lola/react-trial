// faker 是生成假資料用的，npm install faker@5.5.3
import faker  from "faker";
import Avatar from "./Avatar";
import ApprovalCard from "./ApprovalCard";

export default function App() {
    const users = [
        {
            author: 'Lola',
            image: faker.image.image(),
            meta: 'Friends',
            description: 'Lola requested permission to view your contact details'
        },
        {
            author: 'Toy',
            image: faker.image.image(),
            meta: 'New',
            description: 'Lola requested add you to friends'
        },
        {
            author: 'Mike',
            image: faker.image.image(),
            meta: 'Unknown',
            description: ''
        }
    ]

    // 組成資料， props 有 author, image, date
    const avators = users.map(e =>
        <ApprovalCard>
            <Avatar 
                author={e.author} 
                image={e.image} 
                meta={e.meta} 
                description={e.description}/>
        </ApprovalCard>

    )

    return (
        <div className="ui container comments">
            {avators}
        </div>
    );
}
