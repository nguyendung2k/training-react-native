import { StackNavigationProp } from '@react-navigation/stack'
export type RootStackParamList = {
    YourProfileScreen: undefined
    FriendRequestScreen: undefined
    BlockListScreen: undefined
    ChangePasswordScreen: undefined
    UpdateProfileScreen: undefined
    WaitingForApprovalScreen: undefined
    DetailCommunities?: { id: string }
    CommentForumScreen?: { id: string | undefined }
    NewPostScreen: undefined
    ForumScreen: undefined
    Home: undefined
    AccountScreen: undefined
    RegisterEnd: undefined
    ResetSuccessfully: undefined
    Login: undefined
    Register: undefined
    PersonalIntroduction: undefined
    ListCommunity: undefined
    VerificationCode: undefined
}

export type stackScreenProp = StackNavigationProp<RootStackParamList>
