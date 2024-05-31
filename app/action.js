"use server"

export async function load(prevState, formData) {
    console.log(formData.get("team"))
    
    return {
        team: prevState.allTeams[formData.get("team")],
        allTeams: prevState.allTeams,
        idx: formData.get("team"),
    }
    
}