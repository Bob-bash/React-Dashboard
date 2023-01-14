const inistate={
    darkcolors:{
        maincolor:'rgba(19,27,45,255)',
        sidebackcolor:'rgba(30,41,63,255)',
        sidebackcolor1:'rgba(242,241,241,255)',
        greencolor:'rgba(105,196,181,255)',
        purplecolor:'rgba(105,111,246,255)',
        whitecolor:'white',
        blackcolor:'black',
        faqbackcolor:'rgba(35,35,35,255)',
        formbackcolor:'rgba(47,53,68,255)',
        formbtnbackcolor:'rgba(75,202,168,255)',
        eventsbackcolor:'rgba(28,41,64,255)',
        eventbackcolor:'rgba(75,205,171,255)',
        lightwhitecolor:'rgba(255,255,255,.2)'
    },
    backcolorswitch:true,

}

export default function reducer( state = inistate, action ) {
	switch ( action.type ) { 
        case "DARKCOLORS": return { darkcolors : action.payload}
        case "BACKCOLORSWITCH": return { backcolorswitch:!state.backcolorswitch}
	default : return state
}
}