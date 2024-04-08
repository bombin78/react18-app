import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    // С большой буквы, потому что компонент
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
    } = props;

    return (
        <Svg
            className={classNames(
                inverted ? cls.inverted : cls.icon,
                {},
                [className],
            )}
        />
    );
});
