import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteCouponMutation } from '@/data/coupon';

const CouponDeleteView = () => {
  const { mutate: deleteCoupon, isLoading: loading } =
    useDeleteCouponMutation();

  const { data } = useModalState();
  const { closeModal } = useModalAction();

  function handleDelete() {
    deleteCoupon({
      id: data,
    });
    closeModal();
  }

  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default CouponDeleteView;
