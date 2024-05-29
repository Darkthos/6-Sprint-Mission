import { useRouter } from "next/router";

function BoardsId() {
  const router = useRouter();
  const { boardId } = router.query;

  return <div>boards</div>;
}

export default BoardsId;
