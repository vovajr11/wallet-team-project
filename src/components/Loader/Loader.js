// import { NavLink } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { LoaderW } from './Loader.style';

const Loader = () => {
    return (
        <LoaderW>
            <Oval height={45} width={45} />
        </LoaderW>
    );
};

export default Loader;
