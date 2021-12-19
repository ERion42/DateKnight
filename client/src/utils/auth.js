import axios from 'axios';
export default function login(e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/user/login',
      data: {
        username: this.state.email,
        password: this.state.password,
      }
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.error) {
        this.setState({error: true, errmessage: response.data.message});
      } else {
        this.setState({redirect: true});
      }
    })
    .catch((error) => {
      this.setState({error: true, errmessage: 'Error logging in'});
    });
}
