import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { RoutePath } from '@/shared/const/router';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.commentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            max
            gap="8"
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink
                className={cls.header}
                to={`${RoutePath.profile}${comment.user.id}`}
            >
                {comment.user.avatar
                    ? <Avatar size={30} src={comment.user.avatar} />
                    : null}

                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </VStack>
    );
});
