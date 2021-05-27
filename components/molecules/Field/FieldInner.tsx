import React from 'react';

import { FieldProps } from './Field';

import { Input, Textarea, Checkbox } from '../../atoms';

const FieldInner = ({ type, refName, ...rest }: FieldProps<any>) => {
  switch (type) {
    case `textarea`: {
      return <Textarea type={type} refName={refName} {...(rest as any)} />;
    }
    case 'checkbox': {
      return <Checkbox type={type} refName={refName} {...(rest as any)} />;
    }

    default: {
      return <Input type={type} refName={refName} {...(rest as any)} />;
    }
  }
};

export default FieldInner;
