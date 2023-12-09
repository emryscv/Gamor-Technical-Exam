export async function getGame(name: string) {
    try {
        const response = await fetch(`https://api.twitch.tv/helix/games?name=${name}`, {
            headers: {
                'Client-ID': import.meta.env.REACT_APP_TWITCH_CLIENT_ID,
                'Authorization': 'Bearer ' + import.meta.env.REACT_APP_TWITCH_ACCESS_TOKEN
            }
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}