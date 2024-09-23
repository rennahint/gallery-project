// components/PageImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LeftImageButtonBanner = ({ src, alt, width, height, buttonTitle,pageTitle, pageDescription, pageLink}) => {
    return (
        <div className="flex justify-center flex-col lg:flex-row pt-20 text-orange-50"> 
            <div className="mytext flex flex-col justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300">
                <div className=" flex title text-5xl p-10 justify-center">
                    {pageTitle}
                </div>
                <Link className="pl-40 bg-zinc-300 w-1/5 text-orange-50" href={pageLink} > {buttonTitle} </Link>

                <div className="flex description text-xl p-10 justify-center">
                    {pageDescription}
                </div>
            </div>

            <Image
                    className="flex content-center w-auto lg:w-96"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    //layout="responsive" // or "fixed", "intrinsic", etc., based on your needs
            />
            
                
        </div>
    );
};

// Optional: Define prop types for better type checking and documentation
LeftImageButtonBanner.propTypes = {
    src: PropTypes.string.isRequired, // `src` is required, so you might want to make sure it's always provided
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    buttonTitle: PropTypes.string.isRequired,
    pageLink: PropTypes.string.isRequired
};

export default LeftImageButtonBanner;