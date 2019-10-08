import React from 'react';
import { white } from "ansi-colors"


export default function SignInForm(){

    return <div className="modal1 mfp-hide divcenter" id="modal-login">
            <div className="block divcenter" style={{backgroundColor: white, maxWidth: 400 + 'px'}}>
                <div style={{padding: 50 + 'px'}}>
                    <h3 className="font-body">Login to your Account</h3>
                    <form action="#" method="post" className="nobottommargin">
                        <div className="col_full">
                            <label className="font-body capitalize" for="login-form-modal-username">Username:</label>
                            <input type="text" id="login-form-modal-username" name="login-form-modal-username" value="" className="form-control" />
                        </div>
                        <div className="col_full">
                            <label className="font-body capitalize" for="login-form-modal-password">Password:</label>
                            <input type="password" id="login-form-modal-password" name="login-form-modal-password" value="" className="form-control" />
                        </div>
                        <div className="col_full nobottommargin">
                            <button className="button button-rounded nomargin" id="login-form-modal-submit" name="login-form-modal-submit" value="login">Login</button>
                            <a href="#" className="fright">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
}