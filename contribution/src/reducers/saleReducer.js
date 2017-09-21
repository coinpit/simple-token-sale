  
  const initialState = {
    userName: '',
    userEmail: '',
    userCountry: '',
    userContribution: '',
    userRegistered: true,
    termsConditions: false,
    register: true,
    error: null
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      case 'USER_REGISTERED': 
        return {
          ...state,
          userRegistered: true
        }
      case 'TERMS_CONDITIONS':
        return {
          ...state,
          termsConditions: action.payload
        }
      default: {
        return state;
      }
    }
  }