export class DropdownItem {

    public Value: string = "";
    public Text: string = "";

    constructor(value: string, text: string) {
        this.Value = value;
        this.Text = text;
    }

}

export class Dropdown {

    public SelectedValues: string[] = [];

    public Items: DropdownItem[] = [];

}