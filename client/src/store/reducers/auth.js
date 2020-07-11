const defaultAuthState = {
    role: 'SUPERADMIN',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIyMzVhY2YyZTcwODAwMTcwMjc5NDUiLCJpYXQiOjE1NzkzMDAyNjh9.XJXJlb8sjKXr2RljMdbAuC7Vv5qYnxP2cor2gM-8ngo',
    // role: 'COMPANYADMIN',
    // token: '123h8asduk123'
  }
  
  export default (state = defaultAuthState, action) => {
      switch (action.type) {
        case 'LOGIN':
          return {
              ...state,
              role: action.role,
              token: action.token
          };
        case 'LOGOUT':
          return {};
        default:
          return state;
      }
    };
    