const defaultState = {
    companies: '',
    selectedCompany: null
  }
  
  export default (state = defaultState, action) => {
      switch (action.type) {
        case 'POPULATE_USER':
          return {
              ...state,
              data: action.Obj,
          };
      
        default:
          return state;
      }
    };
    