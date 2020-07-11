import api from './base';

//Example API requests
export const loginRequestRecruiter = (obj) => {
    return api.post('login/recruiter', obj)
        .then(function onSuccess(response) {
            console.log('successfully logged in...');
            return response.data.token;
        })
        .catch(function onError(error) {
            console.log('error logged in...', error.response);
            if(error.response == null) {
                return Promise.reject('There seems to be a network issue. Please try again later.');
            }
            if(error.response.status == 408) {
                return Promise.reject('Please check your internet connection');
            }
            return Promise.reject(error.response.data.error)
        });
}

export const getAllReferrals = (token) => {
    return api.get('/recruiter/applications/getreferernameandjobtitle', {headers: {"Authorization" : `Bearer ${token}`}} )
        .then(function (response) {
            console.log('successfully got new referrals...');
            return response.data;
        })
        .catch(function (error) {
            console.log('error getting all referrals...', error);
            return Promise.reject(error.response.data.error)
        });
}


export const saveUserData = (obj) => {
    return api.post('api/user/createCourse', obj)
    .then(function onSuccess(response) {
        console.log('successfully submitted...');
        return response.data.token;
    })
    .catch(function onError(error) {
        console.log('error saving...', error.response);
        if(error.response == null) {
            return Promise.reject('There seems to be a network issue. Please try again later.');
        }
        if(error.response.status == 408) {
            return Promise.reject('Please check your internet connection');
        }
        return Promise.reject(error.response.data.error)
    });
}