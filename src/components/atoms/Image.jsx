import PropTypes from 'prop-types'

const Image = ({src, className, alt}) => {
  return (
    <img src={src} className={className} alt={alt} />
  )
}

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string
}

export default Image
