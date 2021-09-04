import { useEffect, useState } from "react";
import { patchArticleVotes, patchCommentVotes } from '../../utils/api'
import upArrow from '../../img/up-arrow.svg'
import downArrow from '../../img/down-arrow.svg'
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
        <div className='vote-buttons'>
            <span> {votes} </span>
            <button className='vote-button' onClick={ () => handleClick(1) }><img src={upArrow} className='vote-arrow' alt='upvote'/></button>
            <button className='vote-button' onClick={ () => handleClick(-1) }><img src={downArrow} className='vote-arrow' alt='downvote'/></button>
        </div>
    );
};

export default Vote;