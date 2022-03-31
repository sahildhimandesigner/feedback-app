import PropType from "prop-types";

function Header({ text, bgColor, textColor }){

    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
        padding: '2px 20px',
    }

    return(
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#FF6a95'
}

Header.prototype = {
    text: PropType.string,
    bgColor: PropType.string,
    textColor: PropType.string,
}

export default Header;