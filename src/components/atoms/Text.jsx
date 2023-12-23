import PropTypes from 'prop-types'

const Text = ({className, body}) => {
  return (
    <p className={className}>{body}</p>
  )
}

Text.propTypes = {
    className: PropTypes.string,
    body: PropTypes.node
}
export default Text
