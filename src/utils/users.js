export const getFriends = (allUsers, selectedUser) => {
    return allUsers.filter(user => selectedUser.friends.includes(user.id))
}

export const getFriendsOfFriends = (allUsers, selectedUser) => {
    return allUsers.filter(user => {
        return (user.id !== selectedUser.id) && (!selectedUser.friends.includes(user.id)) && (
            user.friends.filter(friend => selectedUser.friends.includes(friend)).length
        )
    })
}

export const getSuggestedFriends = (friendsOfFriends, selectedUser) => {
    return friendsOfFriends.filter(friendOfFriends => friendOfFriends.friends.filter(friend => selectedUser.friends.includes(friend)).length > 1)
}