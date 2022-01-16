import { cloneElement, createContext, FC, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { FieldLabel } from 'components/Form/FieldLabel';
import { ID } from 'utils/StringUtils';

export const FieldContext = createContext<{
  setErrorText: (errorText: ReactNode) => void;
  setSuccessText: (successText: ReactNode) => void;
}>({
  setErrorText: () => {},
  setSuccessText: () => {},
});

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  helpText?: ReactNode;
  errorText?: ReactNode;
  successText?: ReactNode;
  isLast?: boolean;
  children: JSX.Element;
};

/**
 * Based on https://www.figma.com/file/YZffgfW00dKOEqKSZhq7fR/2-Components?node-id=3%3A4
 */
export const Field: FC<FieldProps> = ({
  label,
  helpText,
  errorText: errorTextProp,
  successText: successTextProp,
  children,
  ...fieldProps
}) => {
  const [errorText, setErrorText] = useState(errorTextProp);
  const [successText, setSuccessText] = useState(successTextProp);

  useEffect(() => {
    setErrorText(errorTextProp);
  }, [errorTextProp]);

  useEffect(() => {
    setSuccessText(successTextProp);
  }, [successTextProp]);

  const idForLabel = useRef(ID());

  return (
    <FieldContext.Provider value={{ setErrorText, setSuccessText }}>
      <div className="mb-4 last:mb-0" {...fieldProps}>
        {label !== undefined && <FieldLabel htmlFor={idForLabel.current}>{label}</FieldLabel>}
        {cloneElement(children, {
          id: idForLabel.current,
          error: errorText !== undefined,
          success: successText !== undefined,
        })}
        {errorText !== undefined && <div className="mt-1 text-xs leading-4 text-error">{errorText}</div>}
        {successText !== undefined && <div className="mt-1 text-xs leading-4 text-success">{successText}</div>}
        {helpText !== undefined && <div className="mt-1 text-xs leading-4 text-medium-dark">{helpText}</div>}
      </div>
    </FieldContext.Provider>
  );
};
