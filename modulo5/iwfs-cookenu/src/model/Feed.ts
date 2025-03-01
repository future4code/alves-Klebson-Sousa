import moment from "moment";

class Feed {
  private id: string;
  private title: string;
  private description: string;
  private creation_Date: string;
  private user_id: string;
  private name: string;
  constructor(
    id: string,
    title: string,
    description: string,
    creation_Date: Date,
    user_id: string,
    name: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creation_Date = moment(creation_Date, "YYYY-MM-DD").format(
      "DD/MM/YYYY"
    );
    this.user_id = user_id;
    this.name = name;
  }

  static toFeedModel(data: any): Feed | undefined {
    if (!data) return undefined;
    return new Feed(
      data.id,
      data.title,
      data.description,
      data.creation_Date,
      data.user_id,
      data.name
    );
  }
}

export default Feed;
