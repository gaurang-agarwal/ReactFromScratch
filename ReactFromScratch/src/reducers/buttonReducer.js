const buttonReducer = (state,action) => {
    console.log(action,state);
    switch(action.type){
        
        case 'lButton':
            return ({message:"Left Button is Pressed"});
        case 'rButton' :
        return ({message:"Right Button is Pressed"});
    }

    return {message:'From Reducer'}

};

export default buttonReducer;