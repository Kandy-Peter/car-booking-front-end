/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

export function SampleNextArrow(props) {
  const {
    className, style, onClick, onKeyPressHandler,
  } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#97BF0F',
        width: '60px',
        height: '40px',
        borderRadius: '50px 0 0 50px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '10px',
        position: 'absolute',
        right: '-65px',
        zIndex: 100,
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      Next
    </div>
  );
}

export function SamplePrevArrow(props) {
  const {
    className, style, onClick, onKeyPressHandler,
  } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#97BF0F',
        width: '60px',
        height: '40px',
        borderRadius: '0 50px 50px 0',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        paddingRight: '10px',
        position: 'absolute',
        left: '-5px',
        zIndex: 100,
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      Nex

    </div>
  );
}
