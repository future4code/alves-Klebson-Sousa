import { IUserDB, USER_ROLES } from "../models/User"
import { IShowDB, ITicketDB } from "../models/Show"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]
export const shows: IShowDB[] = [
    {
        id: "201",
        band: "Coragem",
        starts_at: new Date("2022-12-06"),        
    },
    {
        id: "202",
        band: "Sorte",
        starts_at: new Date("2022-12-07"),        
    },
    {
        id: "203",
        band: "Percistente",
        starts_at: new Date("2022-12-08"),        
    }
    
]
export const tickets: ITicketDB[] = [
    {
        id: "301",
        show_id: "201",
        user_id: "101",        
    },
    {
        id: "302",
        show_id: "202",
        user_id: "102",        
    },
    {
        id: "303",
        show_id: "203",
        user_id: "103",        
    }
    
]