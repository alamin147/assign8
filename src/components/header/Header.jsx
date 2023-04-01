import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div className='container d-flex justify-content-between align-items-center'>
            <h1 className='head'>Knowlwdge Cafe</h1>
            <img className='img-fluid img-thumbnail headImg rounded-circle' src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
        </div>
    );
};

export default Header;