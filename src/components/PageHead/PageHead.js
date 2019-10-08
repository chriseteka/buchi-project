import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHead({page}) {
    return (
        <section class="banner-area other-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>{page}</h1>
                    <a href="/">Home</a> <span>|</span> <a href="/login">{page}</a>
                </div>
            </div>
        </div>
    </section>
    )
}
