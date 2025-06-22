
function generateRange(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export const returnPaginationRange = (totalPages, currentPage, siblings = 1) => {
  const totalPageNumbers = siblings + 5; 
  
  if (totalPages <= totalPageNumbers) {
    return generateRange(1, totalPages);
  }

  const leftSiblingIndex = Math.max(currentPage - siblings, 1);
  const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblings;
    const leftRange = generateRange(1, leftItemCount);
    return [...leftRange, '...', totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblings;
    const rightRange = generateRange(totalPages - rightItemCount + 1, totalPages);
    return [1, '...', ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = generateRange(leftSiblingIndex, rightSiblingIndex);
    return [1, '...', ...middleRange, '...', totalPages];
  }

  return generateRange(1, totalPages);
};