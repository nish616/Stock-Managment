import React, { Fragment } from "react";



function Nav() {

    return (

        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">

                            <a className="nav-link" href="/create">Create stocks</a>

                        </li>

                        <li className="nav-item active">

                            <a className="nav-link" href="/stocks">View Stocks</a>

                        </li>

                        <li className="nav-item active">

                            <a className="nav-link" href="/update">Update Stock</a>

                        </li>

                    </ul>

                </div>

            </nav>

        </Fragment>

    )

}



export default Nav;