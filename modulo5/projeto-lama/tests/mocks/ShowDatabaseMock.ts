import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IShowDB, Show } from "../../src/models/Show";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_Shows = "Lama_Shows";

  public toShowDBModel = (show: Show): IShowDB => {
    console.log("aqui");
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
    };

    return showDB;
  };

  public findShowByStartsAt = async (
    startsAt: Date
  ): Promise<IShowDB | undefined> => {
   
    switch (startsAt) {
      case new Date("2022-12-06"):
        return {
          id: "201",
          band: "Coragem",
          starts_at: new Date("2022-12-06"),
        };

      default:
        return undefined;
    }
  };

  public findShowById = async (
    showId: string
  ): Promise<IShowDB | undefined> => {
 
    switch (showId) {
      case "201":
        return {
          id: "201",
          band: "Coragem",
          starts_at: new Date("2022-12-06"),
        };
      case "202":
        return {
          id: "202",
          band: "Coragem2",
          starts_at: new Date("2022-12-07"),
        };

      default:
        return undefined;
    }
  };

  public insertShow = async (show: Show): Promise<void> => {};

  public selectShows = async (): Promise<IShowDB[]> => {

    const shows: IShowDB[] = [
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
      },
    ];
    return shows;
  };  

  public getLikes = async (postId: string): Promise<number> => {
   

    if (postId == "201") return 1;

    return 0;
  };

  public deletePost = async (postId: string): Promise<void> => {
 
  };

  public removeLike = async (postId: string, userId: string): Promise<void> => {

  };
}
