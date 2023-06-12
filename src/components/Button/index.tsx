import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageStyles?: React.CSSProperties;
  imageClassNames?: string;
  rtl?: boolean;
}

const Button = ({
  disabled = false,
  imageSrc,
  text,
  rtl = true,
  imageAlt,
  imageStyles,
  imageClassNames,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {rtl ? (
        <>
          {text}
          <img
            src={imageSrc}
            alt={imageAlt}
            style={imageStyles}
            className={imageClassNames}
          />
        </>
      ) : (
        <>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={imageStyles}
            className={imageClassNames}
          />
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
