import { IPersonDB, Person } from "../../src/models/Person";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class PersonDatabaseMock extends BaseDatabase {
  private static TABLE_NAME = "Participation_percentage";

  public toPersonDBModel = (person: Person): IPersonDB => {
    const personDB: IPersonDB = {
      id: person.getId(),
      first_name: person.getFirstName(),
      last_name: person.getLastName(),
      participation: person.getParticipation(),
    };
    return personDB;
  };

  public selectPerson = async (): Promise<IPersonDB[]> => {
    return [
        {
            id: "101",
            first_name: "João",
            last_name: "Pessoa",
            participation: 30
        },
        {
            id: "102",
            first_name: "Joaquin",
            last_name: "Parente",
            participation: 25
        },
        {
            id: "103",
            first_name: "Maria",
            last_name: "Julhia",
            participation: 10
        }
    ]
  };

  public findPersonName = async (
    firstName: string,
    lastName: string
  ): Promise<IPersonDB | undefined> => {
    if (firstName === "João" && lastName === "Pessoa") {
        return {
            id: "101",
            first_name: "João",
            last_name: "Pessoa",
            participation: 30
        } 
    } undefined
  };

  public insertPerson = async (person: Person): Promise<void> => {};
}
