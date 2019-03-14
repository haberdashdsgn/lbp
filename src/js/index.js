import React from 'react';
import { render } from 'react-dom';
import Navigation from '../containers/Navigation';
import Hero from '../containers/Hero';
import Sidebar from '../containers/Sidebar';
import LinkBlocks from '../containers/LinkBlocks';
import Suites from '../containers/Suites';
import Contact from '../containers/Contact';
import Map from '../containers/Map';
import Footer from '../containers/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import '../scss/bootstrap.scss';
import '../scss/global.scss';

import '../lib/bootstrap.min.js';
import '../lib/jssor.slider.min.js';

const theNav = document.getElementById('navigation');
const theHero = document.getElementById('hero');
const theSidebar = document.getElementById('sidebar');
const theLinkBlocks = document.getElementById('linkBlocks');
const theSuites = document.getElementById('suites');
const theContact = document.getElementById('contact');
const theMap = document.getElementById('map');
const theFooter = document.getElementById('footer');

library.add(faArrowCircleRight,faAngleDoubleRight,faMapMarker,faMapMarkedAlt);

render(<Navigation />, theNav);

if (theHero !== null) {
    render(<Hero />, theHero);

    var options = {
        $AutoPlay: 1,
        $SlideDuration: 800,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2
        },
        $ButtonNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2
        }
    };

    var jssor1_slider = new $JssorSlider$('heroSlider', options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 3000;

    function ScaleSlider() {
        var containerElement = jssor1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
}

if (theLinkBlocks !== null) {
    render(<LinkBlocks />, theLinkBlocks);
}

if (theSidebar !== null) {
    render(<Sidebar />, theSidebar);
}

if (theSuites !== null) {
    render(<Suites />, theSuites);
}

if (theContact !== null) {
    render(<Contact />, theContact);
}

if (theMap !== null) {
    render(<Map />, theMap);
}

render(<Footer />, theFooter);