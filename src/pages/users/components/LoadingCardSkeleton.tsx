import { Skeleton } from "@mui/material";

const LoadingCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" width="40%" height={40} />
      <Skeleton variant="text" width="30%" />
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="70%" />
    </>
  );
};

export default LoadingCardSkeleton;
