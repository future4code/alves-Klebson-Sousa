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
      case "202":
        return 1;
      default:
        return undefined;
    }
  };

  public findTicket = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    
    switch (showId) {
      case "201" :
        return {
          id: "301",
          show_id: "201",
          user_id: "id-mock-admin",
        }
      case "201" && "id-mock-normal":
        return {
          id: "301",
          show_id: "201",
          user_id: "id-mock-normal",
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
