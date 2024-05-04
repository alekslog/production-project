import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // ЧТО ТЕЛЕПОРТИРУЕМ
    element?: HTMLElement // КУДА ТЕЛЕПОРТИРУЕМ
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
