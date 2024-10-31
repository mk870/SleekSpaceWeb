import React from "react";
import { textGray } from "../../Colors/colors";

type Props = {
  label?: string;
  value: string|number;
  height?: string;
  width?: string;
  placeHolder?: string;
  type: "number" | "text";
  borderColor?: string;
  valueType:
    | "password"
    | "givenName"
    | "familyName"
    | "search"
    | "email"
    | "default";
  setValue: React.Dispatch<React.SetStateAction<string|number>>;
};

const InputField: React.FC<Props> = ({
  label,
  value,
  setValue,
  height,
  width,
  type,
  valueType,
  borderColor,
  placeHolder,
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      {label && <span>{label}</span>}
      <input
        className="font-sans text-[13px] text-textGray"
        style={{
          border: `1px solid ${borderColor ? borderColor : textGray}`,
          borderRadius: 7,
          paddingLeft: 7,
          width: width ? width : "100%",
          height: height ? height : 40,
        }}
        type={type}
        placeholder={placeHolder ? placeHolder : ""}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
};

export default InputField;
