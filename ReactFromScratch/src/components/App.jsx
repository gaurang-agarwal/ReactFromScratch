import React from 'react';
import {connect} from 'react-redux'
class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.message);
        return (<div>
            {this.props.message}
            <button name="lButton"  onClick={()=>this.props.buttonClick('lButton')} value="lButton">Left Button</button>
            <button name="rButton" onClick={() => this.props.buttonClick('rButton')} value="rButton">Right Button</button>
        </div>)
    }
};

const mapStateToProps = (state)=> ({
        message : state.button.message
});

const mapDispatchToProps = (dispatch,ownProps) =>({
//buttonClick :(buttonName) => dispatch({type : buttonName})
buttonClick :(buttonName) => dispatch( (dispatch,state) => {dispatch({type : buttonName})} )
})

export default connect(mapStateToProps,mapDispatchToProps)(App);