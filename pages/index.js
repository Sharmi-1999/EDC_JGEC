import NewsSlider from "../components/NewsSlider";
import useSWR from "swr";
export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  let { data, error } = useSWR("api/static/news", fetcher);

  console.log({ data, error });

  return (
    <div>
      <NewsSlider data={data} error={error} />
    </div>
  );
}
