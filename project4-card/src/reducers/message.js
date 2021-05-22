import * as type from '../constants/ActionType';
import * as Message from '../constants/Message'
 var initialState = Message.MESS_WELCOME;

const message = (state=initialState, action)=>{
    switch(action.type) {
        case type.CHANGE_MESSAGE :
            return action.message;
        default : return state;
    }
}
export default message;