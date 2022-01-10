import React from 'react';
import { ReactHTMLElementProps } from 'types';

const styles = /* CSS */ `
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  max-width: 100%;
  display: block;
  height: 24px;
  padding: 0 10px;
  background: #fff;
  overflow: hidden;
  line-height: 22px;
  font-size: 13px;
  border-radius: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  border: 1px solid #D5D5D5;
  background-image: url(images/select-arrow.png);
  background-position: 96% 50%;
  background-repeat: no-repeat;
}
`;

type SelectProps = ReactHTMLElementProps<HTMLSelectElement> & {
  // rest of the props here...
};

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <>
      <div className="container">
        <div className="select">
          <select>
            <option>Aw yeah.</option>
            <option>You should pick me instead.</option>
            <option>I think I'm the better option!</option>
          </select>
        </div>
      </div>
      <style>{styles}</style>
    </>
  );
};
