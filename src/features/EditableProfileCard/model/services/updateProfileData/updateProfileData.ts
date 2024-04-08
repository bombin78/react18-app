import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            // Внутри AsyncThunk для получения данных из state используем не useSelector, а getState
            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`,
                    formData,
                );

                if (!response.data) {
                    throw new Error();
                }

                // По умолчанию, возвращаемые данные оборачиваются в thunkAPI.fulfillWithValue()
                return response.data;
            } catch (e) {
                console.log(e);
                // Используйте "e.response.data" в качестве "action.payload" для "rejected"
                // действия, явно возвращая его с помощью утилиты "rejectWithValue()":
                // thunkAPI.rejectWithValue(e.response.data);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
