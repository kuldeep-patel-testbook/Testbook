import { Link, useParams } from "react-router-dom";
import { TopicData } from "../TopicData";
import NotFound from "./NotFound";

const Topic = () => {
    const { topicName } = useParams();
    const topicData = TopicData[topicName];
    console.log(topicData);

    if (!topicData) {
        return <NotFound />;
    }
    return (
        <div className="TopicDetails">
            <h1 className="topicTitle">{topicData.title}</h1>
            {topicData.content.map((paragraph, index) => (
                <p className="topicParagraph" key={index}>{paragraph}</p>
            ))}

            {/* <p>{topicData.content}</p> */}
            <Link to="/" className="btnGoBack">Go Back</Link>
        </div>
    )
}

export default Topic