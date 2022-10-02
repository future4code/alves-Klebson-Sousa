import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_Shows = "Lama_Shows"
    
    public toShowDBModel = (show: Show): IShowDB => {      
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }

        return showDB
    }

    public findShowByStartsAt = async (startsAt: Date): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_Shows)
            .select()
            .where({ starts_at:startsAt })

        return result[0]
    }

    public findShowById = async (showId: string): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_Shows)
            .select()
            .where({ id: showId })

        return result[0]
    }
    

    public insertShow = async (show: Show): Promise<void> => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_Shows)
            .insert(showDB)
    }

    public selectShows = async (): Promise<IShowDB[]> => {
        const showsDB: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_Shows)
        .select()
        return showsDB
    }

    
}