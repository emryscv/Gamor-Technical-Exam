export async function getTopGames(){
    try{
        const response = await fetch(`https://api.twitch.tv/helix/games/top?first=100`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('twitchToken')}`,
                'Client-Id' : import.meta.env.VITE_APP_TWITCH_CLIENT_ID
            }
        })

        return response.json();
    }
    catch(err){
        console.log(err);
    }
}