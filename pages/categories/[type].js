import { useRouter } from "next/router";

export default function Type() {
  const router = useRouter();
  const { type } = router.query;
  return <div>{type}</div>;
}
