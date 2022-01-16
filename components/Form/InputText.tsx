import classNames from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useEffect, useState } from 'react';
import { Size } from 'types';

const formatDateWithHypens = (str: string) => {
  const clean = str.replace(/\-/gm, '');

  if (clean.length > 6) {
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`;
  }

  if (clean.length > 4) {
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}`;
  }

  return str;
};

const formatPhoneWithHyphens = (str: string) => {
  const clean = str.replace(/\-/gm, '');

  if (clean.length > 6) {
    return `${clean.slice(0, 3)}-${clean.slice(3, 6)}-${clean.slice(6, 10)}`;
  }

  if (clean.length > 3) {
    return `${clean.slice(0, 3)}-${clean.slice(3, 99)}`;
  }

  return str;
};

export const resolveInputClassNames = ({
  block = false,
  size,
  error = false,
  success = false,
  className = '',
}: InputProps) => {
  return classNames(
    className,
    'shadow-[0_1px_2px_rgba(55,65,81,0.08)] border focus-within:outline-none bg-white rounded transition-colors text-medium-dark placeholder:text-gray-medium',
    {
      'border-gray-light focus-within:border-medium-dark': !error && !success,
      'border-error': error,
      'border-success': success,

      'w-full': block,

      'py-2 px-2.5 text-sm leading-tight': size === undefined,
    }
  );
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  block?: boolean;
  size?: Size;
  error?: boolean;
  success?: boolean;
  clearable?: boolean;
};

const InputTextRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', clearable = false, value: initialValue, ...inputProps },
  ref
) => {
  const [value, setValue] = useState(initialValue);

  const formatValue = (value: string) => {
    let first = value.slice(0, -1);
    let last = value.slice(-1);

    if (type === 'number' || type === 'tel' || type === 'datetime-local' || type === 'date') {
      if (isNaN(Number(last))) {
        last = '';
      }
      last = last.replace(/\s/gm, '');
    }

    let newVal = first + last;

    if (type === 'datetime-local' || type === 'date') {
      newVal = formatDateWithHypens(newVal);
    }

    if (type === 'tel') {
      newVal = formatPhoneWithHyphens(newVal);
    }

    if (type === 'email') {
      newVal = newVal.toLowerCase().replace(/\s/gm, '');
    }

    return setValue(newVal);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      onChange={(e) => formatValue(e.target.value)}
      value={value}
      type={type}
      {...inputProps}
      ref={ref}
      className={resolveInputClassNames({ ...inputProps })}
    />
  );
};

// const InputTextRenderFunction: React.ForwardRefRenderFunction<TextInput, InputTextProps> = (props, ref) => {
//   const { type = 'text', onChangeText, style, clearable, ...rest } = props;

//   const keyboardType: KeyboardTypeOptions = (() => {
//     if (type === 'numeric' || type === 'date') {
//       return 'numeric';
//     }

//     if (type === 'phone') {
//       return 'phone-pad';
//     }

//     return 'default';
//   })();

//   const onChangeTextOverride = (val) => {
//     let first = val.slice(0, -1);
//     let last = val.slice(-1);

//     if (type === 'numeric' || type === 'phone' || type === 'date') {
//       if (isNaN(Number(last))) {
//         last = '';
//       }
//       last = last.replace(/\s/gm, '');
//     }

//     let newVal = first + last;

//     if (type === 'date') {
//       return onChangeText(formatDateWithHypens(newVal));
//     }

//     if (type === 'phone') {
//       return onChangeText(formatPhoneWithHyphens(newVal));
//     }

//     if (type === 'email') {
//       newVal = newVal.toLowerCase().replace(/\s/gm, '');
//       return onChangeText(newVal);
//     }

//     return onChangeText(newVal);
//   };

//   return (
//     <RN.View style={{ position: 'relative' }}>
//       {clearable && (
//         <RN.Pressable
//           onPress={() => {
//             onChangeText('');
//             ref?.current?.focus();
//           }}
//           style={{
//             cursor: 'pointer',
//             position: 'absolute',
//             right: 5,
//             fontSize: 30,
//             color: color('charcoal'),
//             top: '50%',
//             transform: [{ translateY: '-50%' }, { rotate: '45deg' }],
//           }}>
//           <>+</>
//         </RN.Pressable>
//       )}

//       <StyledInputText
//         placeholderTextColor={color('mediumGray')}
//         style={styles}
//         ref={ref}
//         enterKeyHint="enter"
//         keyboardType={keyboardType}
//         secureTextEntry={type === 'password'}
//         {...rest}
//         onChangeText={onChangeTextOverride}
//       />
//     </RN.View>
//   );
// };

export const InputText = forwardRef(InputTextRenderFunction);
