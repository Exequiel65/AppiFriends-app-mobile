interface IEventItem {
    id: string;
    owner: string;
    category: string;
    subcategories: string[];
    title: string;
    date: Date;
    type: string,
    gender: string,
    totalPeople: number,
    banner: string,
    description:string,
    rules: string[]
}

interface ISection {
    title: string;
    data: IEventItem[];
}

interface ITypes{
    name: string;
}
