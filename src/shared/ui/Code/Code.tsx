import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-22-22.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
