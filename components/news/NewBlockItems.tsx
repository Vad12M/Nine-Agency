import NewItem from "./NewItem";
import { format } from "date-fns";

export default function NewBlockItems({
  items
}: {
  items: {
    id: number;
    date: Date;
    description: string;
    image: string;
  }[];
}) {

  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-[330px] md:w-full md:py-10 py-5 border-b border-white">
      {items.map((item, index) => (
        <NewItem
          key={item.id}
          id={item.id}
          image={item.image}
          date={format(item.date, 'dd MMM yyyy')}
          description={item.description}
        />
      ))}
    </div>
  )
}
