import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppDispatch, RootState } from "@redux/store";
import { COLORS } from "@theme";
import { DetailCommunityScreenProp } from "@navigation/type";
import {
  changeAttendGroup,
  changeLeavingGroup,
  filterMemberByCondition,
  getDataMember,
  searchMemberByTitle,
  showModal,
} from "@redux";
import { InputComponent } from "@components/Input";
import { ConditionModal } from "@components/Modal";
import { Header, HeaderSlide } from "@components/Header";
import {
  IConBack,
  IconInfo,
  IconSearch,
  IconSearchDetail,
} from "@components/Svg";
import { Banner, BannerForum } from "@components/Banner";
import { ListMember } from "@components/ListView";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

const dataMemberSelector = (state: RootState) => state.member.members;
const showConditionModal = (state: RootState) => state.home.modal;
const dataGroupSelector = (state: RootState) => state.group.groups;

interface dataUser {
  id?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  age?: number;
  gender?: boolean;
  description?: string;
  introduction?: string;
  introduce_code?: number;
  image?: string;
  total_follow?: number;
}

export const HeaderFlatList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const idParamDetail = useRoute().params;
  const navigation =
    useNavigation<DetailCommunityScreenProp<"HomeScreen">["navigation"]>();
  const dataGroup = useSelector(dataGroupSelector);
  const modal = useSelector(showConditionModal);
  const [textValue, setTextValue] = useState<string>("");

  const handleShowOrHideModalCondition = () => {
    dispatch(showModal({ showModal: !modal.showModal }));
  };

  const handleChangeValueInputSearch = (value: string) => {
    setTextValue(value);
    dispatch(searchMemberByTitle(value));
  };

  const handleFilter = (
    ageMin: string,
    ageMax: string,
    statusGender: boolean
  ) => {
    if (!!ageMin && !!ageMax && !!statusGender) return;
    dispatch(filterMemberByCondition({ ageMin, ageMax, statusGender }));
  };

  const handleLeavingGroup = (id: any) => {
    const newDataGroup = [...dataGroup];
    newDataGroup.forEach((item, index) => {
      if (item.id == id) {
        newDataGroup[index] = {
          ...newDataGroup[index],
          joinGr: false,
          total_members: newDataGroup[index].total_members - 1,
        };
      }
    });
    dispatch(changeLeavingGroup({ newDataGroup, id }));
  };

  const handleParticipateGroup = (id: any) => {
    const newDataGroup = [...dataGroup];
    newDataGroup.forEach((item, index) => {
      if (item.id == id) {
        newDataGroup[index] = {
          ...newDataGroup[index],
          joinGr: true,
          total_members: newDataGroup[index].total_members + 1,
        };
      }
    });
    dispatch(changeAttendGroup({ newDataGroup, id }));
  };
  return (
    <>
      <Banner
        onPressLeaving={() => handleLeavingGroup(idParamDetail)}
        onPressParticipate={() => handleParticipateGroup(idParamDetail)}
      />
      <BannerForum
        title="Real-time Forum"
        des="Join now to give real-time PR about yourself"
        Icon={() => <IconInfo stroke={COLORS.Primary} />}
        onDirection={() => navigation.navigate("ForumScreen")}
      />

      <HeaderSlide title="Members" />

      <View style={styles.input}>
        <InputComponent
          placeholder="Search by Name"
          IconSearch={<IconSearchDetail stroke={COLORS.Neutral10} />}
          inputSearch
          style={styles.search}
          styleSearchInput={styles.iconSearch}
          value={textValue}
          onPress={handleShowOrHideModalCondition}
          onChangeText={handleChangeValueInputSearch}
          Icon={<IconSearch />}
        />

        <View style={styles.modal}>
          {modal.showModal && <ConditionModal onPress={handleFilter} />}
        </View>
      </View>
    </>
  );
};

const DetailCommunities = () => {
  const navigation =
    useNavigation<DetailCommunityScreenProp<"HomeScreen">["navigation"]>();
  const dispatch = useDispatch<AppDispatch>();
  const member = useSelector(dataMemberSelector);
  useEffect(() => {
    dispatch(getDataMember());
  }, []);

  const handleChangeUser = (id: string) => {
    navigation.navigate("YourUserScreen", id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          onPress={() => navigation.goBack()}
          Icon={() => <IConBack stroke={COLORS.Neutral10} />}
        />
      </View>
      <KeyboardAwareFlatList
        style={styles.content}
        showsVerticalScrollIndicator={false}
        data={member}
        renderItem={({ item }: any) => {
          return (
            <ListMember
              item={item}
              onChangeUser={() => handleChangeUser(item.id)}
            />
          );
        }}
        ListHeaderComponent={HeaderFlatList}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DetailCommunities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Neutral0,
  },
  header: {
    marginHorizontal: 18,
  },
  content: {
    marginHorizontal: 24,
  },
  input: {
    marginBottom: 12,
  },
  modal: {
    marginTop: 10,
  },
  search: {
    width: "100%",
    paddingLeft: 61,
    paddingBottom: 16,
    paddingTop: 20,
    height: 58,
  },
  iconSearch: {
    position: "absolute",
    zIndex: 100,
    paddingTop: 35,
    paddingLeft: 17,
  },
});
