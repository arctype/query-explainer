import React from 'react'
import {Component} from 'react'

function Cio(){

  var t = document.createElement('script');
    var s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-forms-handler';
    t.setAttribute('data-site-id', `{process.env.REACT_APP_CIO_KEY}`);
    t.setAttribute('data-base-url', 'https://customerioforms.com');

    t.src = 'https://customerioforms.com/assets/forms.js';

    s.parentNode.insertBefore(t, s);
}

export default Cio
