const Loading = () => {
  return (
    <>
      <div className="text-center p-6">
        <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#714F04] mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your adventure is about to begin
        </p>
      </div>
    </>
  );
};

export default Loading;
