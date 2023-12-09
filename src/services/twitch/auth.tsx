export const twitchAuth = async () => {
    try{
        const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_APP_TWITCH_CLIENT_ID}&client_secret=${import.meta.env.VITE_APP_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return await response.json();
    }
    catch(err){
        console.log(err)
    }
}


