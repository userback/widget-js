import React from 'react';
import { UserbackFunctions, UserbackOptions, UserbackWidgetSettings } from '@userback/widget';
export interface UserbackReactProps {
    token: string;
    options?: UserbackOptions;
    widgetSettings?: UserbackWidgetSettings;
    delayInit?: boolean;
}
/**
 * UserbackProider
 *
 * @example `<UserbackProvider token={UB_TOKEN} ><MyRouter /></UserbackProvider>`
 * @returns React.Component
 */
export declare const UserbackProvider: React.FC<React.PropsWithChildren<UserbackReactProps>>;
export declare const useUserbackContext: () => UserbackFunctions;
export declare const useUserback: () => UserbackFunctions;
export interface WithUserbackProps {
    userback: UserbackFunctions;
}
/**
 * A higher Ordered Component for using hooks within a class based component
 * */
export declare function withUserback<T extends WithUserbackProps = WithUserbackProps>(Component: React.ComponentType<T>): (props: Omit<T, keyof WithUserbackProps>) => React.JSX.Element;
