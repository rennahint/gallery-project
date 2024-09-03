// components/PageImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';

const PageHeaderBanner = ({ src, alt, width, height, pageTitle, pageDescription  }) => {
    return (
        <div className="flex"> 
            <div className="flex flex-col">
                <div className=" flex title text-5xl p-20">
                    {pageTitle}
                </div>
                
                <div className="text-xl w-128 flex flex-wrap w-1/3">
                    {pageDescription}
                </div>
            </div>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive" // or "fixed", "intrinsic", etc., based on your needs
                />
        </div>
    );
};

// Optional: Define prop types for better type checking and documentation
PageHeaderBanner.propTypes = {
    src: PropTypes.string.isRequired, // `src` is required, so you might want to make sure it's always provided
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    pageTitle: PropTypes.string.isRequired
};

export default PageHeaderBanner;