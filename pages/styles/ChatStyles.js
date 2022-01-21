import styled from '@emotion/styled'

export const MessageCard = styled.div`
    
    display:flex;
    align-items:flex-end;
    flex-direction:column;
    width-min: 20%;
    margin-left:auto;
    margin-right:auto;
    min-height: 50px;
    padding-top:10px;
    color:white;
    z-index:20;
    margin-bottom: 10px;

    .dinamic-message{
        margin-right: 10px;
    }

    .reply-contain{
        margin-top:5px;
        background:white;
    color: black;
    text-align:justify;
        padding:5px;
        border-radius:10px;

        p{
            -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
        }
    }

    .username{
        color:gray;
    }
    .text-contain{
         padding: 10px;
        color: ${props=>props.textColor};
        background:${props=>props.bgColor};
        max-width: 80%;
        min-width: 40px;
        border-radius: 10px;
     margin: 10px;

    }
    .message{
        background:${props=>props.bgColor};
    text-align: justify;
  -webkit-line-clamp: ${props => props.clamp};
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;



    }
    .read-more{
    color: black;
    text-decoration: underline black;        
    cursor: pointer;
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
    margin-bottom:10px;
    display:flex;
    flex-direction: column;
}
    input{
        padding:0;
        margin-top:10px;
        height: 50px;
        width: 465px;
    border-radius: 20px; 
    }

    .contain-input{
        display:flex;
        align-items:center;
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
    color:${props => props.colorLike};
`


export const ReplyStyles = styled.span`
    cursor: pointer;
    color: black;
`


export const ReplyContain = styled.span`
max-width: 465px;
display:flex;
margin-left:5px;

.close-reply{
    cursor: pointer;

    position:absolute;
    width: 15px;
    right:5px;
}

.text-contain-reply{
    margin-top:5px;
    position:relative;
    display:flex;
    color: #8c8c8c;
    min-width: 100px;
    border: 1px solid #8c8c8c;
    border-radius:10px;
           
    }
      p{
        width:95%;
        margin-left:auto;
        margin-right:auto;
    text-align: justify;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  margin-bottom:10px;

    }
    
`