import {type TextProps, StyleSheet} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {Href, Link} from "expo-router";

export type ThemedLinkProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    href: Href<string | object>;
    text: string;
};

export function ThemedLink({
                               style,
                               lightColor,
                               darkColor,
                               href,
                               text
                           }: ThemedLinkProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Link
            href={href}
            style={[
                {color},
                styles.default,
                style
            ]}
        >{text}</Link>
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: 42,
        textAlign: 'center',
        padding: 15
    }
});
