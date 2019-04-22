import React from 'react';
import Icon from '../icon';
import Facebook from '../icon/facebook.icon';
import Instagram from '../icon/instagram.icon';
import Twitter from '../icon/twitter.icon';
import './_footer.scss';

const ICON_HEIGHT = 26;
const ICON_WIDTH = 26;
const ICON_COLOR = 'black';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content">
                        <div class="bandef"><span>NEW! PDF N°16 — CONVERSATION AVEC MATHILDE DENIZE</span></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
