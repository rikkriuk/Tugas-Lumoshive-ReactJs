const Button = (props) => {
  const { type = "button", children, className = "btn btn-primary", onClick, id } = props;

  const handleClick = (e) => {
    if (id && onClick) {
      onClick(id);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
