import React from "react";
import { Header, SignInForm, Footer, PageHead } from "../../components";

export default function SignIn() {
    return (<React.Fragment>
        <Header />
        <PageHead page="Login" />
        <SignInForm />
        <Footer />
    </React.Fragment>)
}