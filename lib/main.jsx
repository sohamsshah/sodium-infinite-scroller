import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
const InfiniteScroll = ({
  dataLength,
  hasMore = false,
  loadMore,
  loader,
  threshold = 1,
  endContent,
  children,
}) => {
  const ref = useRef(null);
  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold,
    },
    false
  );

  useEffect(() => {
    (async function () {
      if (isBottomVisible && dataLength !== 0) {
        await loadMore();
      }
    })();
  }, [isBottomVisible]);
  return (
    <div>
      {children}
      {hasMore ? <div ref={ref}>{loader}</div> : <div>{endContent}</div>}
    </div>
  );
};

export default InfiniteScroll;
