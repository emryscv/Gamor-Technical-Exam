import { twitchAuth } from "../services/twitch/auth";

export function useTwitchAuth(){
    const authWithTwitch = async () => {
        const response = await twitchAuth();
        localStorage.setItem('twitchToken', response.access_token);
        console.log(response.access_token);
        console.log(localStorage.getItem("twitchToken"));
    }

    return {authWithTwitch}
}