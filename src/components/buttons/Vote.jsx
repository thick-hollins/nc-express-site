import { useEffect, useState } from "react";
import { patchArticleVotes, patchCommentVotes } from '../../utils/api'
const Vote = ({ resource, voteHistory, setVoteHistory }) => {

    const [votes, setVotes] = useState(0)

    useEffect(() => {
        setVotes(resource.votes)
    }, [resource.votes])
    let votedValue
    let foundComment
    let foundArticle
    if (!resource.comment_id) {
        [foundArticle] = voteHistory.filter(vote => vote.article_id === resource.article_id)
    }
    if (foundArticle) {
        votedValue = foundArticle.up ? '⬆' : '⬇'
    }
    if (resource.comment_id) {
        [foundComment] = voteHistory.filter(vote => vote.comment_id === resource.comment_id)
    }
    if (foundComment) {
        votedValue = foundComment.up ? '⬆' : '⬇'
    }
    const handleClick = (value) => {
        setVotes(currentVotes => currentVotes + value)
        votedValue = value === 1 ? '⬆' : '⬇'
        let up = value === 1
        if (!resource.comment_id) setVoteHistory(current => current.concat({article_id: resource.article_id, up: up}))
        if (resource.comment_id) setVoteHistory(current => current.concat({comment_id: resource.comment_id, up: up}))
        const req = {inc_votes: value}
        if (!resource.comment_id) patchArticleVotes(req, resource.article_id)
        if (resource.comment_id) patchCommentVotes(req, resource.comment_id)
    }
    if (votedValue) {
        return(
            <div>{votedValue} {votes}</div>
        )
    }
    return (
        <div>
            <button onClick={ () => handleClick(1) }>⬆</button>
            <button onClick={ () => handleClick(-1) }>⬇</button>
            <span> {votes}</span>
        </div>
    );
};

export default Vote;