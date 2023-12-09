export const getStreams = async (game_id : string, first: number) => {
    try{
        const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=${game_id}&first=${first}`, {
            method: 'GET',
            headers: {
                'Client-ID': import.meta.env.VITE_APP_TWITCH_CLIENT_ID,
                'Authorization': `Bearer ${localStorage.getItem('twitchToken')}`
            }
        })

        return await response.json();
    }
    catch(err){
        console.log(err)
    }
}