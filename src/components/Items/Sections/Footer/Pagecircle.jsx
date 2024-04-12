import { styled } from "styled-components";
import Description from "~/components/auth/Text/Description";

function Pagecircle({ text }) {
  return (
    <PagecircleTag>
      <Description text={text} />
    </PagecircleTag>
  );
}

export default Pagecircle;
export const PagecircleTag = styled.div`
  padding: 12.5px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  margin: 0;
  width: 40px;
  height: 40px;
  text-align: center;
`;
