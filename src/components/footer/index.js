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
                        <a href="https://www.instagram.com/figurefigure.fr/"
                           target="_blank" rel="noopener noreferrer">
                            <Icon icon={Instagram} width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_COLOR}/>
                        </a>
                        <a href="https://www.facebook.com/figurefigure.fr/"
                           target="_blank" rel="noopener noreferrer">
                            <Icon icon={Facebook} width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_COLOR}/>
                        </a>
                        <a href="https://twitter.com/figurefigure_fr"
                           target="_blank" rel="noopener noreferrer">
                            <Icon icon={Twitter} width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_COLOR}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
