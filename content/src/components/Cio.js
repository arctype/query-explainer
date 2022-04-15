import React from 'react'
import {Component} from 'react'

function Cio(){

  (function() {
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-forms-handler';
    t.setAttribute('data-site-id', 'a892e670cc1ee1c4e442');
    t.setAttribute('data-base-url', 'https://customerioforms.com');

    t.src = 'https://customerioforms.com/assets/forms.js';

    s.parentNode.insertBefore(t, s);
  })();
}

export default Cio
