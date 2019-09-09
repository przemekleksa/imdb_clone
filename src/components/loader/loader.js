import React from 'react';
import './loader.scss';


const Loader = (props) => {
    return ( 
        <div>
            {props.isLoading &&
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
        </div>
     );
}
 
export default Loader;