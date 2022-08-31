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
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
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
        <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
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

function IconCoin({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M16 19c7.18 0 13-2.686 13-6s-5.82-6-13-6S3 9.686 3 13s5.82 6 13 6zM16 19v6"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M3 13v6c0 3 5 6 13 6s13-3 13-6v-6M24 17.763v6M8 17.763v6"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconTwitter({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M26.23 12.77l-.258.259-.032.363C25.232 21.61 18.298 28 10 28c-1.723 0-3.05-.275-4-.75h0c-.75-.375-.997-.745-1-.75h.002c.05-.02 3.203-1.222 5.283-3.575l.736-.832-.905-.645a12.7 12.7 0 01-2.865-2.822H7.25C5.678 16.49 3.959 12.727 5 7h0l.001.001c.055.055 4.38 4.333 9.746 5.731l1.251.326.001-1.293.001-.761A5.04 5.04 0 0121.066 6a5.015 5.015 0 014.266 2.5l.289.5H30l-3.77 3.77zM5 7h0s0 0 0 0z"
                stroke="#406FF1"
                strokeWidth={2}
            />
        </Svg>
    )
}
function IconFacebook({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M21 11h-2a3 3 0 00-3 3v14M12 18h8"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconCopy({ stroke, ...props }: any) {
    return (
        <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
            <Path
                d="M11.813 11.812h3.374v-9h-9v3.375"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M11.813 6.187h-9v9h9v-9z"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconUserCircle({ stroke, props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 20a5 5 0 100-10 5 5 0 000 10zM7.975 24.922a9.004 9.004 0 0116.05 0"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconProhibit({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                stroke="#191B1D"
                strokeWidth={1.5}
                strokeMiterlimit={10}
            />
            <Path
                d="M7.515 7.515l16.97 16.97"
                stroke="#191B1D"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconLockKeyOpen({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M15.999 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM15.999 20v3"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M25.999 11h-20a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V12a1 1 0 00-1-1zM11.499 11V6.5a4.5 4.5 0 119 0"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconSignOut({ stroke, ...props }: any) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M21.751 10.75L27 16l-5.249 5.25M13 16h13.996M13 27H6a1 1 0 01-1-1V6a1 1 0 011-1h7"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconWarning({ stroke, ...props }: any) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 8.125v3.125M8.918 3.124L2.045 14.998a1.25 1.25 0 001.082 1.876h13.746a1.25 1.25 0 001.082-1.876L11.082 3.124a1.25 1.25 0 00-2.164 0v0z"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10 15a.937.937 0 100-1.875A.937.937 0 0010 15z"
                fill="#FF4C41"
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
    IconCoin,
    IconTwitter,
    IconFacebook,
    IconCopy,
    IconUserCircle,
    IconProhibit,
    IconLockKeyOpen,
    IconSignOut,
    IconWarning,
}
