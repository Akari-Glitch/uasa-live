import styled from '@emotion/styled'

export const MessageCard = styled.div`
    background:blue;
	width: 100%;
	min-height: 50px;
    color:white;
    z-index:20;

    p{
  -webkit-line-clamp: ${props => props.clamp};
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
    }

`

export const MessagesContain = styled.div`
    background:green;
	z-index:10;
`

export const LikeStyles = styled.span`
    cursor: pointer;
    color: black;
`

export const ReplyStyles = styled.span`
    cursor: pointer;
    color: black;
`