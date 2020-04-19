import React, {Component} from 'react';
import Badge from 'react-bootstrap/Badge';
import '../Styling Sheets/Profile.css'
 
class Tag extends Component {
  render() {
    return (
        <Badge pill variant='dark'>
            Beats
        </Badge>
    );
  }
}
 
export default Tag;