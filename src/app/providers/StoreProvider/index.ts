import StoreProvider from './ui/StoreProvider';
import type {
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider,
    StateSchema,
    StateSchemaKey,
};

export type{
    ReduxStoreWithManager,
    createReduxStore,
    AppDispatch,
    ThunkConfig,
};
