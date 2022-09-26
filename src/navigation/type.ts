import { StackNavigationProp } from '@react-navigation/stack'
export type RootStackParamList = {
    YourProfileScreen: undefined
    FriendRequestScreen: undefined
    BlockListScreen: undefined
    ChangePasswordScreen: undefined
    UpdateProfileScreen: undefined
    WaitingForApprovalScreen: undefined
    DetailCommunities?: { id: string }
    CommentForumScreen: { id: string }
    NewPostScreen: undefined
    ForumScreen: undefined
    Home: undefined
    Account: undefined
}

export type stackScreenProp = StackNavigationProp<RootStackParamList>
