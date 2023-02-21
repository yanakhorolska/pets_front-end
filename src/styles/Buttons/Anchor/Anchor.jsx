import { useGetNoticeQuery } from 'redux/fetchNotice';
import { AnchorLayout, Anchor } from './Anchor.styled';

export const AnchorElem = () => {
  const { data } = useGetNoticeQuery();

  console.log(data);

  return (
    <AnchorLayout>
      <Anchor></Anchor>
    </AnchorLayout>
  );
};
