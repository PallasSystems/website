import React, { FC } from 'react';

import { BannerNavBar, Footer } from '../../components';

// HomePage Properties
import {MissingPageProperties} from './Missing.types';


const MissingPage: FC<MissingPageProperties> = ({ footerProps, navBarProps }) => {
    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerNavBar {...navBarProps}/>
            <h1>Missing Page</h1>
            <Footer {...footerProps} />
        </main>
    )
};

export { MissingPage };