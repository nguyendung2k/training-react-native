import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface buttonActiveLogsProps {
    name?: string
    content?: string
    time?: string
    active?: boolean
    Icon?: () => JSX.Element
}

const ButtonActiveLogs = ({
    name,
    content,
    active,
    time,
    Icon,
}: buttonActiveLogsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.dotNotification}>{!!Icon && <Icon />}</View>
                <Text style={styles.content}>
                    <Text
                        style={{ color: COLORS.Neutral10, fontWeight: 'bold' }}
                    >
                        {name}{' '}
                    </Text>{' '}
                    {content}
                </Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )
}

export default ButtonActiveLogs

const styles = StyleSheet.create({
    container: {},
    body: { marginLeft: 14 },
    dotNotification: {},
    content: {
        fontSize: SIZES.small,
        color: COLORS.Neutral6,
        width: 300,
        marginLeft: 90,
        flexDirection: 'column',
    },
    time: {
        color: COLORS.Neutral6,
        fontSize: SIZES.minismall,
        marginTop: 8,
        marginLeft: 90,
    },
})
