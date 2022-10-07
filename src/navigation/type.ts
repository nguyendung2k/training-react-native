import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>
    Tabs: NavigatorScreenParams<TabBottomParamList>
    YourProfileScreen: undefined | {}
    BlockListScreen: undefined
    ChangePasswordScreen: undefined
    UpdateProfileScreen: undefined | {}
    WaitingForApprovalScreen: undefined
    FriendRequestScreen: undefined
    DetailCommunities: undefined | {}
    ForumScreen: undefined
    CommentForumScreen: undefined | {}
    NewPostScreen: undefined
}

export type HomeStackParamList = {
    HomeScreen: undefined
}

export type CommunityStackParamList = {
    CommunitiesScreen: undefined
}

export type AccountStackParamList = {
    AccountScreen: undefined
}

export type AuthStackParamList = {
    Login: undefined
    Register: undefined
    VerificationCode: undefined
    PersonalIntroduction: undefined
    ForgotPassword: undefined
    ListCommunity: undefined
    RegisterEnd: undefined
}

export type TabBottomParamList = {
    AccountStackScreen: NavigatorScreenParams<AccountStackParamList>
    CommunitiesStackScreen: NavigatorScreenParams<CommunityStackParamList>
    HomeStackScreen: NavigatorScreenParams<HomeStackParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>

export type HomeScreenProps<T extends keyof HomeStackParamList> =
    CompositeScreenProps<
        StackScreenProps<HomeStackParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

export type CommunitiesScreenProp<T extends keyof TabBottomParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<TabBottomParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

export type DetailCommunityScreenProp<T extends keyof HomeStackParamList> =
    CompositeScreenProps<
        StackScreenProps<HomeStackParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

export type CommentScreenProp<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>

export type AccountScreenProp<T extends keyof TabBottomParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<TabBottomParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

export type VerificationCodeProp<T extends keyof AuthStackParamList> =
    StackScreenProps<AuthStackParamList, T>

export type PersonalIntroductionProp<T extends keyof AuthStackParamList> =
    StackScreenProps<AuthStackParamList, T>

export type ListCommunityProp<T extends keyof AuthStackParamList> =
    StackScreenProps<AuthStackParamList, T>

export type RegisterEndProp<T extends keyof AuthStackParamList> =
    StackScreenProps<AuthStackParamList, T>
