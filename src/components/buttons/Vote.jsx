import { useEffect, useState } from "react";
import { patchArticleVotes, patchCommentVotes } from '../../utils/api'
const Vote = ({ resource }) => {
    const [votes, setVotes] = useState(0)
    useEffect(() => {
        setVotes(resource.votes)
    }, [resource.votes])
    const handleClick = (value) => {
        console.log(resource);
        setVotes(currentVotes => currentVotes + value)
        const req = {inc_votes: value}
        if (!resource.comment_id) patchArticleVotes(req, resource.article_id)
        if (resource.comment_id) patchCommentVotes(req, resource.comment_id)
    }
    return (
        <div>
            <button onClick={() => handleClick(1)}>⬆</button>
            <button onClick={() => handleClick(-1)}>⬇</button>
            <span> {votes}</span>
        </div>
    );
};

export default Vote;