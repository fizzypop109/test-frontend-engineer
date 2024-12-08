import {Categories} from "./_components/Categories/Categories";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
        <Categories />
      </div>
    </div>
  );
}
