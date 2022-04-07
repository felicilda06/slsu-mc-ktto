import React from "react";

type TType = `text` | `number` | `radio` | `checkbox` | `date`;

interface TextfieldProps {
  id: string;
  index?: string;
  className?: string;
  value: string;
  label?: string;
  type: TType;
}

const Textfield: React.FC<TextfieldProps> = ({
  id,
  type,
  value,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input {...props} type={type} className={className} value={value} />
    </div>
  );
};

export default Textfield;
