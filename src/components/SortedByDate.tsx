export const SortedByDate = (data: any) => {
  // @ts-ignore
  data?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
