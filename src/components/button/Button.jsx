const Button = ({ children }) => {
  // ({ text }) es equivalente a const { text } = props; Lo que estamos haciendo es una desestructuración

  return <button>{children}</button>;
};

export default Button;
