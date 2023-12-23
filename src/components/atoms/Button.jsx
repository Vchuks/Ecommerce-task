import PropTypes from 'prop-types'

const Button = ({className, onClick, body}) => {
  return (
    <button className={className} onClick={onClick}>
      {body}
    </button>
  )
}

Button.propTypes = {
    className: PropTypes.string,
    body: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
export default Button
