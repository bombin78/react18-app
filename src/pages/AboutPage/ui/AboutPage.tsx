import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('About us page')}
        </Page>
    );
});

export default AboutPage;
