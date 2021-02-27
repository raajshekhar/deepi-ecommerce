import React from 'react';
import Link from 'next/link';

const TextThumnail = (props) => {
    return (
        <Link className="text-thumbnail" passHref href={props.link}>
            <a>
                <img src={props.img} />
                {props.name}
            </a>
        </Link>
    )
}

export default TextThumnail;