export class Events {
    private name: String;
    private description: String;
    private userId: String;
    private imageUrl: String;
    private imageCoverUrl: String;
    private usersIds: String;

    constructor(name: String, description: String, userId: String, imageUrl: String, imageCoverUrl: String, usersIds: String) {
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.imageUrl = imageUrl;
        this.imageCoverUrl = imageCoverUrl;
        this.usersIds = usersIds;
    }
}
