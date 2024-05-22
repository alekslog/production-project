import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setvalue] = useState('');

    const onChange = (val:string) => {
        setvalue(val);
    };

    return (
        <div>
            {t('Главная страница')}

        </div>
    );
};

export default MainPage;
