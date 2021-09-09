import React from 'react';
import axios from 'axios';

class Api_class extends React.Component {
    state = { users: [] }
    componentDidMount()
        {
            axios.get("https://api.github.com/users")
            .then((response) => {
                console.log(response.data);
                this.setState({users :response.data});
            })
            .catch((err) => {
                console.log(err);
            })
        }
        
    render() {
        //const {users} = this.state;
        const h1= {
            color: "red",
            marginLeft : "10px",
        }
        return (
            <>
                 <h1 style={h1}>Hey this is Api working</h1>
                 <div style={{textAlign:"center"}}>
                 Hey This is Your response of API
                    {
                        this.state.users.map(user => <div key={user.id}>{user.login}</div>)
                    }
                 </div>
            </>
        );
    }
}
export default Api_class;
