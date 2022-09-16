const initState = {
    authError: null
}

const AuthReducer = (state=initState, action) =>{
    switch(action.type){
        case 'LOGIN-ERROR':
            console.log('LOGIN-ERROR');
            return {
                ...state,
                authError: 'Login error'
            }
        case 'LOGIN-SUCCESS':
            console.log('LOGIN-SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT-SUCCESS':
            console.log('LOGOUT-SUCCESS');
            return state;
        case 'SIGNUP-SUCCESS':
            console.log('SIGNUP-SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP-ERROR':
            console.log('SIGNUP-ERROR');
            return {
                ...state,
                authError: action.err.message
            }
        default: 
          return state;
    } 
}

export default AuthReducer