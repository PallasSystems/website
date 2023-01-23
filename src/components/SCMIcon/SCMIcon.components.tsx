import React, { FC } from 'react';
// Contact specific icons
import { Git, Github } from 'react-bootstrap-icons';
// Footer Properties
import { SCMProperties } from './SCMIcon.types';

function isGitHubRepository(type: string) {
    return type.toLowerCase() === "github";
}

function generateGitBrowseURL(repository: string, project?: string, endpoint?: string, ) {

    let result = '';

    if (undefined === endpoint || null === endpoint) {
        result += "https://github.com/";
    } else {
        result += endpoint;
    }

    if (undefined !== project && null !== project) {
        result += project;
    }

    result += "/";
    result += repository;

    return result;
}

const SCMIcon: FC<SCMProperties> = ({ endpoint, project, repository, type }) => {
    return (
        <a className="text-light, px-1" href={ generateGitBrowseURL(repository, project, endpoint ) }>
              { isGitHubRepository(type) ? <Github /> : <Git /> }
        </a>
    );
};

export default SCMIcon;