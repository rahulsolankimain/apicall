import React from 'react';
import axios from 'axios';

class Api_post extends React.Component{
	state = {
		userid : '',
		title : '',
		body : ''
	}
	componentDidMount(){
		
	}
	changeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name] : value
		})
		//this.setState({
		//	[event.target.name] : event.target.value
		//})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		//console.log(this.state);
		axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
		.then(resposne => {
			console.log(resposne);
		})
		.catch(error => {
			console.log(error);
		})
	}
	render(){
		const { userid,title,body } = this.state;
		return (
				<>
				<h1>Api Data {userid} {title}</h1>
				<form onSubmit={this.handleSubmit}>
					Id :
					<input type="number" name="userid" onChange={this.changeHandler} />
					<hr />
					Title :
					<input type="text" name="title" onChange={this.changeHandler}/>
					<hr />
					Body :
					<input type="text" name="body" onChange={this.changeHandler}/>
					<br />
					<br />
					<input type="submit" />
				</form>
				</>
			);

	}
}

export default Api_post;