import styled from '@emotion/styled'

export const SigninContent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
	display:flex;
	height:400px;
	margin-left:auto;
	margin-right:auto;
	    font-family: 'Roboto', sans-serif;
	margin-top:10%;
	width:65%;
	align-items:center;
	justify-content:space-around;

	.text-uasa{
		margin-bottom:200px;
		h1{
			color: #0084FF;
			font-size:60px;
		}

		p{
			font-size:20px;
		}
	}

	.input-contain{
		display:flex;
		align-items:center;
		flex-direction: column;
		input{
			height:50px;
			width:300px;
			border-radius:10px;
		}

		button{
			background:#42B72A;
			color:white;
			font-size:1.1rem;
			border-radius:10px;
			margin-top:15px;
			width:150px;
			height:40px;
		}
	}
`