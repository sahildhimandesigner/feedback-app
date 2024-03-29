import PropTypes from 'prop-types'
import { version } from 'react-dom';

function Button({children, type, version, isDisabled}){
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled: false
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;