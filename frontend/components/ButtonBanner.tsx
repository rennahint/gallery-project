// components/PageImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';

const ButtonBanner = ({ src, alt, width, height, pageTitle, pageDescription  }) => {
    return (
        <div className="flex justify-center flex-col lg:flex-row bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300"> 
            <Image
                    className="flex content-center w-auto lg:w-96"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    
                    
                    //layout="responsive" // or "fixed", "intrinsic", etc., based on your needs
            />
            <div className="mytext flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300">
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
ButtonBanner.propTypes = {
    src: PropTypes.string.isRequired, // `src` is required, so you might want to make sure it's always provided
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    pageTitle: PropTypes.string.isRequired
};

export default ButtonBanner;