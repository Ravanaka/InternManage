import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted" style={{color:'red'}}>All Rights Reserved 2021 @Intern's</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;