import styled from '@emotion/styled'

export const MessageCard = styled.div`
    background:#0084FF;
	width: 95%;
    margin-left:auto;
    margin-right:auto;
	min-height: 60px;
    color:white;
    z-index:20;
    border-radius: 10px;
    margin-bottom: 10px;

    p{
  -webkit-line-clamp: ${props => props.clamp};
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
    }

`

export const ChatContain = styled.div`
    
    position:absolute;
    bottom: 50px;
    height: 90%;
    width:90%;
    margin-right : 40px;
    margin-left: 40px;
    background:white;
    display:flex;
    flex-direction: column;
    align-items:center;
	z-index:10;
    border-radius: 10px;


.send-message{
    margin-top: 10px;
    margin-bottom:10px;
    display:flex;
    align-items:center;
}

    input{
        height: 50px;
        width: 465px;
    border-radius: 20px; 
    }

    .send-btn{;
        margin-left:  3px;
        display: flex;
        color:#0084FF;
        align-items: center;
        justify-content: center;
        border-radius:  50px;
        text-align: center;
        height:  45px;
        width: 45px;
        cursor: pointer;
    }

    .messages-contain{
        margin-top:10px;
        height: 90%;
        overflow-y: scroll;
        width: 500px;
    }
`

export const LikeStyles = styled.span`
    cursor: pointer;
    color: black;
`

export const ReplyStyles = styled.span`
    cursor: pointer;
    color: black;
`

