import { 
    loginRequestRecruiter, 
} from '../api'

export const login = (token, role) => ({
    type: "LOGIN",
    token,
    role
  });

export const startLoginRecruiter = (obj,role) => {
    return (dispatch, getState) => {
        return loginRequestRecruiter(obj)
            .then(token => {
                console.log('this is the role', role)
                const loginState = {
                    token,
                    role
                }
                localStorage.setItem("user", JSON.stringify(loginState));
                return dispatch(login(token, role));
            })
            .catch(function (error) {
                console.log('error creating a job...', error);
                return error.response
            });
    }
}

export const logout = () => ({
    type: "LOGOUT"
  });
  
  export const startLogout = () => {
    return dispatch => {
      localStorage.removeItem("user");
      return dispatch(logout()); //make logout request
    };
  };