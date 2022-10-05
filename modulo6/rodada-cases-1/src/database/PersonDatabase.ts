import { IPersonDB, Person } from "../models/Person";
import { BaseDatabase } from "./BaseDatabase";

export class PersonDatabase extends BaseDatabase {
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
    const personDB: IPersonDB[] = await BaseDatabase
    .connection(PersonDatabase.TABLE_NAME)
    .select();
    return personDB;
  };

  public findPersonName = async (
    firstName: string,
    lastName: string
  ): Promise<IPersonDB | undefined> => {
    const result: IPersonDB[] = await BaseDatabase
    .connection(PersonDatabase.TABLE_NAME)
      .select()
      .where({ first_name: firstName })
      .andWhere({ last_name: lastName });

    return result[0];
  };

  public insertPerson = async (person: Person): Promise<void> => {
    const personDB = this.toPersonDBModel(person);

    await BaseDatabase.connection(PersonDatabase.TABLE_NAME)
    .insert(personDB);
  };
}
