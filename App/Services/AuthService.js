import API from 'App/Config'
import AsyncStorage from '@react-native-community/async-storage';
import Constant from 'App/Config/Constant'

doAuthantication = async (authData) => {
    try {
        return API.post(`login`, authData).then(async (response) => {
            if (response) {
                if (response.ok) {
                console.log('response', response.data.credintial[0].id);

                    await AsyncStorage.setItem('userId', response.data.credintial[0].id.toString());
                    await AsyncStorage.setItem('credential', JSON.stringify(response.data.credintial[0]));
                    return response.data;
                }
            }
            return null
        })
    } catch (error) {
        let errorStatus = { success: false, message: Constant.somthig_went_wrong }
        if (error.error_description) {
            errorStatus = { success: false, message: error.error_description };
        }
        return errorStatus
    }
}
export const AuthService = {
    doAuthantication,
}
