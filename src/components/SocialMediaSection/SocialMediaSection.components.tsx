import React, { FC } from 'react';
// Contact specific icons
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
// Footer Properties
import { SocialMediaProperties } from './SocialMediaSection.types';
import { SCMIcon } from '../SCMIcon';

const SocialMediaSection: FC<SocialMediaProperties> = ({ headerText, facebook, instagram, twitter, linkedin, scm }) => {
    return (
        <div id="SocialMediaSectionWrapper" className="pt-2">
            { undefined === headerText || null === headerText ? null : <p>{headerText}</p> }
            <p>
                { ( facebook === null || facebook === undefined) ? null :
                    <a className="text-light, px-1" href={ "https://www.facebook.com/groups/" + facebook }><Facebook /></a>
                }
                { ( instagram === null || instagram === undefined) ? null :
                    <a className="text-light, px-1" href={ "https://instagram.com/" + instagram }><Instagram /></a>
                }
                { ( linkedin === null || linkedin === undefined) ? null :
                    <a className="text-light, px-1" href={ "https://linkedin.com/in/" + linkedin }><Linkedin /></a>
                }
                { ( twitter === null || twitter === undefined) ? null :
                    <a className="text-light, px-1" href={ "https://twitter.com/" + twitter }><Twitter /></a>
                }
                { ( scm === null || scm === undefined) ? null :
                    <SCMIcon {...scm} />
                }
            </p>
        </div>
    );
};

export default SocialMediaSection;