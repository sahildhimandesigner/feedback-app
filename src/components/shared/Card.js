import PropTypes from 'prop-types'

function Card({ children, reverse}) {
    // return <div className="card">{children}</div>    

    return (
        <div className="card"
            style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#FFF',
                color: reverse ? '#FFF' : '#000',
            }}
        >
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.protoTypes = {
    children: PropTypes.node.isRequired
}

export default Card;