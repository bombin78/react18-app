import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children?: ReactNode;
    direction?: DropdownDirection;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        trigger,
        children,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.popover, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(
                    cls.panel,
                    {},
                    menuClasses,
                )}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
