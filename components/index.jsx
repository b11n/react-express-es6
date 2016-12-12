import React from 'react';

class Index extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<div>Hello {this.props.data.hello} </div> );
	}
}

export default Index;