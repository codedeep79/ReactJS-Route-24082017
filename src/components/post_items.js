import React,  {Component} from 'react';

/*class PostItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               {this.props.match.params.id}
            </div>
        );
    }
}*/
const PostItem = ({match}) => {
    return (
        <div>
            {match.params.id}
        </div>
    );
}

export default PostItem;