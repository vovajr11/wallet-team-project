// import { NavLink } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { LoaderW, LoaderOverlay } from './Loader.style';

const Loader = ({
    fullscreen,
    height = 45,
    width = 45,
    primaryColor = '#4A56E2',
    secondaryColor = '#24CCA7',
}) => {
    return (
        <LoaderOverlay fullscreen={fullscreen}>
            <LoaderW
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
            >
                <Oval height={height} width={width} />
            </LoaderW>
        </LoaderOverlay>
    );
};

export default Loader;
