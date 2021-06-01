import axios from 'axios'

export default class LoginService {
  login(email, password, onSuccess, onError) {
    axios.post("https://reqres.in/api/login", { email: email, password: password }).then(function (result) {
      console.log('Login effectuato con successo, token: ', result.data)
      onSuccess(result.data);
    }, function(error) {
      console.error('Errore di login: ', error)
      onError(error.response.data)
    }
    )
  }
}

//https://reqres.in/

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }