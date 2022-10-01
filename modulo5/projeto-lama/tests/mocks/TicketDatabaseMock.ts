import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ITicketDB } from "../../src/models/Show";

export class TicketDatabaseMock extends BaseDatabase {
  public static TABLE_Tickets = "Lama_Tickets";

  public selectTickets = async (
    showId: string
  ): Promise<number | undefined> => {
    // const result: any = await BaseDatabase.connection(
    //   TicketDatabase.TABLE_Tickets
    // )
    //   .select()
    //   .count("id AS tickets")
    //   .where({ show_id: showId });

    // return result[0].tickets as number;
    switch (showId) {
      case "201":
        return 1;
      default:
        return undefined;
    }
  };

  public findTicket = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    // const ticketsDB: ITicketDB[] = await BaseDatabase.connection(
    //   TicketDatabase.TABLE_Tickets)
    //   .select()
    //   .where({ show_id: showId })
    //   .andWhere({ user_id: userId });

    // return ticketsDB[0];
    switch (showId && userId) {
      case "201" && "101":
        return {
          id: "301",
          show_id: "201",
          user_id: "101",
        };

      default:
        return undefined;
    }
  };

  public insertBookTicket = async (ticket: ITicketDB): Promise<void> => {};

  public deleteReservationTicket = async (
    showId: string,
    userId: string
  ): Promise<void> => {};
}
