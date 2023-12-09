export async function getUser(id: string) {
    try {
        const response = await fetch(`https://api.twitch.tv/helix/users?id=${id}`, {
            method: 'GET',
            headers: {
                'Client-ID': import.meta.env.VITE_APP_TWITCH_CLIENT_ID,
                'Authorization': `Bearer ${localStorage.getItem('twitchToken')}`
            }
        })

        return await response.json();
    }
    catch (err) {
        console.log(err)
    }
}