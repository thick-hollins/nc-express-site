import { useEffect, useState } from "react";
import { patchArticleVotes, patchCommentVotes } from '../../utils/api'
import upArrow from '../../img/up-arrow.svg'
import downArrow from '../../img/down-arrow.svg'
import upArrowBlack from '../../img/up-arrow-black.svg'
import downArrowBlack from '../../img/down-arrow-black.svg'
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
        votedValue = foundArticle.up ? 1 : -1
    }
    if (resource.comment_id) {
        [foundComment] = voteHistory.filter(vote => vote.comment_id === resource.comment_id)
    }
    if (foundComment) {
        votedValue = foundComment.up ? 1 : -1
    }
    const handleClick = (value) => {
        setVotes(currentVotes => currentVotes + value)
        let up = value === 1
        if (!resource.comment_id) setVoteHistory(current => current.concat({article_id: resource.article_id, up: up}))
        if (resource.comment_id) setVoteHistory(current => current.concat({comment_id: resource.comment_id, up: up}))
        const req = {inc_votes: value}
        if (!resource.comment_id) patchArticleVotes(req, resource.article_id)
        if (resource.comment_id) patchCommentVotes(req, resource.comment_id)
    }

    const handleCancel = (value) => {
        setVotes(currentVotes => currentVotes - value)
        if (!resource.comment_id) setVoteHistory(current => current.filter(article => article.comment_id !== resource.comment_id))
        if (resource.comment_id) setVoteHistory(current => current.filter(article => article.comment_id !== resource.comment_id))
        const req = {inc_votes: 'undo'}
        if (!resource.comment_id) patchArticleVotes(req, resource.article_id)
        if (resource.comment_id) patchCommentVotes(req, resource.comment_id)
    }

    if (votedValue) {
        return(
            <div className='vote-buttons'>
            <span> {votes} </span>
            {votedValue === 1 && <button className='vote-button' onClick={() => handleCancel(1)}><img src={upArrowBlack} className='vote-arrow' alt='cancel upvote'/></button>}
            {votedValue === -1 && <button className='vote-button' onClick={() => handleCancel(-1)}><img src={downArrowBlack} className='vote-arrow' alt='cancel downvote'/></button>}
        </div>
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