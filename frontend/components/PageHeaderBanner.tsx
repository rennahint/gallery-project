// components/PageImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';

const PageHeaderBanner = ({ src, alt, width, height, pageTitle, pageDescription  }) => {
    return (
        <div className="flex lg:w-screen justify-center flex-col lg:flex-row pt-20 text-orange-50"> 
            <Image
                    className="flex content-center w-auto lg:w-96"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    
                    
                    //layout="responsive" // or "fixed", "intrinsic", etc., based on your needs
            />
            <div className="mytext flex flex-col text-orange-50 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 from-5%">
                <div className=" flex title text-5xl p-10 justify-center">
                    {pageTitle}
                </div>
                <div className="flex description text-xl p-10 justify-center">
                    {pageDescription}
                </div>
            </div>
                
        </div>
    );
};

// Optional: Define prop types for better type checking and documentation
PageHeaderBanner.propTypes = {
    src: PropTypes.string, // `src` is required, so you might want to make sure it's always provided
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    pageTitle: PropTypes.string.isRequired
};

export default PageHeaderBanner;