import { 
    saveUserData, 
} from '../api'


export const startSaveUserData = (obj) => {
    return (dispatch, getState) => {
        console.log("in action", getState().userdata)
        return saveUserData(getState().userdata)
            .then(function (response) {
                console.log('successfully saved online...');
                return response.data;
            })
            .catch(function (error) {
                console.log('error saving online...', error);
                return error.response
            });
    }
}
