import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	animationDelay: number;
}

export function useModal(props: UseModalProps) {
    const {
        onClose,
        isOpen,
        animationDelay,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    // Первый вариант решения - добавление | null, чтобы задать изменяемый тип для
    // результата useRef, в противном случае свойство timerRef.current будет readonly.
    // const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    // Второй вариант решения - это указание изменяемости через утверждение типа.
    // Это позволяет не указывать значение null по умолчанию и избежать дополнительных
    // проверок на null в дальнейшем (смотри ниже по коду).
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    // Здесь необходимо использовать KeyboardEvent из ts
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            // Для варианта с null необходимо сделать проверку на null
            // (const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null))
            // if (timerRef.current !== null) {
            //     clearTimeout(timerRef.current);
            //     window.removeEventListener('keydown', onKeyDown);
            // }
            // но мы сделали явное преобразование через as (смотри выше по коду)
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
