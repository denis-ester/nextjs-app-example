import React, { useRef, useEffect, useState, ReactNode } from 'react';
import cn from 'classnames';

import {
  Accordion as StyledAccordion,
  AccordionContent,
} from './styledComponents';

import { AccordionTitle } from '../../atoms';

interface IAccordionProps {
  header?: ReactNode[] | JSX.Element | string[] | string;
  children?: ReactNode[] | JSX.Element | string[] | string;
  className?: string;
  isOpen?: boolean;
}

const AccordionItem = ({
  header,
  children,
  className,
  isOpen = false,
}: IAccordionProps) => {
  const [isActive, setIsActive] = useState<boolean>(isOpen);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  const content = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (content && content.current) {
      setMaxHeight(isActive ? `${content.current.scrollHeight}px` : '0px');
    }
  }, [toggleAccordion]);

  return (
    <StyledAccordion className={cn({ active: isActive }, [className])}>
      <AccordionTitle onClick={toggleAccordion} isActive={isActive}>
        {header}
      </AccordionTitle>

      <AccordionContent ref={content} style={{ maxHeight: `${maxHeight}` }}>
        {children}
      </AccordionContent>
    </StyledAccordion>
  );
};

export default AccordionItem;
