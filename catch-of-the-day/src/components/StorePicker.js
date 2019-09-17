import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    // if you need to access 'this' inside of a custom method, write this way to bind it.
    goToStore = (event) => {
        // 1. stop form from submitting
        event.preventDefault();
        // 2. get text from input
        const storeName = this.myInput.current.value;
        // 3. change page to /store/:storeId
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                {/* Comment Example */}
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    required 
                    ref = {this.myInput}
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;