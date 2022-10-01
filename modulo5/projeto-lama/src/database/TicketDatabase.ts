import { ICreateTicketOutputDTO, ITicketDB } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase {
  public static TABLE_Tickets = "Lama_Tickets";

  public selectTickets = async (showId: string): Promise<number | undefined> => {
    const result: any = await BaseDatabase.connection(
      TicketDatabase.TABLE_Tickets
    )
      .select()
      .count("id AS tickets")
      .where({ show_id: showId });

    return result[0].tickets as number;
  };

  public findTicket = async (showId: string, userId: string): Promise<ITicketDB | undefined> => {
    const ticketsDB: ITicketDB[] = await BaseDatabase.connection(
      TicketDatabase.TABLE_Tickets)
      .select()
      .where({ show_id: showId })
      .andWhere({ user_id: userId });

    return ticketsDB[0];
  };
  public insertBookTicket = async (ticket: ITicketDB): Promise<void> => {
    await BaseDatabase
    .connection(TicketDatabase.TABLE_Tickets)
    .insert({
      id: ticket.id,
      show_id: ticket.show_id,
      user_id: ticket.user_id,
    });
  };

  public deleteReservationTicket = async (showId: string, userId: string) => {
    await BaseDatabase.connection(TicketDatabase.TABLE_Tickets)
    .delete()
    .where({show_id: showId})
    .andWhere({user_id:userId})
  };
}
