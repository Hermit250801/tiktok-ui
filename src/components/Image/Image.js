import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
