import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Eye({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M16 6.999C6 6.999 2 16 2 16s4 8.999 14 8.999S30 16 30 16s-4-9.001-14-9.001z"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 21a5 5 0 100-10 5 5 0 000 10z"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function EyeSlash({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M6 5l20 22M19.363 19.7a5 5 0 01-6.726-7.4"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.25 8.574C4.152 11.155 2 16 2 16s4 9 14 9a14.753 14.753 0 006.75-1.575M26.076 21.138C28.801 18.697 30 16 30 16s-4-9-14-9c-.866-.002-1.73.068-2.585.21M16.94 11.089a5.003 5.003 0 014.038 4.44"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function ArrowRight({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M5 16h22M18 7l9 9-9 9"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconCheck({ stroke, ...props }: any) {
    return (
        <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
            <Path
                d="M17.375 5.625l-8.75 8.75-4.375-4.374"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IConBack({ stroke, ...props }: any) {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.5 22.75L8.75 14l8.75-8.75"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconHome({ stroke, ...props }: any) {
    return (
        <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
            <Path
                d="M30.007 15.415L18.756 5.187a1.125 1.125 0 00-1.514 0L5.993 15.415a1.126 1.126 0 00-.368.833V29.25a1.125 1.125 0 001.125 1.125h22.5a1.125 1.125 0 001.125-1.125V16.248a1.126 1.126 0 00-.368-.833z"
                stroke={stroke}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconCommunities({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M13 6H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zM13 18H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zM25 6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1z"
                stroke={stroke}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconUser({ stroke, ...props }: any) {
    return (
        <Svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18 22.5a9 9 0 100-18 9 9 0 000 18z"
                stroke={stroke}
                strokeWidth={2.5}
                strokeMiterlimit={10}
            />
            <Path
                d="M4.358 30.374a15.755 15.755 0 0127.284 0"
                stroke={stroke}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export {
    Eye,
    EyeSlash,
    ArrowRight,
    IconCheck,
    IConBack,
    IconHome,
    IconCommunities,
    IconUser,
}
