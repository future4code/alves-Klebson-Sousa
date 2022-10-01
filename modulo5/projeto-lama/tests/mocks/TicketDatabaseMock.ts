import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ITicketDB } from "../../src/models/Show";

export class TicketDatabaseMock extends BaseDatabase {
  public static TABLE_Tickets = "Lama_Tickets";

  public selectTickets = async (
    showId: string
  ): Promise<number | undefined> => {
   
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
