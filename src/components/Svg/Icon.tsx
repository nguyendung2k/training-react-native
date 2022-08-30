import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ stroke, ...props }: any) {
    return (
        <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
            <Path
                d="M3.625 10h13.75M11.75 4.375L17.375 10l-5.625 5.625"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

// f ....,

export { SvgComponent }
