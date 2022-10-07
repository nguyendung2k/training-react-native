import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { changeGroupByToJoin, RootState } from '@redux'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '@theme'
import { ListCommunityProp } from '@navigation/type'
import { HeaderAuth } from '@components/Header'
import { ListCommunityView } from '@components/ListView'
import { ButtonForm } from '@components/Button'

interface community {
    id: string
}

const listGroupSelector = (state: RootState) => state.group.groups
const dataChooseGroup = (state: RootState) => state.group.groupChoose

const ListCommunity = ({ id }: community) => {
    const dispatch = useDispatch()
    const navigation =
        useNavigation<ListCommunityProp<'RegisterEnd'>['navigation']>()
    const listGroup = useSelector(listGroupSelector)
    const checkJoinGroup = useSelector(dataChooseGroup)
    const isCheck = checkJoinGroup.includes(id)

    const handleChooseGroup = (id: string) => {
        dispatch(changeGroupByToJoin(id))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 24 }}>
                <HeaderAuth
                    title="Getting started"
                    description="Join your communities"
                    number="2"
                    txtContent="Choose communities you prefer"
                    txtEnd="(Up to 3 communities - 0/3)"
                    primary
                />
                <FlatList
                    data={listGroup}
                    renderItem={({ item }) => (
                        <ListCommunityView
                            onPress={handleChooseGroup}
                            item={item}
                            showBox={true}
                            check={isCheck}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.btn}>
                    <ButtonForm
                        label="Next"
                        disabled={checkJoinGroup.length < 3}
                        disable={checkJoinGroup.length < 3}
                        onPress={() => navigation.navigate('RegisterEnd')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ListCommunity

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: COLORS.Neutral0,
    },
    btn: {
        marginTop: 'auto',
        marginBottom: 30,
        paddingTop: 32,
    },
})
