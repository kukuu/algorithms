import React from 'react';

class Contact extends React.Component {
    
    render() {
        return(
      
            <li>     
                { this.props.contact.name } - { this.props.contact.director }   
            </li>

        )
    }

}

export default Contact;


